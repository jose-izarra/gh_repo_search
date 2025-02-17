

import Hero from "./features/Hero"
import DisplayRepositories from "./features/DisplayRepositories"
export default async function Page({
    params
}: {
    params: Promise<{ username: string }>
}) {
    const { username } = await params as { username: string }

    return (
        <main className="min-h-screen flex flex-col gap-4 items-center sm:items-start standardPx  my-16">
            <Hero username={username} />
            <DisplayRepositories username={username} />
        </main>
    )
}
