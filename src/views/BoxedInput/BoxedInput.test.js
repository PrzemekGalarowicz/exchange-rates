import React from 'react';
import renderer from 'react-test-renderer';
import BoxedInput from './BoxedInput.component';

const defaultProps = {
  size: 'large',
  selectLabel: 'Select label',
  selectDisabled: false,
  selectLoading: false,
  selectDefaultValue: 'PLN',
  selectOptions: ['PLN', 'USD', 'EUR'],
  inputLabel: 'Input label',
  inputMin: 0,
  inputMax: 100,
  inputDisabled: false,
  inputType: 'number',
  onChange: jest.fn()
};

describe('<BoxedInput />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BoxedInput {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without size', () => {
    const updatedProps = {
      ...defaultProps,
      size: undefined
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without selectLabel', () => {
    const updatedProps = {
      ...defaultProps,
      selectLabel: undefined
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without selectDefaultValue', () => {
    const updatedProps = {
      ...defaultProps,
      selectDefaultValue: undefined
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with selectDisabled state', () => {
    const updatedProps = {
      ...defaultProps,
      selectDisabled: true
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with selectLoading state', () => {
    const updatedProps = {
      ...defaultProps,
      selectLoading: true
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without inputLabel', () => {
    const updatedProps = {
      ...defaultProps,
      inputLabel: undefined
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without inputMin', () => {
    const updatedProps = {
      ...defaultProps,
      inputMin: undefined
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without inputMax', () => {
    const updatedProps = {
      ...defaultProps,
      inputMax: undefined
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without inputType', () => {
    const updatedProps = {
      ...defaultProps,
      inputType: undefined
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with inputDisabled state', () => {
    const updatedProps = {
      ...defaultProps,
      inputDisabled: true
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with inputLoading state', () => {
    const updatedProps = {
      ...defaultProps,
      inputLoading: true
    };
    const tree = renderer.create(<BoxedInput {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
