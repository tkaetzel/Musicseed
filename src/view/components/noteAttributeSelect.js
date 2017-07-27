import React from 'react';
import Select from './select.js'

let NoteAttributeSelect = props =>
    <Select 
        id={props.attribute}
        change={props.changeNote}
        options={props.options}
        value={props.note[props.attributeCategory][props.attribute].toString()}
        useIndexAsText={true}
    />;

export default NoteAttributeSelect;