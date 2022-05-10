import { Component } from "react";
import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import FormSectionTitle from "../../Utils/FormSectionTitle/FormSectionTitle";

class Personal extends Component {
  render() {
    return (
      <section>
        <FormSectionTitle title="Personal Information" />

        <FormControl>
          <FormLabel htmlFor="name" labelName="Name" />
          <FormInput type="text" name="name" />
        </FormControl>
      </section>
    );
  }
}

export default Personal;
