import * as subdivision from './subdivision.js'

class Duration {
    constructor(subdivision, unit) {
        this.subdivision = subdivision;
        this.unit = unit;
    }

    toString = () => {
        // weird bug for dotted-half notes (omit unit)
        if (this.subdivision === subdivision.DOTTED_HALF.toString()) {
            return this.subdivision;
        }
        else {
            return this.subdivision + this.unit 
        }
    }
}

export default Duration;