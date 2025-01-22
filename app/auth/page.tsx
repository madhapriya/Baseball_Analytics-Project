// import styles from './Login.module.css';

// export default function LoginPage() {
//     return (
//         <div className={styles.loginContainer}>
//             <h2>Login</h2>
//             <form action="/api/login" method="POST">
//                 <input type="text" name="username" placeholder="Username" className={styles.inputField} required />
//                 <input type="password" name="password" placeholder="Password" className={styles.inputField} required />
//                 <button type="submit" className={styles.loginButton}>Login</button>
//             </form>
//         </div>
//     );
// }
"use client";
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect: false,
            username,
            password
        });

        if (res?.error) {
            setError('Invalid username or password');
        } else {
            setError('');
            // Redirect to home page or dashboard
            window.location.href = '/';
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    required
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

