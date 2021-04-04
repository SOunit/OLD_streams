import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import { createStore } from 'redux';

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    console.log(error, touched);
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name='title' component={this.renderInput} label='Enter title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = (inputValues) => {
  const errors = {};
  if (!inputValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!inputValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
