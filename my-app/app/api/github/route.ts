import { NextRequest, NextResponse } from 'next/server';



/*
    This is the route for the github api.
    It is used to fetch the users and repositories for the app.
    It uses the github token to authenticate the request to the github api.
    It has two main functionalities:
    - Fetch the users for a given search query
    - Fetch the repositories for a given username
*/

export async function GET(req: NextRequest) {


    try {
        // if the username is provided, we need to fetch the repositories for the user

        const username = req.nextUrl.searchParams.get("username") ?? undefined
        const search = req.nextUrl.searchParams.get("search")

        let url = username ? `https://api.github.com/users/${username}/repos` : `https://api.github.com/search/users?q=${search}`
        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
                "Accept": "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28"
            }
        })
        const data = await response.json()

        return NextResponse.json(data, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
