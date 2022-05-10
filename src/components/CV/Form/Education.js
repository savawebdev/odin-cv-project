import { Component } from "react";
import FormButton from "../../Utils/FormButton/FormButton";
import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import CVSectionTitle from "../../Utils/CVSectionTitle/CVSectionTitle";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";

class Education extends Component {
  render() {
    return (
      <FormWrapper>
        <CVSectionTitle title="Education" />

        <FormControl>
          <FormLabel htmlFor="schoolName" labelName="School Name" />
          <FormInput args={{ type: "text", name: "schoolName" }} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="schoolCity" labelName="City" />
          <FormInput args={{ type: "text", name: "schoolCity" }} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="schoolDegree" labelName="Degree" />
          <FormInput args={{ type: "text", name: "schoolDegree" }} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="schoolSubject" labelName="Subject" />
          <FormInput args={{ type: "text", name: "schoolSubject" }} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="schoolStart" labelName="Start Date" />
          <FormInput args={{ type: "month", name: "schoolStart" }} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="schoolEnd" labelName="End Date" />
          <FormInput args={{ type: "month", name: "schoolEnd" }} />
        </FormControl>

        <FormControl>
          <FormButton args={{ type: "submit" }} label="Add" />
        </FormControl>
      </FormWrapper>
    );
  }
}

export default Education;
