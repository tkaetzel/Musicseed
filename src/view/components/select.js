import React from 'react';

let generateOptions = props => {
    let htmlOptions = [];
    let { id, options, useIndexAsText, displayValuePlusOne } = props;

    for (let option in options) {
        let text = useIndexAsText ? option : options[option];
        if (displayValuePlusOne) { text += 1 } 
        htmlOptions.push(
            <option value={options[option]} key={id + '-' + options[option]}>
                {text}
            </option>
        );
    }

    return htmlOptions;
}

let Select = props =>
    <select id={props.id} onChange={e => props.change(e)} value={props.value}>
      { generateOptions(props) }
    </select>;

export default Select;