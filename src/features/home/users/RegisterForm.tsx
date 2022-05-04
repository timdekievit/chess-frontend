import '../../../styles/RegisterForm.css'
import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../../app/stores/Store";

export default observer(function RegisterForm() {
    const { userStore } = useStore();
    return (
        <section id='RegisterForm'>
            <Formik
                initialValues={{ displayName: '', email: '', password: '', username: '', error: null }}
                onSubmit={(values, { setErrors }) => userStore.register(values).catch(error =>
                    setErrors({ error }))}
            >
                {({ handleSubmit, isSubmitting, errors, values, handleChange }) => (
                    <Form onSubmit={handleSubmit} autoComplete='off'>
                        <h2 color='teal' >Register</h2>
                        <input name='displayName' value={values.displayName} onChange={handleChange} placeholder='DisplayName' />
                        <input name='username' value={values.username} onChange={handleChange} placeholder='username' />
                        <input type='email' name='email' value={values.email} onChange={handleChange} placeholder='Email' />
                        <input type='password' value={values.password} name='password' onChange={handleChange} placeholder='Password' />
                        <ErrorMessage
                            name='error' render={() =>
                                <label style={{ marginBottom: 10 }} color='red' >{errors.error}</label>}
                        />
                        {/* <Button loading={isSubmitting} positive content='Login' type='submit' fluid /> */}
                        <button type="submit">Login</button>
                    </Form>
                )}
            </Formik>
        </section>
    )
})