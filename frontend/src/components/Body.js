import { useState } from "react";
// import axios from "axios";

const Body = () => {
    const [formInput, setFormInput] = useState({ notif: '', email: '' });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/v1/sending-email-digest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formInput),

        })
        console.log(response.data);
        setFormInput({ notif: '', email: '' })
    }
    const onChangeHandler = e => {
        const value = e.target.name === 'email' ? e.target.value.trim() : e.target.value;

        setFormInput((prev) => (
            {
                ...prev,
                [e.target.name]: value
            }
        ))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <label for="email"></label>
            <input value={formInput.email} id="email" name="email" onChange={onChangeHandler} />
            <label for="notif"></label>
            <input value={formInput.notif} id="notif" name="notif" onChange={onChangeHandler} />
            <button type="submit">Send</button>
        </form>
    )
}

export default Body