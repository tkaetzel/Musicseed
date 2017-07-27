import * as subdivisionValues from './subdivisionValues.js'
import Tone from 'tone'

class Duration {
    constructor(subdivision, unit) {
        this.subdivision = subdivision;
        this.unit = unit;
    }

    toString = (subdivisionPart) => {
        return subdivisionPart + this.unit 
    }

    toTime = () => {
        return this.subdivision.reduce((sum, value) => {
            return sum + (value === subdivisionValues.NONE_VAL ? 0 : Tone.TimeBase(this.toString(value)).valueOf());
        }, 0);
    }
}

export default Duration;