import { useFormik } from "formik"
import { useState } from "react"
import toast from "react-hot-toast"
import { object, ref, string } from "yup"

// Form Management Library => Formik

const FormikPage = () => {

    const formikObj = useFormik({ // doc: https://formik.org/
        initialValues: {
            username: "",
            password: "",
            confirmPassword: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: object().shape({
            username: string()
                .required("Username is required")
                .min(4, "Username must be at least 4 characters long")
                .max(12, "Username must be at most 12 characters long"),
            password: string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters long")
                .max(16, "Password must be at most 16 characters long")
                .matches(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/, {message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"}),
            confirmPassword: string()
                .required("Confirm password is required")
                .min(8, "Password must be at least 8 characters long")
                .max(16, "Password must be at most 16 characters long")
                .oneOf([ref("password")], "Passwords do not match")
        })
    })

    return <div>
        <h1>Formik</h1>
        <form onSubmit={formikObj.handleSubmit}>
            {/* controlled input */}
            <input type="text" onChange={formikObj.handleChange} value={formikObj.values.username} name="username" placeholder="Enter Username" />
            <span>{formikObj.errors.username}</span>
            <input type="password" onChange={formikObj.handleChange} value={formikObj.values.password} name="password" placeholder="Enter Password" />
            <span>{formikObj.errors.password}</span>
            <input type="password" onChange={formikObj.handleChange} value={formikObj.values.confirmPassword} name="confirmPassword" placeholder="Re-Enter Password" />
            <span>{formikObj.errors.confirmPassword}</span>
            <button type="submit">Login</button>
        </form>
    </div>
}

export default FormikPage