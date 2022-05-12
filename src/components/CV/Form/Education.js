import { useRef } from "react";
import FormButton from "../../Utils/FormButton/FormButton";
import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import CVSectionTitle from "../../Utils/CVSectionTitle/CVSectionTitle";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";
import uniqid from "uniqid";

const Education = (props) => {
  const schoolNameRef = useRef();
  const schoolCityRef = useRef();
  const degreeRef = useRef();
  const subjectRef = useRef();
  const schoolStartRef = useRef();
  const schoolEndRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newSchool = {
      id: uniqid(),
      schoolName: schoolNameRef.current.value,
      schoolCity: schoolCityRef.current.value,
      degree: degreeRef.current.value,
      subject: subjectRef.current.value,
      schoolStart: schoolStartRef.current.value,
      schoolEnd: schoolEndRef.current.value,
    };

    props.addSchool(newSchool);
  };

  return (
    <FormWrapper args={{ onSubmit: onSubmitHandler }}>
      <CVSectionTitle title="Education" />

      <FormControl>
        <FormLabel htmlFor="schoolName" labelName="School Name" />
        <FormInput
          args={{ type: "text", name: "schoolName", ref: schoolNameRef }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="schoolCity" labelName="City" />
        <FormInput
          args={{ type: "text", name: "schoolCity", ref: schoolCityRef }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="degree" labelName="Degree" />
        <FormInput args={{ type: "text", name: "degree", ref: degreeRef }} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="subject" labelName="Subject" />
        <FormInput args={{ type: "text", name: "subject", ref: subjectRef }} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="schoolStart" labelName="Start Date" />
        <FormInput
          args={{
            type: "month",
            name: "schoolStart",
            ref: schoolStartRef,
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="schoolEnd" labelName="End Date" />
        <FormInput
          args={{ type: "month", name: "schoolEnd", ref: schoolEndRef }}
        />
      </FormControl>

      <FormControl>
        <FormButton args={{ type: "submit" }} label="Add" />
      </FormControl>
    </FormWrapper>
  );
};

export default Education;
