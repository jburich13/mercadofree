import React from 'react';
import { useFormik } from 'formik';
import { Col, Container, Row } from 'react-bootstrap';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (

<Container  className="Form__Container">
    <Col>
    <form onSubmit={formik.handleSubmit}>
        <Row className="Form__inputLabelContainer">
        <label htmlFor="firstName" className="Form__inputLabel">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        className="Form__input"
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        </Row>
       
        <Row  className="Form__inputLabelContainer">
        <label htmlFor="lastName" className="Form__inputLabel">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        className="Form__input"
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        </Row>
        <Row  className="Form__inputLabelContainer">
            
      <label htmlFor="email" className="Form__inputLabel">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="Form__input"
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        </Row>   
     

     

      <button type="submit" className="Home__btn rounded-pill p-2">Submit</button>
    </form>
    </Col>
</Container>
    
  );
};
export default SignupForm;

