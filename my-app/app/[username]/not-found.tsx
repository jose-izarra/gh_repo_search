import Link from "next/link";






export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-y-4">
            <h1 className="text-2xl font-bold">Not Found</h1>
            <p className="text-gray-500">The user you are looking for does not exist</p>
            <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
        </div>
    )
}
