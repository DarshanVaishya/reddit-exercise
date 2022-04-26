export async function getPosts(subreddit) {
	const URL = `http://www.reddit.com/r/${subreddit}.json`;
	const response = await fetch(URL);

	if (!response.ok) throw new Error("Error happened while fetching");

	const result = await response.json();
	const data = await result.data.children.map((post) => post.data);

	return data;
}
