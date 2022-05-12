import { useRef } from "react";
import FormButton from "../../Utils/FormButton/FormButton";
import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import CVSectionTitle from "../../Utils/CVSectionTitle/CVSectionTitle";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";
import uniqid from "uniqid";

const Experience = (props) => {
  const positionRef = useRef();
  const companyRef = useRef();
  const workCityRef = useRef();
  const workStartRef = useRef();
  const workEndRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newWorkExperience = {
      id: uniqid(),
      position: positionRef.current.value,
      company: companyRef.current.value,
      workCity: workCityRef.current.value,
      workStart: workStartRef.current.value,
      workEnd: workEndRef.current.value,
    };

    props.addWorkExperience(newWorkExperience);
  };

  return (
    <FormWrapper args={{ onSubmit: onSubmitHandler }}>
      <CVSectionTitle title="Work Experience" />

      <FormControl>
        <FormLabel htmlFor="position" labelName="Position" />
        <FormInput
          args={{ type: "text", name: "position", ref: positionRef }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="company" labelName="Company" />
        <FormInput args={{ type: "text", name: "company", ref: companyRef }} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="workCity" labelName="City" />
        <FormInput
          args={{ type: "text", name: "workCity", ref: workCityRef }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="workStart" labelName="Start Date" />
        <FormInput
          args={{ type: "month", name: "workStart", ref: workStartRef }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="workEnd" labelName="End Date" />
        <FormInput args={{ type: "month", name: "workEnd", ref: workEndRef }} />
      </FormControl>

      <FormControl>
        <FormButton args={{ type: "submit" }} label="Add" />
      </FormControl>
    </FormWrapper>
  );
};

export default Experience;
