import React, { Component } from 'react';

class Select extends Component {
    generateSelect() {
        let { id, change, value } = this.props;
        return (
            <select id={id} onChange={e => change(e)} value={value}>
                { this.generateOptions() }
            </select>
        );
    }

    generateOptions() {
        let htmlOptions = [];
        let { id, options, useIndexAsText } = this.props;

        for (let option in options) {
            htmlOptions.push(
                <option value={options[option]} key={id + '-' + options[option]}>
                    {useIndexAsText ? option : options[option]}
                </option>
            );
        }

        return htmlOptions;
    }

    render() {
        return (
            <span>
                { this.generateSelect() }
            </span>
        );
    }
}

export default Select;