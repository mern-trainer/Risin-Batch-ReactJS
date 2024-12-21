import React, { useState } from 'react'

const PasswordGenerator = () => {

    const [generatedPassword, setGeneratedPassword] = useState("")
    const [passwordHistory, setPasswordHistory] = useState([])

    const handleGeneratePassword = () => {
        const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
        const charArray = characters.split("")
        let i = 0
        let password = ""
        while (i < 16) {
            const randomIndex = Math.floor(Math.random() * charArray.length)
            const randomChar = charArray[randomIndex]
            password = password + randomChar
            i++
        }
        setGeneratedPassword(password)
        setPasswordHistory([...passwordHistory, password])
    }

    return <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <div>
            <div>{generatedPassword}</div>
            <button className='btn btn-success' onClick={handleGeneratePassword}>Generate Random Password</button>
        </div>
        <div className='mt-5'>
            <h3>History</h3>
            {
                passwordHistory.map(password => {
                    return <div key={password}>{password}</div>
                })
            }
        </div>
    </div>
}

export default PasswordGenerator
