import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Command, CommandGroup, CommandInput, CommandItem, CommandList} from "cmdk";
import {Check, ChevronsUpDown} from "lucide-react";
import {SetStateAction, useState} from "react";
import {cn} from "@/lib/utils";
import {BookmarkIcon} from "@heroicons/react/24/outline";

type Props = {
    value: string,
    setValue: React.Dispatch<SetStateAction<string>>
    options: {
        label: string,
        value: string,
    }[]
    bookmarks?: string[]
    searchPlaceholder?: string
}

export const Combobox = ({value, setValue, options, bookmarks, searchPlaceholder}: Props) => {
    const [open, setOpen] = useState(false)

    const selectedOption = options.find((option) => option.value === value)?.label

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="hover:text-secondary w-auto justify-between text-xs hover:bg-white p-2"
                >
                    <>
                        {value
                            ? selectedOption
                            : "Select pair"}
                        <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50"/></>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="text-secondary w-auto bg-white p-0 text-xs min-w-24">
                <Command>
                    {searchPlaceholder &&
                        <CommandInput className={"text-secondary bg-white p-2"} placeholder={searchPlaceholder}/>
                    }
                    <CommandList>
                        <CommandGroup className={"max-h-48 overflow-y-auto"}>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                    className={"flex cursor-pointer items-center justify-between px-4 py-2 text-xs hover:bg-gray-200"}
                                >
                                    {option.label}
                                    {bookmarks && bookmarks.includes(option.value) && (
                                        <BookmarkIcon className={"h-6 w-6 fill-primary"}/>
                                    )}
                                    {/*<Check*/}
                                    {/*    className={cn(*/}
                                    {/*        "mr-2 h-4 w-4",*/}
                                    {/*        value === option.value ? "opacity-100" : "opacity-0"*/}
                                    {/*    )}*/}
                                    {/*/>*/}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}