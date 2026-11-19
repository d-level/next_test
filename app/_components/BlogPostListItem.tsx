import {BlogPost} from "@/app/api/blog-posts/route"

export default function BlogPostListItem({blogPost}: {blogPost: BlogPost}) {
	return (
    <li className="border-1 border-solid">
      <h3>
        {blogPost.name}
      </h3>

      <small>
        {blogPost.slug}
      </small>

      <p>
        {blogPost.description}
      </p>
    </li>
  );
}