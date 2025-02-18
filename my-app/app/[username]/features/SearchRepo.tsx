"use client"
import { Repo } from "@/lib/types"
import { ChevronDown } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { useMemo } from "react"


interface Props {
    username: string;
    repos: Repo[];
    setResults: React.Dispatch<React.SetStateAction<Repo[]>>;
}


/*
    This is the search bar for the repositories page.
    It handles all the logic needed for the search bar to function and it is a
    parent component for the Results component which renders the search items.
    Itself is a child component for the DisplayRepositories component, which passes
    down the repos to set them accordingly when the search query changes or a language filter is applied.
*/

export default function SearchRepo({
    repos,
    setResults,
}: Props) {

    // use memoization to avoid recalculating anytime the component rerenders
    const languages: string[] = useMemo(() => {
        // Creates a set of unique languages from the repos
        return [...new Set(repos.map((repo) => repo.language as string))]
    }, [repos])


    /*
        This function handles the change of the search query.
        It simply matches the query to repos that have the query in their name
        and updates the results state accordingly.
    */
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
                    updated_at: repo.updated_at,
                    visibility: repo.visibility,
                    stargazers_count: repo.stargazers_count,
                    forks_count: repo.forks_count,
                    watchers_count: repo.watchers_count,
                    open_issues_count: repo.open_issues_count,
                    topics: repo.topics,
                    forks: repo.forks,
                    open_issues: repo.open_issues,
                    watchers: repo.watchers,
                    default_branch: repo.default_branch
                } as Repo;
            }) satisfies Repo[];

        setResults(filteredResults)
    }


    // function to handle the change of the language filter
    const handleLanguageChange = (language: string) => {
        const filteredResults = repos
            .filter((repo) => repo.language === language)
            .map((repo) => {
                return {
                    ...repo
                }
            })
        setResults(filteredResults)
    }

    return (
        <div className="flex gap-x-3 w-full">

            {/* search bar for filtering repos by name */}
            <div className="flex justify-between gap-x-4 w-full border border-gray-300 rounded-md p-2">
                <input
                    id="search-repo"
                    type="text"
                    placeholder="Search for a repository"
                    className="w-full px-2  focus:outline-none text-base"
                    onChange={handleChange}
                    />
            </div>

            {/* shadcn dropdown menu for language filter */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className="flex items-center gap-x-1 py-2 px-3 bg-gray-100/80 border border-gray-300 rounded-md">
                        <p className="text-sm font-semibold">Language</p>
                        <ChevronDown className="size-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    {/* Reset the results to the original repos */}
                    <DropdownMenuItem onClick={() => setResults(repos)}>Reset</DropdownMenuItem>

                    {/* map all the languages to the dropdown menu */}
                    {languages.map((language) => (
                        <DropdownMenuItem key={language} onClick={() => handleLanguageChange(language)}>{language}</DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
