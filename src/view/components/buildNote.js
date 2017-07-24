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

const DEFAULT_CHROMA = chroma.C;
const DEFAULT_OCTAVE = octave.FOUR;
const DEFAULT_SUBDIVISION = subdivision.QUARTER;
const DEFAULT_UNIT = unit.DUPLE;

class BuildNote extends Component {
    constructor() {
        super();

        let note = new Note(new Pitch(DEFAULT_CHROMA, DEFAULT_OCTAVE), new Duration(DEFAULT_SUBDIVISION, DEFAULT_UNIT));
        
        this.state = { 
            note: note,
            beat: 1,
            partial: 1
        };
    }

    changeNote(e) {
        let oldNote = this.state.note;
        let newNote = new Note(new Pitch(oldNote.pitch.chroma, oldNote.pitch.octave), new Duration(oldNote.duration.subdivision, oldNote.duration.unit));

        switch(e.target.id) {
            case 'chroma':
                newNote.pitch.chroma = e.target.value;
                break;
            case 'octave':
                newNote.pitch.octave = e.target.value;
                break;
            case 'subdivision':
                newNote.duration.subdivision = e.target.value;  
                break;
            case 'unit':
                newNote.duration.unit = e.target.value;
                break;
            default:
                console.log('attempted to change note with unknown attribute: ' + e.target.id);
                break;
        }

        this.setState({ note: newNote });
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