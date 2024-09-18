"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, StarIcon } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ClimbRoute = {
  id: string
  city: string
  rock: string
  route: string
  type: "Esportiva" | "Tradicional" | "Boulder"
  rate: number
}

export const columns: ColumnDef<ClimbRoute>[] = [
  {
    accessorKey: "city",
    enableSorting: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cidade
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "rock",
    header: "Rocha",
  },
  {
    accessorKey: "route",
    header: "Via",
  },
  {
    accessorKey: "type",
    enableSorting: true,
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Tipo
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "rate",
    header: "Avaliação",
    cell: ({ row }) => {
      const rate = row.getValue("rate") as number;
      const stars = Array.from({ length: rate }).map((_, i) => (
        <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
      ))
      return (
        <div className="flex items-center">
          {stars.map((star) => star)}
        </div>
      )
    }
  },
]
