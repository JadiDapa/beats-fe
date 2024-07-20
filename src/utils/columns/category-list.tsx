import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import TableSorter from "@/components/Dashboard/TableSorter";
import Category from "@/types/category";
import { formatDate } from "../date/formatDate";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisVertical, Eye } from "lucide-react";
import DeleteCategoryDialog from "@/components/Dashboard/Category/DeleteCategoryDialog";
import EditCategoryModal from "@/components/Dashboard/Category/EditCategoryModal";

export const categoryListColumn: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    accessorFn: (row) => row.id,
    header: ({ column }) => (
      <div className="pl-4">
        <TableSorter column={column} header="#" />
      </div>
    ),
    cell: ({ row }) => <div className="ml-4 text-primary">{row.index + 1}</div>,
  },
  {
    accessorKey: "image",
    accessorFn: (row) => row.image,
    header: ({ column }) => <TableSorter column={column} header="IMAGE" />,
    cell: ({ getValue }) => (
      <div className="aspect-square size-24 overflow-hidden rounded-md">
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}/${getValue()}`}
          className="h-full w-full object-contain object-center"
          alt=""
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    accessorFn: (row) => row.name,
    header: ({ column }) => <TableSorter column={column} header="CATEGORY" />,
    cell: ({ getValue }) => <Link to={""}>{getValue() as string}</Link>,
  },
  {
    accessorKey: "products",
    accessorFn: (row) => row.Products?.length,
    header: ({ column }) => <TableSorter column={column} header="PRODUCTS" />,
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
  },
  {
    accessorKey: "createdAt",
    accessorFn: (row) => row.createdAt,
    header: ({ column }) => <TableSorter column={column} header="CREATED AT" />,
    cell: ({ getValue }) => <div>{formatDate(getValue() as string)}</div>,
  },
  {
    accessorKey: "function",
    header: ({ column }) => <TableSorter column={column} header="FN" />,
    cell: ({ row }) => (
      <Popover>
        <PopoverTrigger>
          <EllipsisVertical strokeWidth={1.5} />
        </PopoverTrigger>
        <PopoverContent className="flex max-w-fit gap-3 px-3 py-1 text-primary">
          <Link to={`/products/${row.original.slug}`}>
            <Eye size={20} className="cursor-pointer" />
          </Link>
          <EditCategoryModal category={row.original} />
          <DeleteCategoryDialog
            name={row.original.name}
            slug={row.original.slug}
          />
        </PopoverContent>
      </Popover>
    ),
  },
];
