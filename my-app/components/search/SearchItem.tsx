"use client";
import { ProfileResult, RepoResult } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

interface Props {
    result: ProfileResult | RepoResult
}



export default function SearchItem({
    result,
}: Props) {

    return (
        <li className="px-2">
            <Link href={`/${(result as ProfileResult).login}`} className="flex items-center justify-between gap-x-2 hover:bg-gray-100 p-2 rounded-md">
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
            </Link>
        </li>
    )
}
