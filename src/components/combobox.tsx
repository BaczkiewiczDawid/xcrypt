import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Command, CommandGroup, CommandInput, CommandItem, CommandList} from "cmdk";
import {Check, ChevronsUpDown} from "lucide-react";
import {SetStateAction, useState} from "react";
import {cn} from "@/lib/utils";

type Props = {
    value: string,
    setValue: React.Dispatch<SetStateAction<string>>
    options: {
        label: string,
        value: string,
    }[]
}

export const Combobox = ({value, setValue, options}: Props) => {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-auto justify-between"
                >
                    <>
                        {value
                            ? options.find((option) => option.value === value)?.label
                            : "Select pair"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/></>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Command>
                    <CommandInput/>
                    <CommandList>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                    className={"px-4 py-2 flex items-center justify-between text-sm cursor-pointer"}
                                >
                                    {option.label}
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === option.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}