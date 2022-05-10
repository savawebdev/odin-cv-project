import { Component } from "react";

class FormWrapper extends Component {
  render() {
    return <form>{this.props.children}</form>;
  }
}

export default FormWrapper;
