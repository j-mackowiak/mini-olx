import React from 'react';
import { Link } from "react-router-dom";

function CategoryMenu() {
    return (
        <ul id='category-menu'>
            <li><Link to="/Motoryzacja" >Motoryzacja</Link></li>
            <li><Link to="/Dom" >Dom</Link></li>
            <li><Link to="/Praca" >Praca</Link></li>
            <li><Link to="/Elektronika"  >Elektronika</Link></li>
            <li><Link to="/Hobby" >Hobby</Link></li>
            <li><Link to="/Inne" >Inne</Link></li>
        </ul>
    )
}

export default CategoryMenu;