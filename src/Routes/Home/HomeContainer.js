import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../Actions/galleryAction";
import counterSlice from "../../Slices/counterSlice";
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.loadPhotos(`hello from HomeContainer`);
  }

  render() {
    const { photos, count, addCount, minusCount } = this.props;
    return (
      <HomePresenter
        photos={photos}
        count={count}
        addCount={addCount}
        minusCount={minusCount}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { photos: state.gallery.photos, count: state.counter.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPhotos: (data) => dispatch(getPhotos(data)),
    addCount: () => dispatch(counterSlice.actions.add()),
    minusCount: () => dispatch(counterSlice.actions.minus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
