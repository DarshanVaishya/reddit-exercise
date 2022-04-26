import moment from "moment";
import React, { useState } from "react";
import "./styles/Post.css";

function Post({ post }) {
	const [score, setScore] = useState(post.score);

	return (
		<div className="post">
			<div className="post-score">
				<button onClick={() => setScore(score + 1)}>⬆️</button>
				<span>{score}</span>
				<button onClick={() => setScore(score - 1)}>⬇️</button>
			</div>

			<div className="post-image">
				{post.thumbnail !== "self" && <img src={post.thumbnail} />}
			</div>

			<div className="post-details">
				<div className="wrapper">
					<a href={post.url} className="post-link">
						<span className="post-title">{post.title}</span>
					</a>
					<a className="post-link-grey" href={post.domain}>
						{post.domain}
					</a>
				</div>

				<div className="wrapper">
					Submitted {moment.unix(post.created_utc).fromNow()} by {post.author}
				</div>

				<div className="post-links-wrapper">
					<a className="post-link" href="#">
						{post.num_comments ? `${post.num_comments} comments` : "comment"}
					</a>
					<a className="post-link-grey" href="#">
						share
					</a>
					<a className="post-link-grey" href="#">
						save
					</a>
					<a className="post-link-grey" href="#">
						hide
					</a>
					<a className="post-link-grey" href="#">
						report
					</a>
				</div>
			</div>
		</div>
	);
}

export default Post;
