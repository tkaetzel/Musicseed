import React, { Component } from 'react';
import Measure from '../model/measure/measure.js';
import TimeSignature from '../model/measure/timeSignature.js';
import BuildNote from './components/buildNote.js';
import BuildMeasure from './components/buildMeasure.js';
import Synth from './synth.js';

class NotePlayTest extends Component {
    constructor() {
        super();

        this.synth = new Synth();

        let measure = new Measure(new TimeSignature(4, 4), [], []);
        
        this.state = { measure: measure }
    }

    beep(note) {
        this.synth.playNote(note);
    }

    playMeasure() {
        this.synth.playMeasure(this.state.measure);
    }

    setMeasure(newMeasure) {
        this.setState({ measure: newMeasure });
    }

    addNoteToMeasure(note, beat, partial) {
        let newMeasure = this.state.measure.withAddedNote(note, beat, partial)
        this.setMeasure(newMeasure);
        this.beep(note);
    }

    render() {
        let { measure } = this.state;
        return (
            <div>
                <BuildMeasure measure={measure} setMeasure={(measure) => this.setMeasure(measure)} />
                <BuildNote measure={measure} addNoteToMeasure={(note, beat, partial) => this.addNoteToMeasure(note, beat, partial)} />
                <button onClick={() => this.playMeasure()}>Play Measure</button>
            </div>
        );
    }
}

export default NotePlayTest;