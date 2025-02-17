"use client";
import { ProfileResult, RepoResult } from "@/lib/types"
import Image from "next/image"
import { Star } from "lucide-react"

interface Props {
    result: ProfileResult | RepoResult
    type: "profile" | "repo"
}



export default function SearchItem({
    result,
    type
}: Props) {



    return type === "profile" ? (
        <li className="px-2">
            <a href={`/${(result as ProfileResult).login}`} className="flex items-center justify-between gap-x-2 hover:bg-gray-100 p-2 rounded-md">
                <div className="flex items-center gap-x-2">
                    <Image
                        src={(result as ProfileResult).avatar_url}
                        alt={(result as ProfileResult).login}
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <h3 className="text-sm font-medium">{(result as ProfileResult).login}</h3>
                </div>
                <div className="flex items-center gap-x-2">
                    <Star className="w-4 h-4" />
                    <p className="text-sm font-medium">{(result as ProfileResult).score}</p>
                </div>
            </a>
        </li>
    ) : (
        <li className="px-2">
            <a href={`/${(result as RepoResult).full_name}`} className="flex items-center justify-between gap-x-2 hover:bg-gray-100 p-2 rounded-md">
                <div className="flex items-center gap-x-2">
                    <h3 className="text-sm font-medium">{(result as RepoResult).name}</h3>
                    <p className="text-sm font-medium text-gray-500">{(result as RepoResult).description}</p>
                </div>
                <div className="flex  flex-col gap-x-2 min-w-52">
                    <p className="text-sm font-medium text-gray-400 text-center">{(result as RepoResult).language || "Unknown"}</p>
                    <p className="text-sm font-medium text-gray-500 ">Last updated: {(result as RepoResult).updated_at}</p>
                </div>

            </a>
        </li>
    )
}
