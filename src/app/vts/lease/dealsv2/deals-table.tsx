"use client";

import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
  RowSelectionState,
} from "@tanstack/react-table";
import Link from "next/link";
import { useState, useRef, useEffect, HTMLProps } from "react";

// IndeterminateCheckbox component to handle the indeterminate state properly
function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  return (
    <div className="inline-flex items-center align-middle">
      <label className="relative flex cursor-pointer items-center">
        <input
          type="checkbox"
          ref={ref}
          className={`peer checked:border-vts-purple-700 checked:bg-vts-purple-700 h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 bg-white transition-all ${className}`}
          {...rest}
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  );
}

export interface Deal {
  tenant: string;
  requirementSize: string;
  totalSize: string;
  asset: string;
  stage: string;
  ner: string;
  contact: string;
  comment: string;
  lastUpdated: string;
  link: string;
  isChecked: boolean;
}

export interface DealsTableProps {
  data: Deal[];
}

const columns: ColumnDef<Deal>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  {
    header: "Tenant",
    accessorKey: "tenant",
    cell: ({ row }) => {
      return (
        <Link href={row.original.link} className="text-vts-purple-700">
          {row.original.tenant}
        </Link>
      );
    },
  },
  { header: "Requirement Size", accessorKey: "requirementSize" },
  { header: "Total Size", accessorKey: "totalSize" },
  { header: "Asset", accessorKey: "asset" },
  { header: "Stage", accessorKey: "stage" },
  { header: "NER/size/yr", accessorKey: "ner" },
  { header: "Contact", accessorKey: "contact" },
  { header: "Comment", accessorKey: "comment" },
  { header: "Last Updated", accessorKey: "lastUpdated" },
];

export default function DealsTable({ data }: DealsTableProps) {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    enableMultiRowSelection: true,
  });

  return (
    <div className="w-full overflow-auto rounded-md border border-gray-200">
      <table className="w-full text-sm text-gray-700">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="bg-gray-100 px-3 py-2 text-left">
                  <div className="truncate">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-3 py-2"
                  title={cell.getValue() as string}
                >
                  <div className="truncate">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
