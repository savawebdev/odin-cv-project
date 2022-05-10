import { Component, createRef } from "react";
import FormButton from "../../Utils/FormButton/FormButton";
import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import CVSectionTitle from "../../Utils/CVSectionTitle/CVSectionTitle";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.schoolNameRef = createRef();
    this.schoolCityRef = createRef();
    this.degreeRef = createRef();
    this.subjectRef = createRef();
    this.schoolStartRef = createRef();
    this.schoolEndRef = createRef();

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();

    const newSchool = {
      id: uniqid(),
      schoolName: this.schoolNameRef.current.value,
      schoolCity: this.schoolCityRef.current.value,
      degree: this.degreeRef.current.value,
      subject: this.subjectRef.current.value,
      schoolStart: this.schoolStartRef.current.value,
      schoolEnd: this.schoolEndRef.current.value,
    };

    console.log(newSchool);

    this.props.addSchool(newSchool);
  }

  render() {
    return (
      <FormWrapper args={{ onSubmit: this.onSubmitHandler }}>
        <CVSectionTitle title="Education" />

        <FormControl>
          <FormLabel htmlFor="schoolName" labelName="School Name" />
          <FormInput
            args={{ type: "text", name: "schoolName", ref: this.schoolNameRef }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="schoolCity" labelName="City" />
          <FormInput
            args={{ type: "text", name: "schoolCity", ref: this.schoolCityRef }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="degree" labelName="Degree" />
          <FormInput
            args={{ type: "text", name: "degree", ref: this.degreeRef }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="subject" labelName="Subject" />
          <FormInput
            args={{ type: "text", name: "subject", ref: this.subjectRef }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="schoolStart" labelName="Start Date" />
          <FormInput
            args={{
              type: "month",
              name: "schoolStart",
              ref: this.schoolStartRef,
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="schoolEnd" labelName="End Date" />
          <FormInput
            args={{ type: "month", name: "schoolEnd", ref: this.schoolEndRef }}
          />
        </FormControl>

        <FormControl>
          <FormButton args={{ type: "submit" }} label="Add" />
        </FormControl>
      </FormWrapper>
    );
  }
}

export default Education;
