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
        setFormInput({ notif: '' })
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
        <div className="flex items-center justify-center h-full w-full bg-blue-400">

            <form className="flex flex-col space-y-3 " onSubmit={onSubmitHandler}>
                <label for="email"></label>
                <input value={formInput.email} id="email" name="email" onChange={onChangeHandler} />
                <label for="notif"></label>
                <input value={formInput.notif} id="notif" name="notif" onChange={onChangeHandler} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Body