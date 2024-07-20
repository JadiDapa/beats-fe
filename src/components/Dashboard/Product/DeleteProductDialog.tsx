import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useNotificationStore from "@/lib/store/notificationStore";
import { DeleteProduct } from "@/api/useProducts";
import { TailSpin } from "react-loader-spinner";

type DeleteProductDialogProps = {
  slug: string;
  name: string;
};

const DeleteProductDialog: React.FC<DeleteProductDialogProps> = ({
  slug,
  name,
}) => {
  const { deleteProduct, isLoading } = DeleteProduct();
  const { setStatus, setMessage } = useNotificationStore();

  async function handleDelete() {
    const result = await deleteProduct(slug);

    if (result) {
      setStatus("success");
      setMessage(`Product : ${name} Deleted Successfully!`);
    } else {
      setStatus("error");
      setMessage("Something Went Wrong!");
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-primary">
        <Trash2 size={20} className="" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete Data : <span className="text-red-500">{name}</span> ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this data
            and remove all the related data from server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-700"
            onClick={handleDelete}
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
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProductDialog;
