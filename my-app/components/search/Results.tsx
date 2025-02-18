"use client"
import SearchItem from "./SearchItem"
import { Result } from "@/lib/types"



interface Props {
    results: Result[]
}



/*
    This is the component for displaying the search results.
    It is used in the SearchProfile component.
*/

export default function Results({
    results,
}: Props) {


    return (
        <ul
            className="flex flex-col gap-y-2 border border-gray-300 rounded-md p-2 absolute top-[105%] left-0 w-full px-1 "
            >
            {results.slice(0, 6).map((result) => <SearchItem key={result.id} result={result} />)}
        </ul>
    )
}
