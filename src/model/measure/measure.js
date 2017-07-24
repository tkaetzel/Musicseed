import * as unit from '../note/duration/unit.js';
import * as subdivision from '../note/duration/subdivision.js'

class Measure {
    constructor(timeSignature) {
        this.timeSignature = timeSignature;

        this.duples = [];
        this.triplets = [];

        this.duplesPerBeat = subdivision.THIRTY_SECOND / this.timeSignature.lower;
        this.tripletsPerBeat = this.duplesPerBeat * 1.5;
    }

    addNote(note, beat, partial) {
        let notesPerBeat = this._getNotesPerBeat(note.duration.unit);

        let index = ((beat - 1) * notesPerBeat) + ((partial - 1) * (32/note.duration.subdivision));

        switch(note.duration.unit) {
            case unit.DUPLE:
                this.duples[index] = note;
                break;
            case unit.TRIPLET:
                this.triplets[index] = note;
                break;
            default:
                console.log('attempted to add note with unknown duration unit: ' + note.duration.unit);
                break;
        }
    }

    toSequenceArray() {
        let result = [];
        for (let i = 0; i < this.duples.length; i++) {
            result[i] = this.duples[i] == null ? null : this.duples[i].pitch.toString();
        }
        return result;
    }

    _getNotesPerBeat(beatUnit) {
        switch(beatUnit) {
            case unit.DUPLE:
                return this.duplesPerBeat;
            case unit.TRIPLET:
                return this.tripletsPerBeat;
            case unit.MEASURE:
            default:
                return 0; 
        } 
    }
}

export default Measure;