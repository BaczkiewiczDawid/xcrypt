import {Bookmark} from "lucide-react";
import {useEffect, useState} from "react";

type Props = {
    selectedPair: string
}

export const Bookmarks = ({selectedPair}: Props) => {
    const [bookmarks, setBookmarks] = useState<string[]>([]);

    const addToBookmarks = () => {
        const currentBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

        let updatedBookmarks: string[];

        if (currentBookmarks.includes(selectedPair)) {
            updatedBookmarks = currentBookmarks.filter((pair: string) => pair !== selectedPair);
        } else {
            updatedBookmarks = [...currentBookmarks, selectedPair];
        }

        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    }

    useEffect(() => {
        const currentBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

        setBookmarks(currentBookmarks);
    }, [selectedPair, addToBookmarks]);

    return <Bookmark className={`cursor-pointer ${bookmarks.includes(selectedPair) && "bg-amber-400"}`}
                     onClick={addToBookmarks}/>
}