import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComments } from '../../actions/commentsAction'


class CommentsList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {

    const associatedComments = this.props.commentData.filter(comment => comment.corgi_id === this.props.corgiId)
    const comments = associatedComments.map((comment, index) => {
      return <Comment comment={comment}/>
    })

    if (comments) {
      return(
        <ul>
          {comments}
        </ul>
      )
    }
  }

}

function mapStateToProps(state) {
  return {
    commentData: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComments }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
