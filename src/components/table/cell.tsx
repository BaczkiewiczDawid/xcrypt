import {TableCell} from "@/components/ui/table";

export const Cell = (children: any) => {
    return (
        <TableCell className={"text-black"}>{children}</TableCell>
    )
}