

import Hero from "./features/Hero"
import DisplayRepositories from "./features/DisplayRepositories"



/*
    This is the page for the user's profile.
    This is a dynamic page that fetches the user's information according to the username in the url.
    It works just like githubs website, where you can find a user's profile and repositories
    by typing the username in the url.
*/

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
