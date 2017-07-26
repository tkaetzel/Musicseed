import Tone from 'tone'

class Cursor {
    constructor(measureNum, beatNum, duration) {
        this.measureNum = measureNum;
        this.beatNum = beatNum;
        this.duration = duration;
    }

    toTime = () => {

        return Tone.TransportTime(this.measureNum + ':' + this.beatNum).toSeconds() + this.duration.toTime();
    }
}

export default Cursor;