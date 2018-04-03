import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) => 
	<li>
		{text} <span>votes: {votes}</span>
		<button onClick={() => thumbUpComment(id)}>Like!</button>
		<button onClick={() => thumbDownComment(id)}>Dislike!</button>
	</li>;

export default Comment;