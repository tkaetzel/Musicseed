import Tone from 'tone';

class Synth {
    constructor() {
        this.synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
    }

    playNote(note) {
        this.synth.triggerAttackRelease(note.pitch.toString(), note.duration.toString());
    }

    playScheduledNote(note, time) {
        this.synth.triggerAttackRelease(note.pitch.toString(), note.duration.toString(), time);
    }

    playMeasure(measure) {
        measure.notes.forEach(note => {
            console.log(note);
            Tone.Transport.schedule(time => {
                this.playScheduledNote(note.note, time)
            }, note.cursor.duration.toTime());
        });
        Tone.Transport.start();
    }
}

export default Synth;