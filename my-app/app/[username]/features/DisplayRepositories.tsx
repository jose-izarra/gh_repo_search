"use client"
import SearchRepo from "@/app/[username]/features/SearchRepo"
import { useState, useEffect } from "react"
import { Repo } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"
import Repository from "./Repository"

interface Props {
    username: string
}


/*
    This is a parent component to SearchRepo that fetches all the repositories for a user,
    passes them down to Searchrepo and displays them in the same component.
    This is to avoid making repetitive api calls on query change.
    This component renders the repositories ui and the search bar.
*/

export default function DisplayRepositories({
    username
}: Props) {
    const [repos, setRepos] = useState<Repo[]>([]) // all repos
    const [results, setResults] = useState<Repo[]>([]) // filtered repos after query and filter update

    useEffect(() => {
        // fetch the user's repos, this is to avoid making repetitive api calls on query change
        const fetchUserRepos = async () => {
            const response = await fetch(`/api/github?username=${username}`)

            const json = await response.json()

            // map the repos to the fit Repo type
            const data = await Promise.all(json.map(async (repo: Repo) => {
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
                    language: repo.language ?? "Unknown",
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
                } as Repo
            })) satisfies Repo[]

            setRepos(data)
            setResults(data)
        }
        fetchUserRepos()
    }, []) // empty array to run only on mount


    return (
        <div className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-bold">Repositories</h1>
            <SearchRepo
                username={username}
                repos={repos}
                setResults={setResults}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                {results.map((repo) => (
                    <Repository key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    )
}
