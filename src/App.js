import React, { useEffect, useRef, useState } from "react";
import Post from "./components/Post";
import { getPosts } from "./util/api";

import "./components/styles/App.css";

function App() {
	const [posts, setPosts] = useState([]);
	const [sort, setSort] = useState(false);
	const [subreddit, setSubreddit] = useState(null);
	const [loading, setLoading] = useState(false);
	const inputRef = useRef();

	useEffect(() => {
		if (!subreddit) return;

		setLoading(true);
		getPosts(subreddit)
			.then((data) => setPosts(data))
			.finally(() => setLoading(false));
	}, [subreddit]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubreddit(inputRef.current.value);
		console.log("XD");
	};

	const toShow = sort ? posts.slice().sort((a, b) => b.score - a.score) : posts;
	return (
		<>
			<form onSubmit={handleSubmit}>
				<button type="button" onClick={() => setSort(!sort)}>
					Sort
				</button>
				<input type="text" ref={inputRef} />
			</form>

			{loading ? (
				<h2>Loading...</h2>
			) : (
				<div>
					{toShow.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</div>
			)}
		</>
	);
}

export default App;
