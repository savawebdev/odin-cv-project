import { Component, createRef } from "react";
import FormButton from "../../Utils/FormButton/FormButton";
import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import CVSectionTitle from "../../Utils/CVSectionTitle/CVSectionTitle";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.positionRef = createRef();
    this.companyRef = createRef();
    this.workCityRef = createRef();
    this.workStartRef = createRef();
    this.workEndRef = createRef();

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();

    const newWorkExperience = {
      id: uniqid(),
      position: this.positionRef.current.value,
      company: this.companyRef.current.value,
      workCity: this.workCityRef.current.value,
      workStart: this.workStartRef.current.value,
      workEnd: this.workEndRef.current.value,
    };

    this.props.addWorkExperience(newWorkExperience);
  }

  render() {
    return (
      <FormWrapper args={{ onSubmit: this.onSubmitHandler }}>
        <CVSectionTitle title="Work Experience" />

        <FormControl>
          <FormLabel htmlFor="position" labelName="Position" />
          <FormInput
            args={{ type: "text", name: "position", ref: this.positionRef }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="company" labelName="Company" />
          <FormInput
            args={{ type: "text", name: "company", ref: this.companyRef }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workCity" labelName="City" />
          <FormInput
            args={{ type: "text", name: "workCity", ref: this.workCityRef }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workStart" labelName="Start Date" />
          <FormInput
            args={{ type: "month", name: "workStart", ref: this.workStartRef }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workEnd" labelName="End Date" />
          <FormInput
            args={{ type: "month", name: "workEnd", ref: this.workEndRef }}
          />
        </FormControl>

        <FormControl>
          <FormButton args={{ type: "submit" }} label="Add" />
        </FormControl>
      </FormWrapper>
    );
  }
}

export default Experience;
