import React from "react";

const Form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name
            <input
                placeholder="Enter Name"
                value={props.values.name}
                onChange={handleChange}
                name="name"
            />
            </label>
            <label>Email
            <input
                placeholder="Enter Email"
                value={props.values.email}
                onChange={handleChange}
                name="email"
            />
            </label>
            <label>Role
            <input
                placeholder="Enter Role"
                value={props.values.role}
                onChange={handleChange}
                name="role"
            />
            </label>
            <input type="submit" value="Add Member" />
        </form>

    )
}

export default Form;
