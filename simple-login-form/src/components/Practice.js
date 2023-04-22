import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useFormik } from 'formik';


export default function Practice() {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
        }, 
        onSubmit: values => {
            console.log(values)
        },
    })
    return (
        <div className='container'>
            <Alert variant="success"><h1>Log Email ID</h1></Alert>
            <form onSubmit={formik.handleSubmit}>
                <Form.Label className='label'>Full Name:</Form.Label>
                <Form.Control type="text" id="fullName" name="fullName" onChange={formik.handleChange} value={formik.values.fullName} placeholder="Enter Name" />
                <Form.Label className='label'>Email address:</Form.Label>
                <Form.Control type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Enter email" />
                <Button variant="primary" type="submit">Log Email</Button>
            </form>
        </div>
    )
}
