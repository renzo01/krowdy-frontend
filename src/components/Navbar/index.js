import React from 'react';

const Navbar = () => {
    return(
        <div style={containerStyle}>
            <div style = {containerStyle1}>
                <h1 style={titleStyle}>Pagina de prueba</h1>
            </div>
        </div>
    );
};

const containerStyle = {
    height: '80%',
    backgroundColor: 'gray',
    display: 'flex',
    justifyContent: 'center',
    
};
const containerStyle1 = {
    width: '30%',
    backgroundColor: 'white',
    paddingLeft: '4%',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black'
} 
const titleStyle = {
    color: 'green',
}

export default Navbar;