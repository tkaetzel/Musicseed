import React from 'react';

let Select = props =>
    <select id={props.id} onChange={e => props.change(e)} value={props.value}>
      { generateOptions(props) }
    </select>;

let generateOptions = props => {
    let htmlOptions = [];
    let { id, options, useIndexAsText } = props;

    for (let option in options) {
        htmlOptions.push(
            <option value={options[option]} key={id + '-' + options[option]}>
                {useIndexAsText ? option : options[option]}
            </option>
        );
    }

    return htmlOptions;
}

export default Select;