import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from 'react-redux';
import {addFeature} from './actions/carActions';

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const addItem = item => {
    // dipsatch an action here to add an item
    return props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addItem={addItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    car: state.carReducer.car,
    additionalFeatures: state.featuresReducer.additionalFeatures,
    additionalPrice: state.priceReducer.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  {addFeature}
)(App);