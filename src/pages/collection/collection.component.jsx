import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectColletion } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h2>CATEGORY_PAGE</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectColletion(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
