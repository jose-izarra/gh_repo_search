"use client"
import { useState, useEffect } from "react"
import SearchResults from "./SearchResults"
import { Result, Repo } from "@/lib/types"

interface Props {
    username: string
}




export default function SearchRepo({
    username,
}: Props) {


    // const [search, setSearch] = useState("")
    const [repos, setRepos] = useState<Repo[]>([])
    const [results, setResults] = useState<Result[]>([])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setSearch(e.target.value)
        const query = e.target.value

    }

    const handleSearch = (query: string) => {
        console.log(query)
    }

    useEffect(() => {
        // on mount, fetch the user's repos, this is to avoid making repetitive api calls on query change
        const fetchUserRepos = async () => {
            const response = await fetch(`/api/github?username=${username}`, {
                method: "GET",
            })
            const data = await response.json()
            setRepos(data as Repo[])
        }
        fetchUserRepos()
    }, [])


    return (
        // this div needs to be a relative for SearchResults to work
        <div className="flex justify-between gap-x-4 w-full max-w-5xl border border-gray-300 rounded-md p-2 relative">
            <input
                type="text"
                placeholder="Search for a repository"
                className="w-full px-2 py-1 focus:outline-none"
                // value={search}
                onChange={handleChange}

                />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                // onClick={() => handleSearch(search)}
                >
                Search
            </button>

            {results.length > 0 && (
                <SearchResults
                    results={results}
                />
            )}
        </div>
    )
}
