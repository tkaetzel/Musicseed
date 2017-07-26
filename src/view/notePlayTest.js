import React, { Component } from 'react';
import Measure from '../model/measure/measure.js';
import TimeSignature from '../model/measure/timeSignature.js';
import BuildNote from './components/buildNote.js';
import BuildMeasure from './components/buildMeasure.js';
import Synth from './synth.js';
import MeasureNotation from './measureNotation.js';
import test from './test.js'

class NotePlayTest extends Component {
    constructor() {
        super();
        this.synth = new Synth();
        let measure = new Measure(new TimeSignature(4, 4), []);
        this.state = { measure: measure }
    }

    beep(note) {
        this.synth.playNote(note);
    }

    playMeasure() {
        console.log(this.state.measure);
        this.synth.playMeasure(this.state.measure);
    }

    playTest() {
        this.synth.playMeasure(test());
    }

    setMeasure(newMeasure) {
        this.setState({ measure: newMeasure });
    }

    addNoteToMeasure(note, cursor) {
        this.setMeasure(this.state.measure.withAddedNote(note, cursor));
        this.beep(note);
    }

    render() {
        let { measure } = this.state;
        return (
            <div>
                <BuildMeasure measure={measure} setMeasure={(newMeasure) => this.setMeasure(newMeasure)} />
                <BuildNote measure={measure} addNoteToMeasure={(note, cursor) => this.addNoteToMeasure(note, cursor)} />
                <button onClick={() => this.playMeasure()}>Play Measure</button>
                <button onClick={() => this.playTest()}>Play Test</button>
                <MeasureNotation measure={measure} id={0} />
            </div>
        );
    }
}

export default NotePlayTest;