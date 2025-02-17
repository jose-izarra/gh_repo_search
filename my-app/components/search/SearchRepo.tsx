"use client"
import { useState, useEffect } from "react"
import { RepoResult, Repo } from "@/lib/types"
import { Filter } from "@/lib/types"
import { ChevronDown } from "lucide-react"

interface Props {
    username: string;
    repos: Repo[];
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setResults: React.Dispatch<React.SetStateAction<RepoResult[]>>;
    setFilters: React.Dispatch<React.SetStateAction<Filter>>;
}




export default function SearchRepo({
    username,
    repos,
    setSearch,
    setResults,
    setFilters
}: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value

        const filteredResults = repos
            .filter((repo) => repo.name.toLowerCase().includes(query.toLowerCase()))
            .map((repo) => {
                return {
                    id: repo.id,
                    name: repo.name,
                    full_name: repo.full_name,
                    description: repo.description,
                    language: repo.language,
                    updated_at: repo.updated_at
                }
            })

        setResults(filteredResults as RepoResult[])

    }

    // const handleFocus = () => {
    //     const initialResults = repos
    //         .slice(0, 6)
    //         .map((repo: Repo) => {
    //             return {
    //                 id: repo.id,
    //                 name: repo.name,
    //                 full_name: repo.full_name,
    //                 description: repo.description,
    //                 language: repo.language,
    //                 updated_at: repo.updated_at
    //             }
    //         })
    //     setResults(initialResults as RepoResult[])
    // }

    // const handleBlur = () => {
    //     const searchInput = document.getElementById("search-repo") as HTMLInputElement
    //     if (searchInput.value === "") {
    //         setResults([])
    //     }
    // }

    return (
        <div className="flex gap-x-3 w-full">

            {/* this div needs to be a relative for SearchResults to work */}
            <div className="flex justify-between gap-x-4 w-full border border-gray-300 rounded-md p-2 relative">
                <input
                    id="search-repo"
                    type="text"
                    placeholder="Search for a repository"
                    className="w-full px-2  focus:outline-none text-base"
                    onChange={handleChange}
                    />
            </div>
            <button
                className="flex items-center gap-x-1 py-2 px-3 bg-gray-100/80 border border-gray-300 rounded-md">
                <p className="text-sm font-semibold">Type</p>
                {/* <summary className="btn m-1">Type</summary> */}
                <ChevronDown className="size-4" />
                {/* <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul> */}
            </button>
            <button
                className="flex items-center gap-x-1 py-2 px-3 bg-gray-100/80 border border-gray-300 rounded-md">
                <p className="text-sm font-semibold">Language</p>
                <ChevronDown className="size-4" />
            </button>
            <button
                className="flex items-center gap-x-1 py-2 px-3 bg-gray-100/80 border border-gray-300 rounded-md">
                <p className="text-sm font-semibold">Sort</p>
                <ChevronDown className="size-4" />
            </button>
        </div>
    )
}
