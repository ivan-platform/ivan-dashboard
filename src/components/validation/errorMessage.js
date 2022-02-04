// import { extend } from "vee-validate";
// import { email, min, required } from "vee-validate/dist/rules";

// extend("required", required);
// extend("email", email);
// extend("min", min);
// extend("custom", {
//   computesRequired: true,
//   validate: (value) => !!value,
//   message: "This is custom required message",
// });

import { extend, localize } from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import { email, required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required.",
});
extend("email", {
  ...email,
  message: "Please enter a valid email address  ",
});

// Custom
extend("passwordFieldName", {
  computesRequired: true,
  validate: (value) => !!value,
  message: (field) => `Please provide a ${field}`,
});

extend("verify_password", {
  validate: (value) => value.length >= 5,
  message: () => `Your password must be at least 5 characters long    `,
});

// attach('password', 'required|min:8|verify_password');
// Install messages
localize({
  en,
});
