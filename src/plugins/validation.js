import { Field as inputField, Form as veeForm, ErrorMessage, defineRule } from "vee-validate";

import { required, email } from "@vee-validate/rules";

export default {
  install(app) {
    app.component("inputField", inputField)
    app.component("veeForm", veeForm)
    app.component("ErrorMessage", ErrorMessage)

    defineRule("required", required)
    defineRule("email", email)

  }
}