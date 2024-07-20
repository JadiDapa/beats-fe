import { ColumnDef } from "@tanstack/react-table";
import Product from "@/types/product";
import { Link } from "react-router-dom";
import TableSorter from "@/components/Dashboard/TableSorter";
import FeaturedSwitch from "@/components/Dashboard/Product/FeaturedSwitch";
import { formatDate } from "../date/formatDate";
import { EllipsisVertical, Eye, Pencil } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DeleteProductDialog from "@/components/Dashboard/Product/DeleteProductDialog";

export const productListColumn: ColumnDef<Product>[] = [
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
    header: ({ column }) => <TableSorter column={column} header="PRODUCT" />,
    cell: ({ getValue }) => <Link to={""}>{getValue() as string}</Link>,
  },
  {
    accessorKey: "price",
    accessorFn: (row) => row.price,
    header: ({ column }) => <TableSorter column={column} header="PRICE" />,
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
  },
  {
    accessorKey: "category",
    accessorFn: (row) => row.Categories?.name,
    header: ({ column }) => <TableSorter column={column} header="CATEGORY" />,
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
  },
  {
    accessorKey: "featured",
    accessorFn: (row) => row.isFeatured,
    header: ({ column }) => <TableSorter column={column} header="FEATURED" />,
    cell: ({ row }) => <FeaturedSwitch product={row.original} />,
  },
  {
    accessorKey: "createdAt",
    accessorFn: (row) => row.createdAt,
    header: ({ column }) => <TableSorter column={column} header="DATE" />,
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
          <Link to={`/dashboard/update-product/${row.original.slug}`}>
            <Pencil size={20} className="cursor-pointer" />
          </Link>
          <DeleteProductDialog
            name={row.original.name}
            slug={row.original.slug}
          />
        </PopoverContent>
      </Popover>
    ),
  },
];
