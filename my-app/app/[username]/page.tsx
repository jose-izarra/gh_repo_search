

import SearchRepo from "@/components/search/SearchRepo"


export default async function Page({
    params
}: {
    params: { username: string }
}) {
    const { username } = await params as { username: string }

    return (
        <main className="min-h-screen flex flex-col gap-8 items-center sm:items-start justify-center standardPx">
            <h1 className="text-4xl font-bold">
                {username}
            </h1>

            <SearchRepo
                username={username}
                />
        </main>
    )
}
