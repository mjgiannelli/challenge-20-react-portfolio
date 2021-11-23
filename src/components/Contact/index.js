import { useState } from 'react';
import { send } from 'emailjs-com';

import { validateEmail } from '../../utils/helpers';
import './index.css';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const [response, setResponse] = useState(null);

    const handleChange = e => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        const from_name = formState.name;
        const message = formState.message;
        const reply_to = formState.email;

        const toSend = { from_name, message, reply_to };

        // reset input fields after submit
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );

        // reset textarea fields after submit
        Array.from(document.querySelectorAll('textarea')).forEach
            (
                input => (input.value = "")
            );

        send(
            'service_106gwhj',
            'template_q48h3sn',
            toSend,
            'user_NVXWfdcOsviqZFCpy1AWZ'
        )
            .then((response) => {

                setResponse(response)

                setTimeout(() => {
                    setResponse(null)
                }, 2000)
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <section>
            <h1 className='title'>Contact me below or @ <a id='email-link' href='mailto: giannellimj@gmail.com'>giannellimj@gmail.com</a></h1>
            <div id='contact-form-div' className='box'>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className='row form'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div className='row form'>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div className='row form'>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <div id='form-btn-div' className='row'>
                        <button id='form-btn' type="submit">Submit</button>
                    </div>
                    {response && (
                        <div>
                            <p className='response'>
                                Message Successfully Sent!
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contact;