import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { register } from '../actions/authAction'

const RegisterScreen = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
        password2: "",
        username: "",
    })
    const { email, password, password2, username } = data
    const dispatch = useDispatch()
    const handleChange = (e) => {
       const dataInput =  e.target.value;
      setData({
          ...data,
          [e.target.name]: dataInput,
      })
    }
    const handleRegister = (e) => {
       e.preventDefault()
       if (email.trim() === "" || !email.trim().includes("@")) return
       if (password.trim().length < 6) { return
        } else {if (password.trim() !== password2.trim()) return}
       dispatch(register(email, password, username))
    }

    return (    
        <div className="container animate__animated animate__zoomIn">
          <h3>Register</h3>
          <hr />
          <div className="container">
          <div className="row">
            <form  onSubmit={handleRegister} className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                     value={email} 
                    onChange={handleChange}
                    id="icon_prefix"
                    className="materialize-textarea"
                    type='email'
                    name='email'
                  />
                  <label htmlFor="icon_prefix">Email</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">assignment_ind</i>
                  <input
                     value={username} 
                    onChange={handleChange}
                    id="icon_prefix2"
                    className="materialize-textarea"
                    type='text'
                    name='username'
                  />
                  <label htmlFor="icon_prefix2">Username</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">vpn_key</i>
                  <input
                     value={password} 
                    onChange={handleChange}
                    id="icon_prefix3"
                    className="materialize-textarea"
                    type='password'
                    name='password'
                  />
                  <label htmlFor="icon_prefix3">Password</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">vpn_key</i>
                  <input
                     value={password2} 
                    onChange={handleChange}
                    id="icon_prefix4"
                    className="materialize-textarea"
                    type='password'
                    name='password2'
                  />
                  <label htmlFor="icon_prefix4">Confirm Password</label>
                </div>
              </div>
              <button type="submit" className="btn" >Enviar</button>           
              <hr />
              <Link  to="login" >Login into account</Link> 
            </form>
            
          </div>
          </div>
        </div>
      );
}

export default RegisterScreen
