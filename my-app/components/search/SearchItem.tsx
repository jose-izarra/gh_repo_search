"use client";
import { Result } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"



/*
    This is the component for displaying a single search result.
    It is used in the SearchProfile component.
*/

interface Props {
    result: Result
}

export default function SearchItem({
    result,
}: Props) {

    return (
        <li className="px-2">
            <Link href={`/${result.login}`} className="flex items-center justify-between gap-x-2 hover:bg-gray-100 p-2 rounded-md">
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
            </Link>
        </li>
    )
}
