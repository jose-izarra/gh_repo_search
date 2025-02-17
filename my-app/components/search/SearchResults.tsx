"use client"
import SearchItem from "./SearchItem"
import { ProfileResult, RepoResult } from "@/lib/types"

// type to define the relevant data from the github api


interface Props {
    results: ProfileResult[] | RepoResult[]
    type: "profile" | "repo"
}

export default function SearchResults({
    results,
    type
}: Props) {


    return (
        <ul
            className="flex flex-col gap-y-2 border border-gray-300 rounded-md p-2 absolute top-[105%] left-0 w-full px-1 "
            >
            {type === "profile" ?
                results.slice(0, 6).map((result) => <SearchItem key={result.id} result={result} type={type} />)
                :
                results.slice(0, 6).map((result) => <SearchItem key={result.id} result={result} type={type} />)}
        </ul>
    )
}
