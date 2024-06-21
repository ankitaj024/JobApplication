const validate = (values) => {
  let errors = {};

  if (!values.fullName) {
    errors.fullName = 'Full Name is required';
  }

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (!/^\d+$/.test(values.phoneNumber)) {
    errors.phoneNumber = 'Phone Number must be a valid number';
  }

  if ((values.position === 'developer' || values.position === 'designer') && !values.experience) {
    errors.experience = 'Relevant Experience is required';
  } else if ((values.position === 'developer' || values.position === 'designer') && values.experience <= 0) {
    errors.experience = 'Relevant Experience must be greater than 0';
  }

  if (values.position === 'designer' && !values.portfolio) {
    errors.portfolio = 'Portfolio URL is required';
  } else if (values.position === 'designer' && !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(values.portfolio)) {
    errors.portfolio = 'Portfolio URL is invalid';
  }

  if (values.position === 'manager' && !values.managementExperience) {
    errors.managementExperience = 'Management Experience is required';
  }

  if (values.skills.length === 0) {
    errors.skills = 'At least one skill must be selected';
  }

  if (!values.interviewTime) {
    errors.interviewTime = 'Preferred Interview Time is required';
  }

  return errors;
};

export default validate;

