import React from 'react';
import Select from './select.js'

let MeasureAttributeSelect = props => 
    <Select 
        id={props.attribute}
        change={props.changeMeasure}
        options={props.options}
        value={props.measure.timeSignature[props.attribute]}
    />;

export default MeasureAttributeSelect;