import React, { Component } from 'react';
import Measure from '../../model/measure/measure.js';
import TimeSignature from '../../model/measure/timeSignature.js';
import MeasureAttributeSelect from './measureAttributeSelect.js';

class BuildMeasure extends Component {
    changeMeasure(e) {
        let { measure, setMeasure } = this.props;
        let { newMeasure } = measure;
        switch(e.target.id) {
            case 'upper':
                newMeasure = new Measure(new TimeSignature(e.target.value, measure.timeSignature.lower));
                break;
            case 'lower':
                newMeasure = new Measure(new TimeSignature(measure.timeSignature.upper, e.target.value));
                break;
            default:
                console.log('attempted to change note with unknown attribute: ' + e.target.id);
                return;
        }
        setMeasure(newMeasure);
    }

    render() {
        let { measure } = this.props;
        return (
            <div>
                <MeasureAttributeSelect measure={measure} attribute='upper' options={Array.from(Array(17).keys()).slice(1,17)} changeMeasure={e => this.changeMeasure(e)} />
                <MeasureAttributeSelect measure={measure} attribute='lower' options={[2, 4, 8, 16]} changeMeasure={e => this.changeMeasure(e)} />
            </div>
        );
    }
}
export default BuildMeasure;