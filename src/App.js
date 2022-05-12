import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/CV/Form/Form";
import Preview from "./components/CV/Preview/Preview";
import "./App.module.css";

const App = () => {
  const [personal, setPersonal] = useState({
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const onPersonalChange = (e) => {
    e.preventDefault();
    const name = e.target.name;

    setPersonal((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const addSchool = (newSchool) => {
    setEducation((prev) => [...prev, newSchool]);
  };

  const addWorkExperience = (newWorkExperience) => {
    setExperience((prev) => [...prev, newWorkExperience]);
  };

  return (
    <div>
      <Header />

      <main>
        <Form
          onPersonalChange={onPersonalChange}
          addSchool={addSchool}
          addWorkExperience={addWorkExperience}
        />

        <Preview
          personal={personal}
          education={education}
          experience={experience}
        />
      </main>
    </div>
  );
};

export default App;
