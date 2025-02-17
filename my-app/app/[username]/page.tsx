

import SearchRepo from "@/components/search/SearchRepo"
import Hero from "./features/Hero"

export default async function Page({
    params
}: {
    params: { username: string }
}) {
    const { username } = await params as { username: string }

    return (
        <main className="min-h-screen flex flex-col gap-4 items-center sm:items-start standardPx">
            <Hero username={username} />
            <SearchRepo
                username={username}
                />
        </main>
    )
}
