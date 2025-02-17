

export interface ProfileResult {
    id: number;
    login: string;
    avatar_url: string;
    // events_url: string;
    followers_url: string;
    following_url: string;
    html_url: string;
    repos_url: string;
    score: number;
    type: string;
    url: string;
    user_view_type: string;
}

export interface RepoResult {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    forks: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    updated_at: string;
    visibility: string;
    forks_count: number;
}


export interface Repo {
    id: number;
    name: string;
    full_name: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
    };
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    forks_url: string;
    statuses_url: string;
    languages_url: string;
    commits_url: string;
    git_commits_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    clone_url: string;
    homepage: string | null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    forks_count: number;
    mirror_url: string | null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    topics: string[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}



export interface User {
    login: string;
    id: number;
    avatar_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string;
    location: string | null;
    email: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
}


export interface Filter {
    type: string | null;
    language: string | null;
    sort: string | null;
}
