import { useFormik } from 'formik';
import React, { useState } from 'react';
import contactBanner from "../../assets/contact-banner.png"
import contactLeft from "../../assets/contact-left.png"
import { postContact } from '../../services/contacts';
import "./styles.css"

const ContactForm: React.FC = () => {
    
    // const [name, setName] = useState<string>('')
    // const [email, setEmail] = useState<string>('')
    // const [message, setMessage] = useState<string>('')

    // const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(e.target.value)
    // }
    // const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.target.value)
    // }
    // const handleSetMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setMessage(e.target.value)
    // }

    // const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     await postContact({
    //         name,
    //         email,
    //         message
    //     })
    //     alert(JSON.stringify({name, email, message}, null, 2))
    // }

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            message: ''
        }, onSubmit: async values =>{
            await postContact({
                name: values.name,
                email: values.email,
                message: values.message
            })
            alert('Contato enviado!') 

        }

    })


    return(
    <main className="contact-container">
        <div className="contact-banner">
            <img src={contactBanner} alt="Contato" />
            <h1>{"Manda um alô :)"}</h1>
        </div>
        <div className="form-container">
            <img src={contactLeft} alt="Contato" />
            <form onSubmit={formik.handleSubmit}>
                <h2>Contato</h2>
                <input 
                    type="text" 
                    name='name'
                    id='name'
                    placeholder='Coloque aqui o seu nome'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <input 
                    type="email" 
                    name='email'
                    id='email'
                    placeholder='Coloque aqui o seu e-mail'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <textarea
                    name='message'
                    id='message'
                    placeholder='Coloque aqui a sua mensagem'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                />
                <button type='submit'>enviar</button>
            </form>
        </div>
    </main>
    )
}

export default ContactForm;