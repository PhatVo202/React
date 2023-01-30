import React, { Component } from "react";
import { connect } from "react-redux";
import VocabularyItem from "./VocabularyItem";
class VocabularyTab extends Component {
  renderList = () => {
    const filterData = this.props.vocabularyList.filter((item) => {
      if (this.props.isOnlyFavourite) {
        return item.isFavourited === true;
      }
      return true;
    });

    return filterData.map((item) => {
      return <VocabularyItem key={item.id} item={item} />;
    });
  };
  render() {
    return (
      <div
        className="tab-pane fade show active"
        id="pills-vocabulary"
        role="tabpanel"
        aria-labelledby="pills-vocabulary-tab"
      >
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vocabularyList: state.vocabularyReducer.vocabularyList,
    isOnlyFavourite: state.vocabularyReducer.isOnlyFavourite,
  };
};

export default connect(mapStateToProps, null)(VocabularyTab);
