import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteCorgis extends Component {
  render() {
    const favoriteCorgis = this.props.corgis.filter(corgi => corgi.favorite === true)
    const favoriteCorgi = favoriteCorgis.map(corgi => <img src={corgi.images.fixed_height.url} />)

    return (
      <div className="favorite-corgis">
        <h2>Favorite Corgis Below:</h2>
        {favoriteCorgi}
      </div>
    )
  }
}

export default connect(state=> {
  return {
    corgis: state.corgis
  }
})(FavoriteCorgis)
