import {TableCell} from "@/components/ui/table";
import {cn} from "@/lib/utils";

export const Cell = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return (
        <TableCell className={cn("text-black", className)}>{children}</TableCell>
    )
}