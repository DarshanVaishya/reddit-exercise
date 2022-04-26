import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import { getPosts } from "./util/api";

function App() {
	const [posts, setPosts] = useState([]);
	const [sort, setSort] = useState(false);

	useEffect(() => {
		const subreddit = prompt("Enter a subreddit name", "");
		getPosts(subreddit || "reactjs").then((data) => setPosts(data));
	}, []);

	if (posts.length === 0) return <h3>Loading...</h3>;

	const toShow = sort ? posts.slice().sort((a, b) => b.score - a.score) : posts;
	console.log(posts);
	return (
		<>
			<button
				style={{
					padding: "5px",
					margin: "5px",
					background: "none",
					border: "2px solid black",
				}}
				onClick={() => setSort(!sort)}
			>
				Sort
			</button>
			{toShow.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</>
	);
}

export default App;
