import { Component } from "react";
import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import FormTitle from "../../Utils/FormTitle/FormTitle";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";

class Personal extends Component {
  render() {
    return (
      <FormWrapper>
        <FormTitle title="Personal Information" />

        <FormControl>
          <FormLabel htmlFor="name" labelName="Name" />
          <FormInput type="text" name="name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="address" labelName="Address" />
          <FormInput type="text" name="address" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email" labelName="Email" />
          <FormInput type="email" name="email" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phoneNumber" labelName="Phone Number" />
          <FormInput type="number" name="phoneNumber" />
        </FormControl>
      </FormWrapper>
    );
  }
}

export default Personal;
