import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React  from "react";
import { useStore } from "../../../app/stores/Store";

export default observer(function LoginForm() {
    const {userStore} = useStore();
    return (
        <Formik
            initialValues={{email: '', password: '', error: null}}
            onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => 
                setErrors({error: 'Invalid email or password'}))}
        >
            {({handleSubmit, isSubmitting, errors, values, handleChange}) => (
                <Form onSubmit={handleSubmit} autoComplete='off'>
                    <h2 color='teal' >Login to RideRegistration</h2>
                    <input type='email' name='email' value={values.email} onChange={handleChange} placeholder='Email' />
                    <input type='password' value={values.password} name='password' onChange={handleChange} placeholder='Password'/>
                    <ErrorMessage  
                        name='error' render={() => 
                        <label style={{marginBottom: 10}} color='red' >{errors.error}</label>}
                    />
                    {/* <Button loading={isSubmitting} positive content='Login' type='submit' fluid /> */}
                    <button type="submit">Login</button>
                </Form>
            )}
        </Formik>
    )
})
