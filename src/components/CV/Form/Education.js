import { Component } from "react";
import FormButton from "../../Utils/FormButton/FormButton";
import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import FormTitle from "../../Utils/FormTitle/FormTitle";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";

class Education extends Component {
  render() {
    return (
      <FormWrapper>
        <FormTitle title="Education" />

        <FormControl>
          <FormLabel htmlFor="schoolName" labelName="School Name" />
          <FormInput type="text" name="schoolName" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="schoolCity" labelName="City" />
          <FormInput type="text" name="schoolCity" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="schoolSubject" labelName="Subject" />
          <FormInput type="text" name="schoolSubject" />
        </FormControl>

        <FormControl>
          <FormButton args={{ type: "submit" }} label="Add" />
        </FormControl>
      </FormWrapper>
    );
  }
}

export default Education;
