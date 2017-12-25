import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentForm from '../comments/CommentForm'
import CommentsList from '../comments/CommentsList'

class CorgisShow extends Component {

  render() {
    return (
      <div className="corgis-show">
        <h3>breadloaf</h3>
        <div className="corgi-gif">
          <img src={this.props.corgi.images.fixed_height.url} />
        </div>
        <div className="comments">
          <CommentForm corgiId={this.props.corgi.id}/>
          <CommentsList corgiId={this.props.corgi.id}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const corgi = state.corgis.find(corgi => corgi.id === ownProps.match.params.corgiId)

  if (corgi) {
    return { corgi }
  } else {
    return { corgi: {} }
  }
}

export default connect(mapStateToProps)(CorgisShow)
