import React, { useState } from 'react';
import arrow from '../assets/arrow_back_ios-24px 2.svg'
import '../sass/Collapse.scss'

function Collapse({title,texte}) {
    const [isOpen,setIsOpen]=useState(true);
    return isOpen ? (
        <div className="collapse backColorOff">
        <div className="collapseBanner">
            <h3>{title}</h3>
            <img src={arrow} alt="flèche" onClick={()=> setIsOpen(false)} />
        </div>
    </div> 
    ):(
    <div className="collapse backColorOn">
            <div className="collapseBanner">
                <h3>{title}</h3>
                <img src={arrow} alt="flèche" onClick={()=> setIsOpen(true)} className='rotate' />
            </div>
            <div className="collapseTexte">
                {texte}
            </div>
        </div>
    )
}
export default Collapse;