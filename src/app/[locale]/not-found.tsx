import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-9xl font-bold text-center text-neutral-900">404</h1>
            <h1 className="text-center">Page not found</h1>
            <Link href={"/"}>Go to main page</Link>
        </div>
    )
}