import {TableCell} from "@/components/ui/table";

export const Cell = ({children}: React.ReactNode) => {
  return (
    <TableCell className={"text-black"}>{children}</TableCell>
  )
}