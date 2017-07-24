class Note {
    constructor(pitch, duration) {
        this.pitch = pitch;
        this.duration = duration;
    }

    copy() {
        return new Note(this.pitch.copy(), this.duration);
    }
}

export default Note;