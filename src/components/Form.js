import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Icons
import { IoMdClose as CancelIcon } from 'react-icons/io';
// Components
import Button from './Button';

/*
 * TODO: Create the Form component
 *
 * Requirements:
 * - Must be named Form
 * - Must be a class component
 * - Should implement all the methods defined below
 * - Should render a form element
 * - Should either render an input or a textarea element
 * - Should render a submit button
 * - Should render a cancel icon (optional)
 * 
 * Tips:
 * - You can use the 'form' and 'form-*' CSS classes for styling
 * 
 */ 
class Form extends Component {
  constructor(props) {
    super(props);

    // Refs to access form and control input/textarea DOM nodes
    this.formRef = React.createRef();
    this.controlRef = React.createRef();

    // TODO: Define your state properties here
    this.state = {
      input:""
    }
    this.handleOnChangeText = this.handleOnChangeText.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    // TODO: Bind your class methods here
    // ...
  }

  // TODO: implement the componentDidMount lifecycle method to set focus on the form control element.
  // Tips:
  // - Call the `focus` method on the control ref node `this.controlRef.current`
  componentDidMount() {
    // this.controlRef.current.focus();
  }

  // TODO: implement the handleOnChangeText event handler.
  // Tips:
  // - Use the `this.setState` method to update the text value of the control from
  handleOnChangeText (event){
    const{value} = event.target;
    this.setState({input : value})

  }

  // TODO: implement the handleOnSubmit event handler.
  // Tips:
  // - Use the `preventDefault` method to prevent the default action
  // - Call the `this.props.onClickSubmit` method to submit the text
  // - Clean up the control form value using `this.setState`
  handleOnSubmit(event) {
    event.preventDefault()
    this.props.onClickSubmit()
    this.setState(this.state.input="")
  }

  // TODO: implement the handleOnKeyDown event handler.
  // Tips:
  // - Use the `key` attribute from the event to check if the user has pressed "Enter" on the keyboard
  // - Call the `this.handleOnSubmit` if the user pressed "Enter"
  handleOnKeyDown(event) {
    const {key} = event.target
    if (key === "Enter") this.handleOnSubmit()
  }

  // TODO: render the Form UI.
  render() {
    return (
      <form
        ref={this.formRef}
        className={`form form-${this.props.type}`}
      >
       <input type="text" value={this.state.input} name="input" onChange={this.handleOnChangeText} className="form-textarea"/>
        <div className="form-actions">
        <Button text={this.props.buttonText}/> 
        <CancelIcon />
        </div>
      </form>
    );
  }
};

Form.defaultProps = {
  initialValue: '',
  placeholder: '',
  buttonText: '',
  onClickSubmit: () => null,
  onClickCancel: () => null
};

Form.propTypes = {
  type: PropTypes.oneOf(['list', 'card', 'editor']).isRequired,
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  onClickSubmit: PropTypes.func,
  onClickCancel: PropTypes.func
};

export default Form;
