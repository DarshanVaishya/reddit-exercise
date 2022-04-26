import React, { useEffect, useRef, useState } from "react";
import Post from "./components/Post";
import { getPosts } from "./util/api";

function App() {
	const [posts, setPosts] = useState([]);
	const [sort, setSort] = useState(false);
	const [subreddit, setSubreddit] = useState(null);
	const inputRef = useRef();

	useEffect(() => {
		if (subreddit) getPosts(subreddit).then((data) => setPosts(data));
	}, [subreddit]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("XD");
		setSubreddit(inputRef.current.value);
	};

	const toShow = sort ? posts.slice().sort((a, b) => b.score - a.score) : posts;
	return (
		<>
			<form onSubmit={handleSubmit}>
				<button
					style={{
						padding: "5px",
						margin: "5px",
						background: "none",
						border: "2px solid black",
					}}
					type="button"
					onClick={() => setSort(!sort)}
				>
					Sort
				</button>
				<input type="text" ref={inputRef} />
			</form>

			{toShow.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</>
	);
}

export default App;
