import { Component } from "react";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";
import Personal from "./Personal";

class Form extends Component {
  render() {
    return (
      <FormWrapper>
        <Personal />
      </FormWrapper>
    );
  }
}

export default Form;
