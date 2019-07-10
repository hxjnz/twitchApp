import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = formValues => {
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
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}
const validate = formValues => {
  const error = {};

  if (!formValues.title) {
    error.title = "You must enter a title";
  }
  if (!formValues.description) {
    error.description = "You must enter a description";
  }

  return error;
};

// 整理redux form的引用并一次性导入到connect方法中
const formWrapped = reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);

// 把表格相关方法作为参数一次性导入，提高可读性
// 把api方法传入connect就能从组建的props中调用
export default connect(
  null,
  { createStream }
)(formWrapped);
