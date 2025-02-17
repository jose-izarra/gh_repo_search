

import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/lib/types';



export async function GET(
    request: Request,
    { params }: { params: Promise<{ username: string }> }
  ) {

    const username = (await params).username // 'a', 'b', or 'c'

    try {

        const url = `https://api.github.com/users/${username}`

        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
                "Accept": "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28"
            }
        })

        // If the user is not found, return a 404 error
        if (response.status === 404) return NextResponse.json({ error: "User not found" }, { status: 404 });

        const data = await response.json()


        const user = {
            login: data.login,
            id: data.id,
            avatar_url: data.avatar_url,
            type: data.type,
            user_view_type: data.user_view_type,
            site_admin: data.site_admin,
            name: data.name,
            company: data.company,
            blog: data.blog,
            location: data.location,
            email: data.email,
            hireable: data.hireable,
            bio: data.bio,
            twitter_username: data.twitter_username,
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            created_at: data.created_at
        } as User;
        return NextResponse.json(user, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
