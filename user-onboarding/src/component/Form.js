import React from "react";
import axios from "axios";
import {withFormik,Form, Field} from "formik";
import * as Yup from "yup";



const OnboardingForms = ({values, touched, errors}) => {

    return (
<div className ="Onboarding-Forms">
 <Form>
  <Field 
  type="text"
  name="name"
  placeholder="Name"
  value={values.name}  
/>

<Field 
type="text"
name="email"
placeholder="Email"
value={values.email}
/>

<Field 
type="text"
name="password"
placeholder="Password"
value={values.password}
/>

<label> 
Do you accept Terms of Use?
<Field 
type="checkbox"
name="terms"
placeholder="Terms of Use"

/>
</label>
<button type="submit">Submit</button>
</Form>                
</div>
    )

}
//this is passing data to values on the  OnboardingForms function
const FormikOnboardingForms = withFormik({
mapPropsToValues({name, email, password, terms}) {
    
return {
 name: name || "",
 email: email || "",
 password: password || "",
 terms: terms || "",
        
};
},
})(OnboardingForms);

//always make sure to accept 
export default FormikOnboardingForms;