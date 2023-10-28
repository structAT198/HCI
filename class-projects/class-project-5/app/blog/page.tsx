import Link from "next/link";
import clsx from "clsx";
import Navigation_Bar from "../components/navigation_bar";

export interface Post
{
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Pagination
{
    limit: number;
    page: number;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async (pagination: Pagination = { limit: 9999, page: 1 }) : Promise<Post[]> =>
{
    const data = await fetch(`${BASE_API_URL}/posts?_limit=${pagination.limit}&_page=${pagination.page}`);
    return data.json();
};

const getTotalPosts = async (): Promise<number> =>
{
    const response = await fetch(`${BASE_API_URL}/posts?_limit=1`, { method: "HEAD" });
    return parseInt(response.headers.get("x-total-count") || "1", 10);
};

export default async function Blog_Page({ searchParams } : { searchParams: Record<string, string | string[] | undefined>; })
{
    const { _limit, _page } = searchParams;
    const [pageSize, page] = [_limit, _page].map(Number);
    const totalPosts = await getTotalPosts();
    const totalPages = Math.ceil(totalPosts / pageSize);
    const posts = await getPosts({limit: pageSize, page: page});
    return(
        <main>
            <Navigation_Bar></Navigation_Bar>
            <h1 className="main_title">Blog Page</h1>
            <div className="blog_articles m-auto p-10 min-h-screen max-w-5xl">
            <ul className="flex flex-col gap-4">
            {posts.map((post) => 
            (<li key={post.id}>
                <Link href={`blog/${post.id}`}>
                    <span className="text-xl text-gray-500">
                        Post {post.title}
                    </span>
                </Link>
            </li>)
            )}
            </ul>
            {_limit && _page && (
            <div className="flex items-baseline gap-8 pt-10 pb-10">
                <div>
                    Page {page} of {totalPages}
                </div>
                    <div className="flex gap-4">
                        <Link href={{pathname: "/blog", query: { _page: 1, _limit: pageSize }}} className="rounded border bg-gray-100 px-3 py-1 text-gray-800">
                            First
                        </Link>
                        <Link href={{pathname: "/blog", query: { _page: page > 1 ? page - 1 : 1, _limit: pageSize }}} className={clsx("rounded border bg-gray-100 px-3 py-1 text-gray-800", page === 1 && "pointer-events-none opacity-50")}>
                            Previous
                        </Link>
                        <Link href={{pathname: "/blog", query: { _page: page + 1, _limit: pageSize }}} className={clsx("rounded border bg-gray-100 px-3 py-1 text-gray-800", page === totalPages && "pointer-events-none opacity-50")}>
                            Next
                        </Link>
                        <Link href={{pathname: "/blog", query: { _page: totalPages, _limit: pageSize }}} className="rounded border bg-gray-100 px-3 py-1 text-gray-800">
                            Last
                        </Link>
                    </div>
                </div>
                )}
            </div>
        </main>
    );
}