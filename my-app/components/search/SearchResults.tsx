"use client"
import SearchItem from "./SearchItem"
import { Result } from "@/lib/types"

// type to define the relevant data from the github api


export default function SearchResults({
    results
}: {
    results: Result[]
}) {
    console.log('results', results)

    return (
        <ul
            className="flex flex-col gap-y-2 border border-gray-300 rounded-md p-2 absolute top-[105%] left-0 w-full px-1 "
            >
            {results.slice(0, 6).map((result) => <SearchItem key={result.id} result={result} />)}
        </ul>
    )
}
