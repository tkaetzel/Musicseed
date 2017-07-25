import React, { Component } from 'react';
import * as chroma from '../../model/note/pitch/chroma.js';
import * as octave from '../../model/note/pitch/octave.js';
import Pitch from '../../model/note/pitch/pitch.js';
import * as unit from '../../model/note/duration/unit.js';
import * as subdivision from '../../model/note/duration/subdivision.js'
import Duration from '../../model/note/duration/duration.js';
import Note from '../../model/note/note.js';
import NoteAttributeSelect from './noteAttributeSelect.js';

const DEFAULT_CHROMA = chroma.C;
const DEFAULT_OCTAVE = octave.FOUR;
const DEFAULT_NOTE_SUBDIVISION = subdivision.QUARTER;
const DEFAULT_CURSOR_SUBDIVISION = subdivision.NONE;
const DEFAULT_UNIT = unit.DUPLE;

class BuildNote extends Component {
    constructor() {
        super();

        let note = new Note(new Pitch(DEFAULT_CHROMA, DEFAULT_OCTAVE), new Duration(DEFAULT_NOTE_SUBDIVISION, DEFAULT_UNIT));
        let cursor = new Note(new Pitch(null, null), new Duration(DEFAULT_CURSOR_SUBDIVISION, DEFAULT_UNIT));
        
        this.state = { 
            note: note,
            cursor: cursor
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

    changeCursor(e) {
        let oldCursor = this.state.cursor;
        let newCursor = new Note(new Pitch(null, null), new Duration(oldCursor.duration.subdivision, oldCursor.duration.unit));

        switch(e.target.id) {
            case 'subdivision':
                newCursor.duration.subdivision = e.target.value;  
                break;
            case 'unit':
                newCursor.duration.unit = e.target.value;
                break;
            default:
                console.log('attempted to change cursor with unknown attribute: ' + e.target.id);
                break;
        }

        this.setState({ cursor: newCursor });
    }

    render() {
        let { note, cursor, beat, partial } = this.state;
        let { addNoteToMeasure } = this.props;

        return (
            <div>
                <div id='selectNote'>
                    <NoteAttributeSelect note={note} attributeCategory='pitch' attribute='chroma' options={chroma} changeNote={e => this.changeNote(e)} />
                    <NoteAttributeSelect note={note} attributeCategory='pitch' attribute='octave' options={octave} changeNote={e => this.changeNote(e)} />
                    <NoteAttributeSelect note={note} attributeCategory='duration' attribute='subdivision' options={subdivision} changeNote={e => this.changeNote(e)} />
                    <NoteAttributeSelect note={note} attributeCategory='duration' attribute='unit' options={unit} changeNote={e => this.changeNote(e)} />
                </div>
                <div id='selectCursor'>
                    <NoteAttributeSelect note={cursor} attributeCategory='duration' attribute='subdivision' options={subdivision} changeNote={e => this.changeCursor(e)} />
                    <NoteAttributeSelect note={cursor} attributeCategory='duration' attribute='unit' options={unit} changeNote={e => this.changeCursor(e)} />
                </div>
                <button onClick={() => addNoteToMeasure(note, cursor)}>Add Note</button>
            </div>
        );
    }
}
export default BuildNote;