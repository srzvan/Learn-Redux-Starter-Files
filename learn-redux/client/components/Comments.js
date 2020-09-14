import React from 'react';

const Comments = React.createClass({
  renderComment(comment, index) {
    return (
      <div key={index} className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.params.postId,
              index
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  },

  handleSubmit(event) {
    event.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.authorRef.value;
    const comment = this.refs.newCommentRef.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentFormRef.reset();
  },

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref="commentFormRef"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="authorRef" placeholder="Your name" />
          <input type="text" ref="newCommentRef" placeholder="Comment..." />
          <input type="submit" hidden />
        </form>
      </div>
    );
  },
});

export default Comments;
