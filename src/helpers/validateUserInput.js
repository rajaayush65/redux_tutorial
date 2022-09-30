export const validateLoginInput = (email, password) => {
  const errors = {};
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(regEx)) {
      errors.email = "Please Enter a valid email address";
    }
  }
  if (password === "") {
    errors.password = "Password must not empty";
  } else {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (!password.match(regEx)) {
      errors.password =
        "Must Contain 8 Characters, 1 Lower, 1 Upper and 1 Special";
    }
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
