import {NextApiRequest, NextApiResponse} from "next";

class BlogPost {
	slug!: string;
	name!: string;
	description!: string;
	createdAt!: Date;
	updatedAt?: Date;
}

const blogPosts: BlogPost[] = [
	{
		slug: "how-to-eat-carrots",
		name: "How to eat carrots",
		description: "This is a description on how to eat carrots.",
		createdAt: new Date("22/08/2026"),
	},
	{
		slug: "repairing-upright-pianos",
		name: "Repairing upright pianos",
		description: "This is a description on how to repair upright pianos.",
		createdAt: new Date("23/08/2026"),
	},
];

export default function handler(request: NextApiRequest, response: NextApiResponse) {
	const slug = request.query.slug;
	const blogPost = blogPosts.find(blogPost => blogPost.slug === slug);

	if (blogPost === undefined) {
		response.status(404);

		return;
	}

	response.status(200).json(blogPost);
}