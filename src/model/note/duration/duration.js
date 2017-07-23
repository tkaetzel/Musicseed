class Duration {
    constructor(subdivision, unit) {
        this.subdivision = subdivision;
        this.unit = unit;
    }

    toString = () => { return this.subdivision + this.unit }
}

export default Duration;