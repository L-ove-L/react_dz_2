import React, { useState } from 'react'
export const PasswordInput = () => {
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        if (newPassword.length < 8) {
            setMessage('Пароль надто короткий!')
        } else {
            setMessage('Пароль підходить')
        }
    }
    return (
        <div>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Введіть пароль"
            />
            <p>{message}</p>
        </div>
    )
}