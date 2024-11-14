import './Brands.css'

import React from './../../../img/Home/01.jpg';
import Reactt from './../../../img/Home/02.jpg';
import Reactr from './../../../img/Home/03.jpg';
import Reactei from './../../../img/Home/04.jpg';
import Reacteu from './../../../img/Home/05.jpg';





export const Brands = () => {
    return (
        <div>
            <div className='posi'>
            <img  className='a' src={React} alt="" />
            <img className='b'src={Reactt} alt="" />
            <img className='c'src={Reactr} alt="" />
            <img className='d'src={Reactei} alt="" />
            <img className='e'src={Reacteu} alt="" />
            </div>
        </div>
    );
}

