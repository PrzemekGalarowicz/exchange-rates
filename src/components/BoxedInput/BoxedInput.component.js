import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bulma-components';

const { Input, Field, Select, Control, Label } = Form;

const BoxedInput = ({
  size,
  selectLabel,
  selectDisabled,
  selectLoading,
  selectDefaultValue,
  selectOptions,
  inputLabel,
  inputMin,
  inputMax,
  inputDisabled,
  inputType,
  onChange
}) => (
  <Field kind="addons" alignItems="flex-end">
    <Control>
      <Field>
        {selectLabel && <Label>{selectLabel}</Label>}
        <Control>
          <Select
            size={size}
            loading={selectLoading}
            disabled={selectDisabled}
            defaultValue={selectDefaultValue}>
            {selectOptions?.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </Select>
        </Control>
      </Field>
    </Control>
    <Control fullwidth>
      <Field alignItems="flex-end">
        {inputLabel && <Label>{inputLabel}</Label>}
        <Control>
          <Input
            size={size}
            type={inputType}
            min={inputMin}
            max={inputMax}
            disabled={inputDisabled}
            onChange={onChange}
          />
          {/* TODO: Add some loading state for inputs: {inputLoading && ???} */}
        </Control>
      </Field>
    </Control>
  </Field>
);

BoxedInput.defaultProps = {
  size: 'medium',
  selectDisabled: false,
  selectLoading: false,
  selectDefaultValue: '',
  inputDisabled: false,
  inputLoading: false,
  inputType: 'text'
};

BoxedInput.propTypes = {
  size: PropTypes.string,
  selectLabel: PropTypes.string,
  selectDisabled: PropTypes.bool,
  selectLoading: PropTypes.bool,
  selectDefaultValue: PropTypes.string,
  selectOptions: PropTypes.array.isRequired,
  inputLabel: PropTypes.string,
  inputType: PropTypes.string,
  inputMin: PropTypes.string,
  inputMax: PropTypes.string,
  inputLoading: PropTypes.bool,
  inputDisabled: PropTypes.bool,
  onChange: PropTypes.func
};

export default BoxedInput;
