import {
  FormControl,
  Select,
  Input,
  FormLabel,
  Heading,
  Container,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

// Reusable Form Component
function Form({ template, onSubmit }) {
  let { register, handleSubmit } = useForm();
  let { title, fields } = template;

  const renderFields = (fields) => {
    return fields.map((fields) => {
      const { title, type, name, option } = fields;

      switch (type) {
        case "text":
          return (
            <FormControl key={name}>
              <FormLabel htmlFor={name}>{title}</FormLabel>
              <Input type={type} name={name} id={name} {...register(name)} />
            </FormControl>
          );
        case "email":
          return (
            <FormControl key={name}>
              <FormLabel htmlFor={name}>{title}</FormLabel>
              <Input type={type} name={name} id={name} {...register(name)} />
            </FormControl>
          );
        case "select":
          return (
            <FormControl key={name}>
              <FormLabel htmlFor={name}>{title}</FormLabel>
              <Select {...register(name)} name={name} id={name}>
                {fields.option.map((opt) => {
                  return <option>{opt.name}</option>;
                })}
              </Select>
            </FormControl>
          );
      }
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading mb={4}>{title}</Heading>
        {renderFields(fields)}
        <Button mt={5} type="submit" colorScheme="blackAlpha" className="btn">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Form;
