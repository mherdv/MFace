import React, { useState } from "react";

import { DatePicker } from 'react-md';

import './datepicker.scss';

function DatePickerField({ name, value, onChange, errors, onBlur, minDate, maxDate }) {

    const [isTouched, setIsTouched] = useState(false);

    return (
        <div className={'datepickerConteinr registrationDatepicker'}>
            <DatePicker
                id="inline-date-picker-auto"
                label="Select a date"
                inline
                fullWidth={false}
                value={value && new Date(value)}
                minDate={minDate || null}
                maxDate={maxDate || null}

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

                onVisibilityChange={(isOpen, event) => {
                    onBlur();
                    if (!isOpen && !isTouched) setIsTouched(true);

                }}
            />
            {errors && isTouched ? <h3>{errors}</h3> : null}
        </div>
    );
}


DatePickerField.defaultProps = {
    name: '',
    value: null,
    onChange: null,
    errors: null,
    onBlur: null,
    minDate: null
}


export default DatePickerField;