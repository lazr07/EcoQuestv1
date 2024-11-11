import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

const AuthPage = () => {
    const navigate = useNavigate();

    // State variables for toggling between login and signup, and for input values
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!email || !password) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        }

        // Mock authentication (You can replace this with actual API call)
        if (isLogin) {
            // Mock login check
            if (email === 'user@example.com' && password === 'password123') {
                alert('Login successful!');
                navigate('/challenges'); // Navigate to Challenges Page on successful login
            } else {
                setErrorMessage('Invalid email or password');
            }
        } else {
            // Mock signup process
            alert('Signup successful! You can now log in.');
            setIsLogin(true); // Switch to login view after successful signup
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {!isLogin && (
                    <div className="input-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </button>
        </div>
    );
};

export default AuthPage;
