import { Repo } from "@/lib/types";
import { Star, Eye, CodeXml } from "lucide-react";


interface Props {
    repo: Repo
}


/*
    This is the component for displaying a repository's information.
    It is used in the DisplayRepositories component.
*/


const ForkIcon = ({ className }: { className: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            id="git-fork">
            <rect width="256" height="256" fill="none"></rect>
            <circle cx="128" cy="188" r="28" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
            <circle cx="188" cy="67.998" r="28" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
            <circle cx="68" cy="67.998" r="28" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M68,95.99756v8.002a24,24,0,0,0,24.00049,24l72-.00146a24,24,0,0,0,23.99951-24V95.99756"></path>
            <line x1="128.002" x2="128" y1="128" y2="160" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
        </svg>
    )
}

export default function Repository({
    repo
}: Props) {
    return (
        <div className="px-4 py-4 border border-gray-300 rounded-md flex flex-col md:flex-row justify-between gap-x-4 gap-y-3">
            <div className="flex flex-col items-start gap-x-2 gap-y-3">
                <span className="flex items-center gap-x-2">
                    <h3
                        className="text-lg  font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-300 cursor-default"
                        >{repo.name}</h3>
                    <span className="text-xs font-medium text-gray-500 border border-gray-300 rounded-full px-2 py-1">{(repo as Repo).visibility}</span>
                </span>
                <p className="text-base font-medium text-gray-600">{repo.description}</p>
                <div className="flex items-center gap-x-4 mt-2">
                    <span className="flex items-center gap-x-1">
                        <Star className="size-4 text-yellow-500" />
                        <p className="text-sm font-medium text-gray-500">{repo.stargazers_count}</p>
                    </span>
                    <span className="flex items-center gap-x-1">
                        <ForkIcon className="size-4 text-gray-500" />
                        <p className="text-sm font-medium text-gray-500">{repo.forks_count}</p>
                    </span>
                    <span className="flex items-center gap-x-1">
                        <Eye className="size-4 text-gray-500" />
                        <p className="text-sm font-medium text-gray-500">{repo.watchers_count}</p>
                    </span>
                </div>
            </div>
            <div className="flex  flex-row md:flex-col md:justify-center  gap-x-3 py-1 ">
                <span className="flex gap-x-1 items-center">
                    <CodeXml className="size-4 text-gray-500" />
                    <p className="text-sm font-medium text-gray-600 ">{repo.language}</p>
                </span>
                <p className="text-sm font-medium text-gray-400 ">Last updated: {repo.updated_at}</p>
            </div>
        </div>
    )
}
