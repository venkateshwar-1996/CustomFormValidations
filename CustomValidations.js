export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
export const PASSWORD_REGEX = /^(?=.*?[a-zA-Z])(?=.*?[#?!@$%^&*0-9-]).{8,30}$/;
export const NAME_REGEX = /^[a-z ,.'-]+$/i;
export function validateEmail(email) {
  var re = EMAIL_REGEX;
  return re.test(String(email).toLowerCase());
}

export function validateName(name) {
  var re = NAME_REGEX;
  return re.test(String(name).toLowerCase());
}

export function validatePassword(password) {
  var re = PASSWORD_REGEX;
  return re.test(String(password));
}

export function validatePhone(num) {
  var re = /^[6-9]\d{9}$/;
  return re.test(String(num).toLowerCase());
}

export const onlyValidatePassword = password => {
  var message = "";
  if (!validatePassword(password)) {
    message =
      "Password should contain atleast 1 letter and 1 special character or a digit";
  }
  if (password.length < 8) {
    message = "Password should be atleast 8 characters";
  }
  if (!password.length) {
    message = "Password is Required";
  }
  if (password.length > 16) {
    message = "Password should be max of 16";
  }
  return message;
};

export const onlyValidateEmail = email => {
  var message = "";
  if (!validateEmail(email)) {
    message = "Invalid Email";
  }
  if (!email.length) {
    message = "Email is Required";
  }
  return message;
};

export const onlyValidateName = name => {
  var message = "";
  if (name.length < 3 || name.length > 128) {
    message = "Name must be atleast 3 characters and atmost 128 characters";
  }
  if (!validateName(name)) {
    message = "Name should not contain special characters or Numbers";
  }
  if (!name.length) {
    message = "Name is Required";
  }
  return message;
};

export const onlyValidateCountryCode = countryCode => {
  var message = "";
  if (!countryCode) {
    message = "Required";
  }
  return message;
};

export const onlyValidateMobileNo = mobileNo => {
  var message = "";
  if (!validatePhone(mobileNo)) {
    message = "Invalid Mobile No";
  }
  if (!mobileNo.length) {
    message = "Mobile No is Required";
  }
  return message;
};

export const onlyValidateCompanyName = companyName => {
  var message = "";
  if (!companyName.length) {
    message = "Company Name is Required";
  }
  return message;
};

export const onlyValidateCompanyId = companyId => {
  var message = "";
  if (!companyId.length) {
    message = "Company Id is Required";
  }
  return message;
};

export const onlyValidateMobileNoAndCountryCode = (mobileNo, countryCode) => {
  var message = "";
  if (countryCode.value.value == "91" && !validatePhone(mobileNo)) {
    message = "Invalid Mobile No";
  }
  return message;
};

export const removeFalsy = obj => {
  let newObj = {};
  Object.keys(obj).forEach(prop => {
    if (obj[prop]) {
      newObj[prop] = obj[prop];
    }
  });
  console.log({ newObj });
  return newObj;
};

