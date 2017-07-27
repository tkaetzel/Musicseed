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
        this.synth.triggerAttackRelease(note.pitch.toString(), note.duration.toTime());
    }

    playScheduledNote(note, time) {
        console.log(note, time, note.duration.toTime());
        this.synth.triggerAttackRelease(note.pitch.toString(), note.duration.toTime(), time);
    }

    playMeasure(measure) {
        console.log(measure);
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

    stop() {
        Tone.Transport.stop();
        Tone.Transport.cancel();
    }
}

export default Synth;