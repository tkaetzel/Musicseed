import React, { Component } from 'react';
import * as chroma from '../../model/note/pitch/chroma.js';
import * as octave from '../../model/note/pitch/octave.js';
import Pitch from '../../model/note/pitch/pitch.js';
import * as unit from '../../model/note/duration/unit.js';
import * as subdivision from '../../model/note/duration/subdivision.js'
import Duration from '../../model/note/duration/duration.js';
import Note from '../../model/note/note.js';
import NoteAttributeSelect from './noteAttributeSelect.js';
import Select from './select.js';

class BuildNote extends Component {
    constructor() {
        super();

        let note = new Note(new Pitch(chroma.C, octave.FOUR), new Duration(subdivision.EIGHTH, unit.TRIPLET));
        
        this.state = { 
            note: note,
            beat: 1,
            partial: 1
        };
    }

    changeNote(e) {
        let note = this.state.note;
        switch(e.target.id) {
            case 'chroma':
                note.pitch.chroma = e.target.value;
                break;
            case 'octave':
                note.pitch.octave = e.target.value;
                break;
            case 'subdivision':
                note.duration.subdivision = e.target.value;  
                break;
            case 'unit':
                note.duration.unit = e.target.value;
                break;
            default:
                console.log('attempted to change note with unknown attribute: ' + e.target.id);
                break;
        }
        this.setState({ note: note });
        console.log(note);
    }

    changeBeat(e) {
        this.setState({ beat: e.target.value });
    }

    changePartial(e) {
        this.setState({ partial: e.target.value });
    }

    render() {
        let { note, beat, partial } = this.state;
        let { measure, addNoteToMeasure } = this.props;
        let beatOptions = Array.from(Array(measure.timeSignature.upper + 1).keys()).slice(1, measure.timeSignature.upper + 1);
        let partialCount = note.duration.subdivision / measure.timeSignature.lower;
        let partialOptions = Array.from(Array(partialCount + 1).keys()).slice(1, partialCount + 1);

        return (
            <div>
                <NoteAttributeSelect note={note} attributeCategory='pitch' attribute='chroma' options={chroma} changeNote={e => this.changeNote(e)} />
                <NoteAttributeSelect note={note} attributeCategory='pitch' attribute='octave' options={octave} changeNote={e => this.changeNote(e)} />
                <NoteAttributeSelect note={note} attributeCategory='duration' attribute='subdivision' options={subdivision} changeNote={e => this.changeNote(e)} />
                <NoteAttributeSelect note={note} attributeCategory='duration' attribute='unit' options={unit} changeNote={e => this.changeNote(e)} />
                <Select id='beat' value={this.state.beat} options={beatOptions} change={(beat) => this.changeBeat(beat)} />
                <Select id='partial' value={this.state.partial} options={partialOptions} change={(partial) => this.changePartial(partial)} />
                <button onClick={() => addNoteToMeasure(note, beat, partial)}>Add Note</button>
            </div>
        );
    }
}
export default BuildNote;