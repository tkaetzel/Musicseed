import PlacedNote from '../note/placedNote.js';
import TimeSignature from './timeSignature.js';

class Measure {
    constructor(timeSignature, notes) {
        this.timeSignature = timeSignature;
        this.notes = notes;
    }

    withAddedNote(note, cursor) {
        let newMeasure = new Measure(new TimeSignature(this.timeSignature.upper, this.timeSignature.lower), this.notes.slice());
        newMeasure.notes.push(new PlacedNote(note, cursor));
        return newMeasure;
    }

    withNewTimeSignature(upper, lower) {
        return new Measure(new TimeSignature(upper, lower), []);
    }
}

export default Measure;