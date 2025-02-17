"use client"
import { useState, useEffect } from "react"
import SearchResults from "./SearchResults"
import { RepoResult, Repo } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"
import { ChevronDown } from "lucide-react"
interface Props {
    username: string
}




export default function SearchRepo({
    username,
}: Props) {


    const [repos, setRepos] = useState<Repo[]>([])
    const [results, setResults] = useState<RepoResult[]>([])

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

    const handleSearch = (query: string) => {
        console.log(query)

    }

    useEffect(() => {
        // on mount, fetch the user's repos, this is to avoid making repetitive api calls on query change
        const fetchUserRepos = async () => {
            const response = await fetch(`/api/github?username=${username}`, {
                method: "GET",
            })
            const json = await response.json()
            const data = json.map((repo: Repo) => {
                return {
                    id: repo.id,
                    name: repo.name,
                    full_name: repo.full_name,
                    owner: {
                        login: repo.owner.login,
                        id: repo.owner.id,
                        avatar_url: repo.owner.avatar_url
                    },
                    html_url: repo.html_url,
                    description: repo.description,
                    fork: repo.fork,
                    url: repo.url,
                    forks_url: repo.forks_url,
                    statuses_url: repo.statuses_url,
                    languages_url: repo.languages_url,
                    commits_url: repo.commits_url,
                    git_commits_url: repo.git_commits_url,
                    created_at: repo.created_at,
                    updated_at: formatDistanceToNow(new Date(repo.updated_at), { addSuffix: true }),
                    pushed_at: formatDistanceToNow(new Date(repo.pushed_at), { addSuffix: true }),
                    git_url: repo.git_url,
                    clone_url: repo.clone_url,
                    homepage: repo.homepage,
                    size: repo.size,
                    stargazers_count: repo.stargazers_count,
                    watchers_count: repo.watchers_count,
                    language: repo.language,
                    forks_count: repo.forks_count,
                    mirror_url: repo.mirror_url,
                    archived: repo.archived,
                    disabled: repo.disabled,
                    open_issues_count: repo.open_issues_count,
                    topics: repo.topics,
                    visibility: repo.visibility,
                    forks: repo.forks,
                    open_issues: repo.open_issues,
                    watchers: repo.watchers,
                    default_branch: repo.default_branch
                }
            })

            setRepos(data as Repo[])
        }
        fetchUserRepos()
    }, [])


    const handleFocus = () => {
        const initialResults = repos
            .slice(0, 6)
            .map((repo: Repo) => {
                return {
                    id: repo.id,
                    name: repo.name,
                    full_name: repo.full_name,
                    description: repo.description,
                    language: repo.language,
                    updated_at: repo.updated_at
                }
            })
        setResults(initialResults as RepoResult[])
    }

    const handleBlur = () => {
        const searchInput = document.getElementById("search-repo") as HTMLInputElement
        if (searchInput.value === "") {
            setResults([])
        }
    }

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
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                {results.length > 0 && (
                    <SearchResults
                        results={results}
                        type="repo"
                    />
                )}
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
