import SearchProfile from "./search/SearchProfile";



/*
    This is the hero section of the app. It is the first thing the user sees when they land on the page.
    It contains a search bar to search for a profile and a button to search for repositories.
*/

export default function Hero() {

    return (
        <section className="min-h-screen flex flex-col md:flex-row gap-x-6 gap-y-8 justify-center md:items-center standardPx">
            <h1 className="text-4xl font-bold">Search for any profile on <span className="text-blue-500">Github</span></h1>
            <SearchProfile />
        </section>
    )
}
