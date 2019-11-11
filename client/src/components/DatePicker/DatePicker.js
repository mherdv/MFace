import React from "react";

import { DatePicker } from 'react-md';

import './datepicker.scss';

function DatePickerField({ name, value, onChange, errors, onBlur }) {
    return (
        <div className={'datepickerConteinr registrationDatepicker'}>
            <DatePicker
                id="inline-date-picker-auto"
                label="Select a date"
                inline
                fullWidth={false}
                value={value && new Date(value)}

                onChange={(value, fullTime) => {
                    let event = {
                        target: {
                            name,
                            value: new Date(fullTime) + '',
                            type: 'text'
                        }
                    }

                    onChange(event)
                }}
            />
        </div>
    );
}


DatePickerField.defaultProps = {
    name: '',
    value: null,
    onChange: null,
    errors: null,
    onBlur: null
}


export default DatePickerField;