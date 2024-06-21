import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    experience: '',
    portfolio: '',
    managementExperience: '',
    skills: [],
    interviewTime: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setValues((prevValues) => {
      if (checked) {
        return { ...prevValues, skills: [...prevValues.skills, value] };
      } else {
        return { ...prevValues, skills: prevValues.skills.filter((skill) => skill !== value) };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    values,
    errors,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  };
};

export default useForm;
