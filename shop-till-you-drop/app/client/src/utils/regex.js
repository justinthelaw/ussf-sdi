export const ValidateEmail = (email) => {
  let valid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!valid.test(email)) {
    return true;
  }
  return false;
};

export const ValidatePassword = (password) => {
  let valid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!valid.test(password)) {
    return true;
  }
  return false;
};
