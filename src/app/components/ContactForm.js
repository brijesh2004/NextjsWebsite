"use client";
import styles from '@/app/contact/contact.module.css';
import { Mulish } from "next/font/google";
import { useState } from 'react';

const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})
const ContactForm = () => {
    const [status , setStatus] = useState("");
    const [user , setUser] = useState({
        username:"",
        email:"",
        phone:"",
        message:""
    });

    const handleChange = (e) =>{
       let name = e.target.name;
       let value = e.target.value;
       setUser((prevUser)=>({
        ...prevUser, [name]:value
       }))
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
       try{
        const response = await fetch('/api/contact',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        if(response.status===200){
            setUser({
                username:'',
                email:'',
                phone:'',
                message:''
            })
            setStatus('success');
        }
        else{
            setStatus('error');
        }
       }catch(e){
         console.log(e)
       }
    }
    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                Enter Your Name
                    <input type="text" name="username" id="username" 
                    placeholder='Enter your Name' className={mulish.className}
                    value={user.username}
                    required
                    onChange={handleChange} />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                Enter Your email
                    <input type="email" name="email" id="email"
                     placeholder='Enter your email' className={mulish.className} 
                     value={user.email}
                     required
                     onChange={handleChange}
                     />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                Enter Your phone
                    <input type="number" name="phone" id="phone" 
                    placeholder='Enter your phone' className={mulish.className}
                    value={user.phone}
                    required
                    onChange={handleChange} />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                Message
                    <textarea type="text" name="message" id="message" 
                    rows={5} placeholder='Enter your message' className={mulish.className}
                    value={user.message}
                    required
                    onChange={handleChange} />
                </label>
            </div>
         <div>
         {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
            <button type='submit' className={mulish.className}>Send Message</button>
         </div>
        </form>
    )
}

export default ContactForm
