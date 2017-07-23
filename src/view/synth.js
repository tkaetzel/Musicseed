import Tone from 'tone';

class Synth {
    constructor() {
        this.synth = new Tone.Synth().toMaster();
    }

    playNote(note) {
        this.synth.triggerAttackRelease(note.pitch.toString(), note.duration.toString());
    }
}

export default Synth;