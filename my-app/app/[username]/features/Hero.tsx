"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { User } from "@/lib/types"
import { MapPin, Link as LinkIcon, Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"


interface Props {
    username: string
}

export default function Hero({
    username
}: Props) {

    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Make a request to the GitHub API to get the user's data
                const response = await fetch(`/api/github/users/${username}`)
                console.log(response.status)

                // If the user is not found, redirect to the not found page
                if (response.status == 404) {
                    console.log("User not found")
                    notFound()
                }

                const data = await response.json()

                setUser(data)
            } catch (error) {
                console.error(error)
            } finally {
                // Once the data is fetched, set the loading state to false
                setIsLoading(false)
            }
        }
        fetchUser()
    }, [])


    // If data is still being fetched, show a loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen w-full">
                <Loader2 className="size-10 animate-spin text-blue-500" />
            </div>
        )
    }
    return (
        <>
            {/* Back button */}
            <div className="flex justify-start w-full">
                <Link href="/" className="flex items-center gap-x-2">
                    <ArrowLeft className="size-4 text-gray-500" />
                    <p className="text-gray-500 text-sm font-medium hover:underline ">
                    Back
                    </p>
                </Link>
            </div>

            {/* User info section */}
            <section
                className="flex flex-col sm:flex-row gap-y-4 gap-x-8 w-full bg-gray-100 border border-gray-200 rounded-md p-4 items-center">
                    <div className="flex gap-x-2 shrink-0">
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
                        <div className="flex flex-col lg:flex-row gap-x-6">
                            <div className="flex flex-col gap-y-2">
                                <h1 className="text-2xl font-bold text-center sm:text-left">
                                    {user?.name}
                                </h1>
                                <h2 className="text-gray-500 text-base leading-8 font-medium tracking-wider text-center sm:text-left">
                                    {user?.login}
                                </h2>
                                {user?.blog && (
                                    <span className="flex items-center gap-x-2 mt-2 justify-center sm:justify-start">
                                        <LinkIcon className="size-4"/>
                                        <a href={user.blog} className="text-blue-500 text-sm hover:underline">
                                            {user.blog}
                                        </a>
                                    </span>
                                )}
                                {user?.location && (
                                    <span className="flex items-center gap-x-2 mt-2 justify-center sm:justify-start">
                                        <MapPin className="size-4" />
                                        <p className="text-gray-500 text-sm ">
                                        {user?.location}
                                        </p>
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-500 text-base lg:text-lg leading-8 max-w-xl text-center sm:text-left mt-4 lg:mt-0">
                                {user?.bio}
                            </p>

                        </div>
                        <div className="flex gap-x-4 justify-center sm:justify-start">
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
        </>
    )
}
