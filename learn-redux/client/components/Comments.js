import React from 'react';

class Comments extends React.Component {
  renderComment(comment, index) {
    return (
      <div key={index} className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="authorRef" placeholder="Your name" />
          <input type="text" ref="newCommentRef" placeholder="Comment..." />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
