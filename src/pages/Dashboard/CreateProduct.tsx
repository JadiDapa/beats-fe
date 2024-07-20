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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Plus, Upload, XCircle } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PostProduct } from "@/api/useProducts";
import { TailSpin } from "react-loader-spinner";
import { GetCategories } from "@/api/useCategory";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  price: z.string().min(1),
  categorySlug: z.string().min(1),
  description: z.string().min(1),
  stock: z.string().min(1),
});

const CreateProduct = () => {
  const { postProduct, isLoading, error } = PostProduct();
  const { categories } = GetCategories();
  const navigate = useNavigate();
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
      price: "",
      categorySlug: "",
      description: "",
      stock: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await postProduct({
      name: values.name,
      slug: values.slug,
      price: values.price,
      categorySlug: values.categorySlug,
      description: values.description,
      image: picture,
      isFeatured: "false",
      stock: values.stock,
    });

    if (result) {
      toast.success("New Product Created Successfully!");
      navigate("/dashboard/product-list");
    } else {
      toast.error("Something Went Wrong!");
    }
  }

  if (error) {
    console.log("error client", error);
  }

  return (
    <section className="flex w-full flex-col gap-6 py-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <header className="items-center justify-between lg:flex">
            <div className="">
              <h1 className="text-2xl font-medium text-primary">
                Create New Product
              </h1>
              <p className="mt-1 text-gray-400">
                Create a new product for displaying to our clients
              </p>
            </div>
            <div className="mt-6 flex justify-end gap-4 lg:mt-0 lg:justify-start">
              <Button variant="secondary">Discard</Button>
              <Button variant="default" type="submit" className="gap-2">
                <Plus />
                Submit
              </Button>
            </div>
          </header>
          <div className="flex flex-col flex-wrap gap-6 lg:flex-row">
            <div className="box-shadow flex w-full flex-col gap-6 rounded-md bg-white p-6 lg:flex-[4]">
              <h2 className="text-xl font-medium">Informasi Produk</h2>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: Lift-Up Monitor" {...field} />
                    </FormControl>
                    <FormMessage />
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
                        placeholder="ex: lift-up-monitor"
                        value={slugify(form.watch("name"), { lower: true })}
                        {...form.register("slug")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: 1.000.000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categorySlug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          {categories?.map((category) => (
                            <SelectItem key={category.id} value={category.slug}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: 100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="h-72">
                    <FormLabel>Product Description</FormLabel>
                    <FormControl className="h-[216px]">
                      <ReactQuill theme="snow" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-6 lg:flex-[3]">
              <div className="box-shadow flex flex-col gap-6 rounded-md bg-white p-6">
                <h2 className="text-xl font-medium">Foto Produk</h2>
                {pictureUrl ? (
                  <div className="relative flex h-60 w-full flex-col rounded-md border-[3px] border-dashed">
                    <div className="h-5/6 w-full items-center justify-center p-1">
                      <img
                        src={pictureUrl}
                        className="max-h-full border-2 border-double p-1"
                        alt=""
                      />
                    </div>
                    <div
                      onClick={removePicture}
                      className="flex w-full cursor-pointer items-center justify-end gap-2 p-2 text-red-400"
                    >
                      <XCircle size={18} />
                      <span className="text-lg font-medium">Hapus File</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex h-52 w-full flex-col items-center justify-center rounded-md border-[3px] border-dashed">
                    <div className="flex size-12 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <Upload size={28} strokeWidth={1.75} />
                    </div>
                    <div className="mt-8 flex flex-col items-center gap-2 text-center">
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
              <div className="box-shadow flex w-full flex-col items-center justify-between gap-3 rounded-md bg-white p-6">
                <Button
                  disabled={isLoading}
                  className="flex w-full items-center gap-3"
                >
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
                </Button>
                <div className="text-center">
                  <div className="text-primary lg:text-lg">
                    Make sure data is correctly filled
                  </div>
                  <small className="text-xs lg:text-sm">
                    You can modify this data later*
                  </small>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreateProduct;
