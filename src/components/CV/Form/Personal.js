import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import CVSectionTitle from "../../Utils/CVSectionTitle/CVSectionTitle";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";

const Personal = (props) => {
  return (
    <FormWrapper>
      <CVSectionTitle title="Personal Information" />

      <FormControl>
        <FormLabel htmlFor="name" labelName="Name" />
        <FormInput
          args={{
            type: "text",
            name: "name",
            onChange: props.onChange,
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="address" labelName="Address" />
        <FormInput
          args={{
            type: "text",
            name: "address",
            onChange: props.onChange,
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email" labelName="Email" />
        <FormInput
          args={{
            type: "email",
            name: "email",
            onChange: props.onChange,
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="phoneNumber" labelName="Phone Number" />
        <FormInput
          args={{
            type: "number",
            name: "phoneNumber",
            onChange: props.onChange,
          }}
        />
      </FormControl>
    </FormWrapper>
  );
};

export default Personal;
