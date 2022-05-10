import { Component } from "react";
import FormControl from "../../Utils/FormControl/FormControl";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import FormSectionTitle from "../../Utils/FormSectionTitle/FormSectionTitle";

class Personal extends Component {
  render() {
    return (
      <section>
        <FormSectionTitle title="Personal Information" />

        <FormControl>
          <FormLabel htmlFor="name" labelName="Name" />

          <input type="text" name="name" />
        </FormControl>
      </section>
    );
  }
}

export default Personal;
