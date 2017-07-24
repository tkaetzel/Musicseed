import React, { Component } from 'react';
import Select from './select.js'

class MeasureAttributeSelect extends Component {
    render() {
        let { measure, attribute, options, changeMeasure } = this.props;
        return (
            <Select 
                id={attribute}
                change={changeMeasure}
                options={options}
                value={measure.timeSignature[attribute]}
            />
        );
    }
}
export default MeasureAttributeSelect;