import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from 'react-redux';
import {addFeature, removeFeature, updateTotal} from './actions/actions';

const App = props => {

  const removeFeature = item => {
    props.removeFeature(item);
    props.updateTotal(-item.price)
  };

  const addItem = item => {
    props.addFeature(item);
    props.updateTotal(item.price);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addItem={addItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.carReducer.car,
    additionalFeatures: state.featuresReducer.additionalFeatures,
    additionalPrice: state.priceReducer.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  {addFeature, removeFeature, updateTotal}
)(App);