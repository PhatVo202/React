import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteVocabularyAction } from "../../store/actions/vocabularyAction";

class VocabularyItem extends Component {
  updateFavourite = () => {
    this.props.dispatch({
      type: "UPDATE_FAVOURITE",
      payload: this.props.item,
    });
  };
  deleteVocabulary = () => {
    this.props.dispatch(deleteVocabularyAction(this.props.item));
  };
  render() {
    const { en, vi, isFavourited } = this.props.item;
    return (
      <div className="border p-3 mb-2" onDoubleClick={this.deleteVocabulary}>
        <div className="content">
          <div className="d-flex justify-content-between">
            <h5 className="font-weight-bold">{en}</h5>
            {isFavourited ? (
              <i
                onClick={this.updateFavourite}
                className="fa-solid fa-heart text-danger"
              />
            ) : (
              <i
                onClick={this.updateFavourite}
                className="fa-regular fa-heart"
              ></i>
            )}
          </div>
          <p className="mb-0">{vi}</p>
        </div>
      </div>
    );
  }
}

export default connect()(VocabularyItem);
