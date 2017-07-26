import Measure from '../model/measure/measure.js';
import TimeSignature from '../model/measure/timeSignature.js';
import PlacedNote from '../model/note/placedNote.js';
import Note from '../model/note/note.js';
import Cursor from '../model/note/cursor.js';
import Duration from '../model/note/duration/duration.js'
import Pitch from '../model/note/pitch/pitch.js'
import * as chroma from '../model/note/pitch/chroma.js';
import * as octave from '../model/note/pitch/octave.js';
import * as unit from '../model/note/duration/unit.js';
import * as subdivision from '../model/note/duration/subdivision.js'

let test = () => {
    return new Measure(new TimeSignature(4, 4), [
        new PlacedNote(
            new Note(new Pitch(chroma.C, octave.FIVE), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(0, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.D, octave.FIVE), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(0, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.F, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(0, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(0, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(0, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.B, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(0, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.F, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(0, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(0, 0, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.C, octave.THREE), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(0, 1, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(0, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.B, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(0, 2, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.D, octave.THREE), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(0, 2, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.B, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(0, 3, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(0, 3, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        //------------------------------------------------------------------------------------------
        new PlacedNote(
            new Note(new Pitch(chroma.D, octave.FIVE), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(1, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.E, octave.FIVE), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(1, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.FIVE), new Duration(subdivision.SIXTEENTH, unit.DUPLE)),
            new Cursor(1, 3, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.F, octave.FIVE), new Duration(subdivision.SIXTEENTH, unit.DUPLE)),
            new Cursor(1, 3, new Duration(subdivision.SIXTEENTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.E, octave.FIVE), new Duration(subdivision.SIXTEENTH, unit.DUPLE)),
            new Cursor(1, 3, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.D, octave.FIVE), new Duration(subdivision.SIXTEENTH, unit.DUPLE)),
            new Cursor(1, 3, new Duration(subdivision.DOTTED_EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(1, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.B, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(1, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(1, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.C, octave.FIVE), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(1, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.E, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(1, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(1, 0, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.B, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(1, 1, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(1, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.C, octave.THREE), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(1, 2, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.E, octave.THREE), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(1, 2, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.C, octave.THREE), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(1, 3, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(1, 3, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        //------------------------------------------------------------------------------------------
        new PlacedNote(
            new Note(new Pitch(chroma.C, octave.FIVE), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(2, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.D, octave.FIVE), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(2, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.F, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(2, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(2, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(2, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.B, octave.FOUR), new Duration(subdivision.DOTTED_QUARTER, unit.DUPLE)),
            new Cursor(2, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.F, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(2, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(2, 0, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.C, octave.THREE), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(2, 1, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(2, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.B, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(2, 2, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.D, octave.THREE), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(2, 2, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.B, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(2, 3, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(2, 3, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        //------------------------------------------------------------------------------------------
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.FOUR), new Duration(subdivision.QUARTER, unit.DUPLE)),
            new Cursor(3, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.FOUR), new Duration(subdivision.QUARTER, unit.DUPLE)),
            new Cursor(3, 1, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.FIVE), new Duration(subdivision.SIXTEENTH, unit.DUPLE)),
            new Cursor(3, 3, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.F, octave.FIVE), new Duration(subdivision.SIXTEENTH, unit.DUPLE)),
            new Cursor(3, 3, new Duration(subdivision.SIXTEENTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.E, octave.FIVE), new Duration(subdivision.SIXTEENTH, unit.DUPLE)),
            new Cursor(3, 3, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.D, octave.FIVE), new Duration(subdivision.SIXTEENTH, unit.DUPLE)),
            new Cursor(3, 3, new Duration(subdivision.DOTTED_EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.FOUR), new Duration(subdivision.QUARTER, unit.DUPLE)),
            new Cursor(3, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.B, octave.FOUR), new Duration(subdivision.QUARTER, unit.DUPLE)),
            new Cursor(3, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.FOUR), new Duration(subdivision.QUARTER, unit.DUPLE)),
            new Cursor(3, 1, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.C, octave.FIVE), new Duration(subdivision.QUARTER, unit.DUPLE)),
            new Cursor(3, 1, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.E, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(3, 0, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.G, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(3, 0, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.B, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(3, 1, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(3, 1, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.C, octave.THREE), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(3, 2, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.E, octave.THREE), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(3, 2, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.C, octave.THREE), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(3, 3, new Duration(subdivision.NONE, unit.DUPLE))
        ),
        new PlacedNote(
            new Note(new Pitch(chroma.A, octave.TWO), new Duration(subdivision.EIGHTH, unit.DUPLE)),
            new Cursor(3, 3, new Duration(subdivision.EIGHTH, unit.DUPLE))
        ),
    ]);
}

export default test;