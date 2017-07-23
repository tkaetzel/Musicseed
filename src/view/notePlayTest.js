import React, { Component } from 'react';
import * as chroma from '../model/note/pitch/chroma.js';
import * as octave from '../model/note/pitch/octave.js';
import Pitch from '../model/note/pitch/pitch.js';
import * as unit from '../model/note/duration/unit.js';
import * as subdivision from '../model/note/duration/subdivision.js'
import Duration from '../model/note/duration/duration.js';
import Note from '../model/note/note.js';
import Synth from './synth.js';

class NotePlayTest extends Component {
    constructor() {
        super();

        this.synth = new Synth();

        let note = new Note(new Pitch(chroma.C, octave.FOUR), new Duration(subdivision.EIGHTH, unit.TRIPLET));
        
        this.state = {
            note: note
        };
    }

    beep() {
        this.synth.playNote(this.state.note);
    }

    changeNote(e, attribute) {
        let { note } = this.state;
        note[attribute[0]][attribute[1]] = e.target.value;
        this.setState({ note: note });
    }

    generateSelect(options, attribute) {
        let { note } = this.state;
        return (
            <select id={attribute[1]} onChange={e => this.changeNote(e, attribute)} value={note[attribute[0]][attribute[1]]}>
                { this.generateOptions(options, attribute) }
            </select>
        );
    }

    generateOptions(options, attribute) {
        let htmlOptions = [];

        for (let option in options) {
            htmlOptions.push(
                <option value={options[option]} key={attribute[1] + '-' + options[option]}>
                    {option}
                </option>
            );
        }

        return htmlOptions;
    }

    render() {
        let { note } = this.state;

        return (
            <div>
                { this.generateSelect(chroma, ['pitch', 'chroma']) }
                { this.generateSelect(octave, ['pitch', 'octave']) }
                { this.generateSelect(subdivision, ['duration', 'subdivision']) }
                { this.generateSelect(unit, ['duration', 'unit']) }
                <button onClick={() => this.beep()}>BEEP</button>
            </div>
        );
    }
}

export default NotePlayTest;