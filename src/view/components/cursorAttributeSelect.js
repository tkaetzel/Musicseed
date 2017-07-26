import React from 'react';
import Select from './select.js'

let value = props => {
    if (['subdivision', 'unit'].includes(props.attribute)) {
        return props.cursor.duration[props.attribute];
    }
    else {
        return props.cursor[props.attribute];
    }
}

let CursorAttributeSelect = props =>
    <Select 
        id={props.attribute}
        change={props.changeCursor}
        options={props.options}
        value={value(props)}
        useIndexAsText={props.useIndexAsText}
        displayValuePlusOne={props.displayValuePlusOne}
    />;

export default CursorAttributeSelect;