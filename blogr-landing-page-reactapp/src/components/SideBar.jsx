import React from 'react';
import '../styles/SideBar.css'

export default function SideBar(){
    return(
        <div className="styleNavBar">
            <h1>Toca da Coruja Podcast</h1>
            
            <ul>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Episódios</a></li>
                <li><a href="#">Cadeira do Diabo</a></li>
                <li><a href="#">Contanto</a></li>
            </ul>
            
        </div>
           
    )
}