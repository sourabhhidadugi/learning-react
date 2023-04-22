import React from 'react'
import { Formik, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

export default function Doc() {
    return (
        <div className='container'>
            <Alert>
            <h1>Login Form!</h1>
            <h5>From Documentation</h5>
            </Alert>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'This field cannot be empty';
                    } else if (
                        !/^[A-Z0-9._]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Form.Label className='label'>Email address:</Form.Label>
                        <Form.Control className="field" placeholder="Email" type="email" name="email" />
                        <ErrorMessage className='error' name="email" component="div" />
                        <Form.Label className='label'>Password:</Form.Label>
                        <Form.Control className="field" placeholder="Password" type="password" name="password" />
                        <ErrorMessage className='error' name="password" component="div" />
                        <br />
                        <Button variant='success' type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            <hr />
        </div>
    );
}

