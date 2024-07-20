import { DialogClose, DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload, XCircle } from "lucide-react";
import { PostCategory } from "@/api/useCategory";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import slugify from "slugify";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Category Name is required"),
  slug: z.string().min(1, "Slug-name is required"),
});

const CreateCategoryModal = () => {
  const { postCategory, isLoading, error } = PostCategory();
  const [picture, setPicture] = useState<File | null>();
  const [pictureUrl, setPictureUrl] = useState<string | null>();

  function handlePicture(e: React.ChangeEvent<HTMLInputElement>) {
    const picture = e.target.files?.[0];
    setPicture(picture);
    setPictureUrl(URL.createObjectURL(picture!));
  }

  function removePicture() {
    setPicture(null);
    setPictureUrl(null);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await postCategory({
      name: values.name,
      slug: values.slug,
      image: picture,
    });

    if (result) {
      toast.success("New Category Created Successfully!");
    } else {
      toast.error("Something Went Wrong!");
    }
  }

  if (error) {
    console.log("error client", error);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="flex w-full items-center gap-3">
          <PlusCircle size={20} />
          Create New Category
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:min-w-[680px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">
            Create a New Category
          </DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-wrap gap-6 pt-4 lg:gap-4"
            >
              <div className="flex-1 space-y-2 lg:space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category Name</FormLabel>
                      <FormControl>
                        <Input className="w-full" {...field} />
                      </FormControl>
                      <FormMessage className="text-start" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="slug"
                  render={() => (
                    <FormItem>
                      <FormLabel>Slug (auto)</FormLabel>
                      <FormControl>
                        <Input
                          value={slugify(form.watch("name"), { lower: true })}
                          className="w-full"
                          {...form.register("slug")}
                        />
                      </FormControl>
                      <FormMessage className="text-start" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <div className="text-lg font-medium">Category Image</div>
                {pictureUrl ? (
                  <div className="relative flex h-[134px] w-full flex-col rounded-md border-[3px] border-dashed">
                    <div className="h-full w-full items-center justify-center p-1">
                      <img
                        src={pictureUrl}
                        className="max-h-full border-2 border-double p-1"
                        alt=""
                      />
                    </div>
                    <div
                      onClick={removePicture}
                      className="absolute bottom-2 right-2 flex cursor-pointer items-center justify-end gap-2 text-red-400"
                    >
                      <XCircle size={18} />
                      <span className="text-lg font-medium">Remove</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex h-[134px] w-full flex-col items-center justify-center gap-3 rounded-md border-[3px] border-dashed">
                    <div className="flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <Upload size={24} strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <Button
                        type="button"
                        className="max-w-fit bg-sky-100 text-primary"
                      >
                        Upload Gambar
                        <FormLabel className="absolute left-0 top-0 h-full w-full border opacity-0">
                          ""
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="absolute left-0 top-0 opacity-0"
                            type="file"
                            accept="image/*"
                            onChange={handlePicture}
                          />
                        </FormControl>
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <Button
                disabled={isLoading}
                className="flex w-full items-center gap-3"
              >
                <DialogClose className="w-full">
                  {isLoading ? (
                    <>
                      Submitting
                      <TailSpin
                        visible={true}
                        color="#ffffff"
                        ariaLabel="tail-spin-loading"
                        radius="0.2"
                        width={24}
                        height={24}
                        strokeWidth={5}
                      />
                    </>
                  ) : (
                    "Submit"
                  )}
                </DialogClose>
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryModal;
