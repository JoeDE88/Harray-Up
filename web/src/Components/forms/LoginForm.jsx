import { useState } from "react"

export default function() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
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
        formDataObject.append('password', formData.password)        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={formData.username} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="passwords">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>
            </div>
        </form>
    )
}