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
  onSelectChange,
  inputLabel,
  inputMin,
  inputMax,
  inputDisabled,
  inputType,
  onInputChange
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
            defaultValue={selectDefaultValue}
            onChange={onSelectChange}>
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
            onChange={onInputChange}
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
  onSelectChange: PropTypes.func,
  inputLabel: PropTypes.string,
  inputType: PropTypes.string,
  inputMin: PropTypes.number,
  inputMax: PropTypes.number,
  inputLoading: PropTypes.bool,
  inputDisabled: PropTypes.bool,
  onInputChange: PropTypes.func
};

export default BoxedInput;
