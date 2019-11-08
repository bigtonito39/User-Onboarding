import React from "react";
import axios from "axios";
import {withFormik,Form, Field} from "formik";
import * as Yup from "yup";



const OnboardingForms = ({values, touched, errors}) => {
console.log(values)
    return (
<div className ="Onboarding-Forms">
 <Form>
  <Field 
  type="text"
  name="name"
  placeholder="Name"
  value={values.name}  
/>
{touched.name && errors.name && <p>{errors.name}</p>}
<Field 
type="text"
name="email"
placeholder="Email"
value={values.email}
/>
{touched.email && errors.email && <p>{errors.email}</p>}
<Field 
type="text"
name="password"
placeholder="Password"
value={values.password}
/>
{touched.password && errors.password && <p>{errors.password}</p>}
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
 terms: terms || ""
        
};
},

validationSchema: Yup.object().shape({
    name: Yup.string().required("Please please  your Name!"),
    email: Yup.string().required("Please enter your Email!"),
    password: Yup.string().required("please enter your Password!")
     

}),

handleSubmit(values) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }  


})(OnboardingForms);

//always make sure to accept 
export default FormikOnboardingForms;