import React, { Component } from 'react';
import Vex from 'vexflow';

const WIDTH = 500;
const HEIGHT = 500;
const STAVE_X = 50;
const STAVE_Y = 40;
const STAVE_WIDTH = 400;

class MeasureNotation extends Component {
    constructor(props) {
        super();
        this.id = 'measure_' + props.id;
    }

    componentDidMount() {
        this.draw(this.props.measure);
    }

    componentDidUpdate() {
        this.draw(this.props.measure);
    }

    buildContext() {
        let div = document.getElementById(this.id)
        console.log(div);
        // if we haven't rendered the div yet, don't try to render measure
        if (!div) return null;
        let renderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
        renderer.resize(WIDTH, HEIGHT);
        return renderer.getContext();
    }

    buildStave(context) {
        var stave = new Vex.Flow.Stave(STAVE_X, STAVE_Y, STAVE_WIDTH);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();
        return stave;
    }

    buildNotes(measure) {
        return [
            new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),
            new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "q" }),
            new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),
            new Vex.Flow.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
        ];
    }

    buildVoices(measure, notes) {
        let num_beats = measure.timeSignature.upper;
        let beat_value = measure.timeSignature.lower;
        let voice = new Vex.Flow.Voice({ num_beats, beat_value });
        voice.addTickables(notes);
        return [voice];
    }

    draw(measure) {
        let context = this.buildContext();
        // if we haven't rendered the div yet, don't try to render measure
        if (!context) return false;
        let stave = this.buildStave(context);
        let notes = this.buildNotes(measure);
        let voices = this.buildVoices(measure, notes);
        new Vex.Flow.Formatter().joinVoices(voices).format(voices, STAVE_WIDTH);
        console.log(voices);
        voices.forEach(voice => { voice.draw(context, stave) });
    }

    render() {
        return (
            <div id={this.id} />
        );
    }
}

export default MeasureNotation;
