import React from 'react';
//import { Component } from 'react-router-dom';

class Login extends React.Component {
    render() {
        const {titleForm, placeholderForm} = this.props;
        return (
            <div className="container" style={containerStyle}>
                <from>
                    <div className="form-group">
                        <label for="titleForm">{titleForm}</label>
                        <input className="form-control" placeholder={placeholderForm}></input>
                        <small className="form-text text-muted">Este paso es completamente nesario para la autentificaion de la cuenta</small>
                        <button className="btn btn-primary" style={buttonStyle}>Siguiente</button>
                    </div>
                </from>
            </div>
        );
    };
}

const buttonStyle = {
    float: 'right'
};
const containerStyle = {
    borderStyle: 'solid',
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 5
};

export default Login;
