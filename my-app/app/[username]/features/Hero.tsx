"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { User } from "@/lib/types"
import { MapPin, Link } from "lucide-react"

interface Props {
    username: string
}




export default function Hero({
    username
}: Props) {

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/github/users/${username}`)
                const data = await response.json()
                console.log(data)
                setUser(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchUser()
    }, [])

    return (
        <section
            className="flex gap-y-4 gap-x-8 mt-16 w-full bg-gray-100 border border-gray-200 rounded-md p-4 items-center">
                <div className="flex gap-x-2">
                    {user?.avatar_url && (
                        <Image
                            src={user?.avatar_url}
                            alt={username}
                            width={80}
                            height={80}
                            className="rounded-full w-full h-fit"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-y-3">
                    <div className="flex gap-x-6">
                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-2xl font-bold  ">
                                {user?.name}
                            </h1>
                            <h2 className="text-gray-500 text-base leading-8 font-medium tracking-wider">
                                {user?.login}
                            </h2>
                            {user?.blog && (
                                <span className="flex items-center gap-x-2 mt-2">
                                    <Link className="size-4"/>
                                    <a href={user.blog} className="text-blue-500 text-sm hover:underline">
                                        {user.blog}
                                    </a>
                                </span>
                            )}
                            <span className="flex items-center gap-x-2 mt-2">
                                <MapPin className="size-4" />
                                <p className="text-gray-500 text-sm ">
                                    {user?.location}
                                </p>
                            </span>
                        </div>
                        <p className="text-gray-500 text-lg leading-8">
                            {user?.bio}
                        </p>

                    </div>
                    <div className="flex gap-x-4">
                        <p className="text-gray-500 text-sm leading-8">
                            <span className="font-semibold">{user?.followers}</span> followers
                        </p>
                        <p className="text-gray-500 text-sm leading-8">
                            <span className="font-semibold">{user?.following}</span> following
                        </p>
                        <p className="text-gray-500 text-sm leading-8">
                            <span className="font-semibold">{user?.public_repos}</span> repositories
                        </p>


                    </div>
                </div>
        </section>
    )
}



/*
<div className="flex gap-y-2">
                    <div className="flex flex-col gap-y-1">
                        <h1 className="text-2xl font-bold  ">
                            {user?.name}
                        </h1>
                        <h2 className="text-gray-500 text-base">
                            {user?.login}
                        </h2>
                        {user?.blog && (
                            <div className="flex gap-x-2">
                                <p className="text-gray-500 text-sm leading-8">
                                    Website:
                                </p>
                                <a href={user.blog} className="text-blue-500 text-sm leading-8">
                                    {user.blog}
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-x-2 ">
                        <p className="text-gray-500 text-lg leading-8">
                            {user?.bio}
                        </p>
                    </div>

                </div>


*/
