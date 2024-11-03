import {SetStateAction, useEffect, useState} from "react";
import {BookmarkIcon} from "@heroicons/react/24/outline";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";

type Props = {
    selectedPair: string;
    bookmarks: string[];
    setBookmarks: React.Dispatch<SetStateAction<string[]>>;
};

export const Bookmarks = ({selectedPair, bookmarks, setBookmarks}: Props) => {
    const addToBookmarks = () => {
        if (!window) return;

        const currentBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

        let updatedBookmarks: string[];

        if (currentBookmarks.includes(selectedPair)) {
            updatedBookmarks = currentBookmarks.filter((pair: string) => pair !== selectedPair);
        } else {
            updatedBookmarks = [...currentBookmarks, selectedPair];
        }

        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
    };

    useEffect(() => {
        if (!window) return;

        const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
        setBookmarks(savedBookmarks);
    }, [])

    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <BookmarkIcon
                        className={`h-6 w-6 cursor-pointer ${bookmarks.includes(selectedPair) && "fill-primary"}`}
                        onClick={addToBookmarks}
                    />
                </TooltipTrigger>
                <TooltipContent>
                    <p className={"text-xsm"}>{bookmarks.includes(selectedPair) ? "Remove from bookmarks!" : "Add to bookmarks!"}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
