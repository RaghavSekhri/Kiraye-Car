const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validate(data) {
  let errors = {};

  data.Fname = !isEmpty(data.Fname) ? data.Fname : '';
  data.Lname = !isEmpty(data.Lname) ? data.Lname : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';


  if (Validator.isEmpty(data.Fname)) {
    errors.Fname = 'FName field is required';
  }else{

    if (!Validator.isLength(data.Fname, { min: 2, max: 30 })) {
      errors.Fname = 'FName must be between 2 and 30 characters';
    }
    if (!Validator.isAlpha(data.Fname)) {
      errors.Fname = "Only alphabets are required";
    }
  }

  if (Validator.isEmpty(data.Lname)) {
    errors.Lname = 'LName field is required';
  }else{
    if (!Validator.isLength(data.Lname, { min: 2, max: 30 })) {
      errors.Lname = 'LName must be between 2 and 30 characters';
    }
    if (!Validator.isAlpha(data.Lname)) {
      errors.Lname = "Only alphabets are required";
    }
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
