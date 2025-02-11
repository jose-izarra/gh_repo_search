"use client";
import { Result } from "@/lib/types"
import Image from "next/image"
import { Star } from "lucide-react"

interface Props {
    result: Result
}



export default function SearchItem({
    result
}: Props) {

    return (
        <li className="px-2">
            <a href={`/${result.login}`} className="flex items-center justify-between gap-x-2 hover:bg-gray-100 p-2 rounded-md">
                <div className="flex items-center gap-x-2">
                    <Image
                        src={result.avatar_url}
                        alt={result.login}
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <h3 className="text-sm font-medium">{result.login}</h3>
                </div>
                <div className="flex items-center gap-x-2">
                    <Star className="w-4 h-4" />
                    <p className="text-sm font-medium">{result.score}</p>
                </div>
            </a>
        </li>
    )
}
