import React, { Component } from 'react';
import Select from './select.js'

class NoteAttributeSelect extends Component {
    render() {
        let { note, attributeCategory, attribute, options, changeNote } = this.props;
        return (
            <Select 
                id={attribute}
                change={changeNote}
                options={options}
                value={note[attributeCategory][attribute]}
                useIndexAsText={true}
            />
        );
    }
}
export default NoteAttributeSelect;