import { Component } from "react";
import FormButton from "../../Utils/FormButton/FormButton";
import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import CVSectionTitle from "../../Utils/CVSectionTitle/CVSectionTitle";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";

class Experience extends Component {
  render() {
    return (
      <FormWrapper>
        <CVSectionTitle title="Work Experience" />

        <FormControl>
          <FormLabel htmlFor="position" labelName="Position" />
          <FormInput args={{ type: "text" }} name="position" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="company" labelName="Company" />
          <FormInput args={{ type: "text" }} name="company" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workCity" labelName="City" />
          <FormInput args={{ type: "text", name: "workCity" }} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workStart" labelName="Start Date" />
          <FormInput args={{ type: "month" }} name="workStart" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workEnd" labelName="End Date" />
          <FormInput args={{ type: "month" }} name="workEnd" />
        </FormControl>

        <FormControl>
          <FormButton args={{ type: "submit" }} label="Add" />
        </FormControl>
      </FormWrapper>
    );
  }
}

export default Experience;
