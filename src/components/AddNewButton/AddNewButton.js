import React from 'react';
import { Link } from "react-router-dom";

function AddNewButton() {
    return <button className='add-new-button' ><Link to="/add">Dodaj nowe ogłoszenie</Link></button>
}

export default AddNewButton;