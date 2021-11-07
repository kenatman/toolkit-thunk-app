import React, { Component } from "react";
import { connect } from "react-redux";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends Component {
  componentDidMount() {}
  render() {
    const { photo } = this.props;
    return <DetailPresenter photo={photo} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.gallery.galleryphotos);
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { photo: state.gallery.photos.find((item) => item.id === id) };
};

export default connect(mapStateToProps)(DetailContainer);
