import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

export default function Posts() {
    // dont need to await as its already here
    const posts = getSortedPostsData()
  return (
    <section className="mt-6 mx-auto m-w-2xl">
        <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
        <ul className="w-full">
            {posts.map(post => (
                <ListItem key={post.id} post={post} />
            ))}
        </ul>
    </section>
  )
}
