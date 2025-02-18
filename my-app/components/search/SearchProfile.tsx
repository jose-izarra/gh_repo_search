"use client"
import { useState, useEffect } from "react"
import Results from "./Results"
import { Result } from "@/lib/types"
import { useRouter } from "next/navigation"




/*
    This is the search bar for the profile page.
    It handles all the logic needed for the search bar to function and it is a
    parent component for the Results component which renders the search items.
*/

export default function SearchProfile() {


    const [search, setSearch] = useState("")
    const [results, setResults] = useState<Result[]>([])
    const router = useRouter()

    // anytime the search query changes, update the search state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!search) return;

        // go to the first result's profile
        router.push("/" + results[0].login)
    }

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(`/api/github?search=${search}&type=users`, {
                method: "GET",
            })

            const data = await response.json()

            // only update results if there are users for that query
            if (data) setResults(data.items)
        }

        // only fetch if there user has typed something
        if (search) fetchProfile()
        else setResults([])
    }, [search]) // only run when the search changes


    return (
        // this div needs to be a relative for Results to work
        <div className="flex justify-between gap-x-4 w-full max-w-5xl border border-gray-300 rounded-md p-2 relative">
            <form
                onSubmit={handleSubmit}
                className="flex justify-between gap-x-4 w-full "
                >
                <input
                    type="text"
                    placeholder="Search for a profile"
                    className="w-full px-2 py-1 focus:outline-none"
                    value={search}
                    onChange={handleChange}
                    />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    type="submit"
                    >
                    Search
                </button>

            </form>
            {results && results.length > 0 && (
                <Results
                    results={results}
                />
            )}
        </div>
    )
}
