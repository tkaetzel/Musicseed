class Pitch {
    constructor(chroma, octave) {
        this.chroma = chroma;
        this.octave = octave;
    }

    toString = () => { return this.chroma + this.octave }
}

export default Pitch;