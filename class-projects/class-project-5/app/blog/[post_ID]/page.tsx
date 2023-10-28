import Navigation_Bar from "@/app/components/navigation_bar";
import { Post } from "../page";

interface Params
{
    post_ID : string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPost = async (id : string) : Promise<Post> => 
{
    const data = await fetch(`${BASE_API_URL}/posts/${id}`);
    return data.json();
};

async function Blog_Post({ params } : { params : Params })
{
    const post = await getPost(params.post_ID);
    return(
        <main>
            <Navigation_Bar></Navigation_Bar>
            <div className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
                <h1 className="text-3xl font-bold p-10 capitalize">
                    <span className="text-neutral-400">Post {post.id}: </span>{post.title}
                </h1>
                <p className="text-xl pl-10 pr-10 pb-10">{post.body}</p>
            </div> 
        </main>
    );
}

export default Blog_Post;