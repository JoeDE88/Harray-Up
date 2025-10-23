import { useState } from "react"

export default function() {

    const [formData, setFormData] = useState({
        username: '',
        email:'',
        firstname:'',
        lastname:'',
        password:''
    })

    function handleChange(e){
        const {name, value } = e.target;
        setFormData({
            ...formData, [name]:value
        })
    }

    function handleSubmit(e){
        const formDataObject = new FormData()
        formDataObject.append('username', formData.username)
        formDataObject.append('email', formData.email)
        formDataObject.append('firstname', formData.firstname)
        formDataObject.append('lastname', formData.lastname)
        formDataObject.append('password', formData.password)
    }

    const handleRegister = (e) => {
        if (e.keyCode === 13) {
            if (!isPasswordInvalid && !isEmailInvalid && !isUsernameInvalid) {
                register(signInEmail, signInUsername, signInPassword)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={formData.username} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" id="lastname" value={formData.lastname} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="passwords">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>
            </div>
        </form>
    )
}