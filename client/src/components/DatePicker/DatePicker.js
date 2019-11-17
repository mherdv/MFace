import React, { useState } from "react";

import { DatePicker } from "react-md";
import PropTypes from "prop-types";

import "./datepicker.scss";

function DatePickerField({
  name,
  value,
  onChange,
  errors,
  onBlur,
  minDate,
  maxDate
}) {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div className="datepickerConteinr registrationDatepicker">
      <DatePicker
        id="inline-date-picker-auto"
        label="Select a date"
        inline
        fullWidth={false}
        value={value && new Date(value)}
        minDate={minDate || null}
        maxDate={maxDate || null}
        onChange={(_value, fullTime) => {
          const event = {
            target: {
              name,
              value: `${new Date(fullTime)}`,
              type: "text"
            }
          };

          onChange(event);
        }}
        onVisibilityChange={isOpen => {
          onBlur();
          if (!isOpen && !isTouched) setIsTouched(true);
        }}
      />
      {errors && isTouched ? <h3>{errors}</h3> : null}
    </div>
  );
}

DatePickerField.defaultProps = {
  name: "",
  value: "",
  errors: "",
  onBlur: null,
  minDate: null,
  maxDate: null
};
DatePickerField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string,
  onBlur: PropTypes.func,
  minDate: PropTypes.instanceOf(Object),
  maxDate: PropTypes.instanceOf(Object)
};

export default DatePickerField;
