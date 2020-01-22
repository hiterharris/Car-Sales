import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from 'react-redux';
import {addFeature, removeFeature} from './actions/actions';

const App = props => {

  const removeFeature = item => {
    props.removeFeature(item);
  };

  const addItem = item => {
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
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
  console.log(state);
  return {
    car: state.carReducer.car,
    additionalFeatures: state.featuresReducer.additionalFeatures,
    additionalPrice: state.priceReducer.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  {addFeature, removeFeature}
)(App);