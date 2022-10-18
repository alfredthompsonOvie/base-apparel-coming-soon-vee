import { Field as InputField, Form as VeeForm, ErrorMessage, defineRule } from "vee-validate";

import { required, email } from "@vee-validate/rules";

export default {
  install(app) {
    app.component("InputField", InputField)
    app.component("VeeForm", VeeForm)
    app.component("ErrorMessage", ErrorMessage)

    defineRule("required", required)
    defineRule("email", email)



  }
}