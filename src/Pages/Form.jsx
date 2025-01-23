import { useState } from "react"
import toast from "react-hot-toast"

// Form Management Library => Formik

const FormPage = () => {

    const [formData, setFormData] = useState({ username: "", password: "" })
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.username == "") {
            return toast.error("Username is required")
        }
        if(formData.password == "") {
            return toast.error("Password is required")
        }
        return toast.success("Form submitted successfully")
    }

    return <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            {/* controlled input */}
            <input type="text" onChange={handleChange} value={formData.username} name="username" placeholder="Enter Username" />
            <input type="password" onChange={handleChange} name="password" value={formData.password} placeholder="Enter Password" />
            <button type="submit">Login</button>
        </form>
    </div>
}

export default FormPage