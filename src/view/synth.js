import Tone from 'tone';

class Synth {
    constructor() {
        this.synth = new Tone.Synth().toMaster();
    }

    playNote(note) {
        console.log(note);
        this.synth.triggerAttackRelease(note.pitch.toString(), note.duration.toString());
    }

    playNoteInMeasure(note, time) {
        console.log(note);
        this.synth.triggerAttackRelease(note, time);
    }

    playMeasure(measure) {
        let _this = this;
        console.log(measure.toSequenceArray());
        let sequence = new Tone.Sequence(function(time, note) { 
            _this.playNoteInMeasure(note, time)
        }, measure.toSequenceArray());
        sequence.start(0);
        Tone.Transport.bpm.value = 300;
        Tone.Transport.start();
    }
}

export default Synth;