import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
// 把表格相关方法作为参数一次性导入，提高可读性
// 把api方法传入connect就能从组建的props中调用
export default connect(
  null,
  { createStream }
)(StreamCreate);
