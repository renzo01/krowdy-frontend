import React from 'react';
//import { InputText } from 'react-router-dom';

const Login = () => {
    return(
        <div className="container" style={containerStyle}>
            <from>
                <div className="form-group">
                    <label for="titleForm">Ingrese su numero de telefono:</label>
                    <input className="form-control" placeholder="solo números de perú"></input>
                    <small className="form-text text-muted">Este paso es completamente nesario para la autentificaion de la cuenta</small>
                    <button className="btn btn-primary" style={buttonStyle}>Siguiente</button>                  
                </div>
            </from>
        </div>
    );
};

const buttonStyle ={
    float: 'right'
};
const containerStyle = {
    borderStyle: 'solid',
    borderWidth: 2,
    marginTop: 20
};

export default Login;
