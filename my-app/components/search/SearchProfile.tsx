"use client"
import { useState, useEffect } from "react"
import SearchResults from "./SearchResults"
import { Result } from "@/lib/types"




export default function SearchProfile() {


    const [search, setSearch] = useState("")
    const [results, setResults] = useState<Result[]>([])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)

    }

    const handleSearch = () => {
        console.log(search)
    }

    useEffect(() => {
        // everytime the search query changes, make a call to the github api to fetch results

        const fetchProfile = async () => {
            const response = await fetch(`/api/github?search=${search}&type=users`, {
                method: "GET",
            })
            // const data = await response.json()
            const data = await response.json()
            console.log(data)
            setResults(data.items)
        }

        // only fetch if there user has typed something
        if (search) fetchProfile()
        else setResults([])
    }, [search])

    return (
        // this div needs to be a relative for SearchResults to work
        <div className="flex justify-between gap-x-4 w-full max-w-5xl border border-gray-300 rounded-md p-2 relative">
            <input
                type="text"
                placeholder="Search for a profile"
                className="w-full px-2 py-1 focus:outline-none"
                value={search}
                onChange={handleChange}
                />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleSearch}
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
