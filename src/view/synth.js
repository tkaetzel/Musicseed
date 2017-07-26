import Tone from 'tone';

class Synth {
    constructor() {
        this.synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
        this.synth.voices.forEach(voice => {
            voice.oscillator.type = 'sawtooth';
            voice.envelope.attack = 0.005;
            voice.envelope.decay = 0.1;
            voice.envelope.sustain = 0.3;
            voice.envelope.release = 1;
        });
    }

    playNote(note) {
        console.log(note);
        this.synth.triggerAttackRelease(note.pitch.toString(), note.duration.toString());
    }

    playScheduledNote(note, time) {
        console.log(note.pitch.toString());
        this.synth.triggerAttackRelease(note.pitch.toString(), note.duration.toString(), time);
    }

    playMeasure(measure) {
        measure.notes.forEach(note => {
            Tone.Transport.schedule(time => {
                this.playScheduledNote(note.note, time)
            }, note.cursor.toTime());
        });
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = "4m";
        Tone.Transport.start();
    }
}

export default Synth;