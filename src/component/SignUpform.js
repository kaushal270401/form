import React from "react";
import Form from "./Form";
import {z} from zod

function SignUpForm(props) {
  let template = {
    title: "Signup Application Form",
    fields: [
      {
        title: "First Name",
        type: "text",
        name: "firstname",
        validationProps: {
          required: "First Name is mandatory",
        },
      },
      {
        title: "Second Name",
        type: "text",
        name: "secondname",
        validationProps: {
          required: "Second Name is mandatory",
        },
      },
      {
        title: "Email",
        type: "email",
        name: "email",
      },
      {
        title: "select the country",
        type: "select",
        name: "select",
        option: [
          {
            name: "select",
          },
          {
            name: "INDIA",
          },
          {
            name: "PAKISTAN",
          },
          {
            name: "CHINA",
          },
          {
            name: "RUSSIA",
          },
          {
            name: "USA",
          },
        ],
      },
      {
        title: "Include Portfolio",
        type: "checkbox",
        name: "include_portfolio",
      },
    ],
  };



  return <Form template={template} onSubmit={onSubmit} />;
}

function onSubmit(values) {
  console.log(values);
  const data =z.object({
    firstname:z.string(),
    lastname:z.string(),
    email:z.string()
  })
}



export default SignUpForm;
