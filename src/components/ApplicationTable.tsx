'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Application = {
  company: string,
  position: string,
  url: string,
  applied: boolean,
  reply: boolean,
  replyType: '' | 'interview' | 'declined',
  applyDate: Date,
  replyDate?: Date | undefined,
}

export const sampleData: Application[] = [
  {
    company: 'Fountain',
    position: 'Software Engineer - Front End (E5)',
    url: 'https://boards.greenhouse.io/swishanalytics/jobs/4405991005?gh_src=5e6aaedf5us',
    applied: true,
    reply: false,
    replyType: '',
    applyDate: new Date(2024, 4, 24),
    replyDate: undefined,
  },
  {
    company: 'Swish',
    position: 'Front End Engineer',
    url: 'https://boards.greenhouse.io/fountain/jobs/4345210006',
    applied: true,
    reply: false,
    replyType: '',
    applyDate: new Date(2024, 4, 24),
    replyDate: undefined,
  },
  {
    company: 'Fountain',
    position: 'Software Engineer - Front End (E5)',
    url: 'https://boards.greenhouse.io/swishanalytics/jobs/4405991005?gh_src=5e6aaedf5us',
    applied: true,
    reply: false,
    replyType: '',
    applyDate: new Date(2024, 4, 24),
    replyDate: undefined,
  },
  {
    company: 'Swish',
    position: 'Front End Engineer',
    url: 'https://boards.greenhouse.io/fountain/jobs/4345210006',
    applied: true,
    reply: false,
    replyType: '',
    applyDate: new Date(2024, 4, 24),
    replyDate: undefined,
  },
  {
    company: 'Fountain',
    position: 'Software Engineer - Front End (E5)',
    url: 'https://boards.greenhouse.io/swishanalytics/jobs/4405991005?gh_src=5e6aaedf5us',
    applied: true,
    reply: false,
    replyType: '',
    applyDate: new Date(2024, 4, 24),
    replyDate: undefined,
  },
  {
    company: 'Swish',
    position: 'Front End Engineer',
    url: 'https://boards.greenhouse.io/fountain/jobs/4345210006',
    applied: true,
    reply: false,
    replyType: '',
    applyDate: new Date(2024, 4, 24),
    replyDate: undefined,
  },
]

export const columns : ColumnDef<Application>[]= [
  {
    accessorKey: "company",
    header: ({column}) => {
        return(
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Company 
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
    cell: ({ row }) => (<div className="capitalize">{row.getValue("company")}</div>),
  },
  {
    accessorKey: "position",
    header: "Position Name",
    cell: ({ row }) => (<div className="capitalize min-w-fit">{row.getValue("position")}</div>),
  },
  {
    accessorKey: "url",
    header: "Position url",
    cell: ({ row }) => {
        return (
          <Button
            variant='link'
          >
            <a href={row.getValue("url")}>
              View Position
            </a>
          </Button>
        )
    },
  },
  {
    accessorKey: "applied",
    header: "Applied",
    cell: ({ row }) => (
        <Checkbox
        //   checked={(e) => {row.setApplied(e)}}
        //   onCheckedChange={(value) => (!value)}
          aria-label="Select row"
        />
      ),
  },
  {
    accessorKey: "reply",
    header: "Reply",
    cell: ({ row }) => (
        <Checkbox
        //   checked={(e) => {row.setApplied(e)}}
        //   onCheckedChange={(value) => (!value)}
          aria-label="Select row"
        />
      ),
  },
  {
    accessorKey: "replyType",
    header: "Reply Type",
    cell: ({row}) => {
        return (
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Reply" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="interview">Interview Invite</SelectItem>
                    <SelectItem value="decline">Declined</SelectItem>
                </SelectContent>
            </Select>
        )
    }
  },
  // {
  //   accessorKey: "applyDate",
  //   header: "Application Date",
  //   cell: ({row}) => {
  //       const [date, setDate] = useState<Date>()
  //       return (
  //           <Popover>
  //             <PopoverTrigger asChild>
  //               <Button
  //                 variant={"outline"}
  //                 className={cn(
  //                   "w-[200px] justify-start text-left font-normal",
  //                   !date && "text-muted-foreground"
  //                 )}
  //               >
  //                 <CalendarIcon className="mr-2 h-4 w-4" />
  //                 {date ? format(date, "PPP") : <span>Pick a date</span>}
  //               </Button>
  //             </PopoverTrigger>
  //             <PopoverContent className="w-auto p-0">
  //               <Calendar
  //                 mode="single"
  //                 selected={date}
  //                 onSelect={setDate}
  //                 initialFocus
  //               />
  //             </PopoverContent>
  //           </Popover>
  //         )
  //   }
  // },
  // {
  //   accessorKey: "replyDate",
  //   header: "Reply Date",
  //   cell: ({row}) => {
  //       const [date, setDate] = useState<Date>()
  //       return (
  //           <Popover>
  //             <PopoverTrigger asChild>
  //               <Button
  //                 variant={"outline"}
  //                 className={cn(
  //                   "w-[200px] justify-start text-left font-normal",
  //                   !date && "text-muted-foreground"
  //                 )}
  //               >
  //                 <CalendarIcon className="mr-2 h-4 w-4" />
  //                 {date ? format(date, "PPP") : <span>Pick a date</span>}
  //               </Button>
  //             </PopoverTrigger>
  //             <PopoverContent className="w-auto p-0">
  //               <Calendar
  //                 mode="single"
  //                 selected={date}
  //                 onSelect={setDate}
  //                 initialFocus
  //               />
  //             </PopoverContent>
  //           </Popover>
  //         )
  //   }
  // },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

const ApplicationTable =  <TData, TValue>({
    columns,
    data,
    }: DataTableProps <TData, TValue> ) => {
        
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
    const [sorting, setSorting] = useState<SortingState>([])

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                            <TableHead key={header.id}>
                                {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                    )}
                            </TableHead>
                            )
                        })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-24 text-center">
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
            </Table>
        </div>
    )
}

export default ApplicationTable;