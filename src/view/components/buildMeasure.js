import React, { Component } from 'react';
import MeasureAttributeSelect from './measureAttributeSelect.js';

const UPPER_OPTIONS = Array.from(Array(17).keys()).slice(1,17);
const LOWER_OPTIONS = [2, 4, 8, 16];

class BuildMeasure extends Component {
    changeUpper(e) {
        let { measure, setMeasure } = this.props;
        setMeasure(measure.withNewTimeSignature(parseInt(e.target.value, 10), measure.timeSignature.lower));
    }
    changeLower(e) {
        let { measure, setMeasure } = this.props;
        setMeasure(measure.withNewTimeSignature(measure.timeSignature.lower, parseInt(e.target.value, 10)));
    }

    render() {
        let { measure } = this.props;
        return (
            <div>
                <MeasureAttributeSelect measure={measure} attribute='upper' options={UPPER_OPTIONS} changeMeasure={e => this.changeUpper(e)} />
                <MeasureAttributeSelect measure={measure} attribute='lower' options={LOWER_OPTIONS} changeMeasure={e => this.changeLower(e)} />
            </div>
        );
    }
}
export default BuildMeasure;