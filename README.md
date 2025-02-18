# Github Search

A NextJS app to search through repositories of a any GitHub user.

Link: [Github Search](https://github-search-seven-alpha.vercel.app/)

## Stack

- **Frontend**: NextJS 15, TailwindCSS, and Shadcn
- **Testing**: Jest + React Testing Library
- **CI/CD**: Github Actions
- **Deployment**: Vercel

## Prerequisites

- Node ^20
- npm ^10
- GitHub Personal Access Token (PAT)

## Steps to Run

1. Clone the repository:

```bash
git clone https://github.com/jose-izarra/github-search
```

2. Install dependencies:

```bash
cd github-search/my-app
npm install
```

3. Rename the `.env.example` file in my-app to `.env.local` and add your GitHub token

```bash
GITHUB_TOKEN=<your_token>
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` by default.

## Future Improvements

1. **Add animations**
    - A good animation can go a long way in improving the overall feel of the app, adding a few subtle animations on load and hover would greatly improve the user experience.
    - The website can feel a bit static at the current state, adding a few animations would help the website feel more alive.

2. **Add a navbar and a footer**
    - Although there is are only two pages, adding a navbar with a logo and some text would give more natural padding to the website and fill up the empty space.
    - Adding a footer with some links and some text would give the website a more professional feel and give the user more information about the website.

3. **Visualizations**
    - Add a visualization for the repositories, such as a bar chart or a pie chart.
    - A commit graph would be a nice addition to display more info about the user.

4. **Possible features**
    - Add a filter tags or filters to the landing page search bar to look for popular repos, organizations, issues, etc.
