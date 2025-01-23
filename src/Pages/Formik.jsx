import { useFormik } from "formik"
import { useState } from "react"
import toast from "react-hot-toast"

// Form Management Library => Formik

const FormikPage = () => {

    const formikObj = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate: (values) => {
            const error = {}
            if(values.username == "") {
                error.username = "Username is required"
            }
            if(values.password == "") {
                error.password = "Password is required"
            }
            return error
        }
    })

    return <div>
        <h1>Formik</h1>
        <form onSubmit={formikObj.handleSubmit}>
            {/* controlled input */}
            <input type="text" onChange={formikObj.handleChange} value={formikObj.values.username} name="username" placeholder="Enter Username" />
            <span>{formikObj.errors.username}</span>
            <input type="password" onChange={formikObj.handleChange} value={formikObj.values.password} name="password" placeholder="Enter Password" />
            <span>{formikObj.errors.password}</span>
            <button type="submit">Login</button>
        </form>
    </div>
}

export default FormikPage