import BlogPostListItem from "@/app/_components/BlogPostListItem"
import {BlogPost} from "@/app/api/blog-posts/route"

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch("http://localhost:3000/api/blog-posts", {
      method: "GET",
    });

    const blogPosts: BlogPost[] = await response.json();

    return blogPosts;
  }
  catch (error) {
    console.error("Error", error);

    return [];
  }
}

export default async function BlogPostList() {
  const blogPosts: BlogPost[] = await getBlogPosts();

  return (
    <ul>
      {blogPosts.map(blogPost => (
        <BlogPostListItem blogPost={blogPost} key={blogPost.slug} />
      ))}
    </ul>
  );
}