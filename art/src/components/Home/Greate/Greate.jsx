import React from './../../../img/Home/pot.jpg';
import './Greate.css'


export const Greate = () => {
    return (
        <div>

            <p id='greate-text'>We Create The Art <br/> Of Stylish Living<br/> Stylishly</p>
            <p id='greate-p'>It is a long established fact that a reader will be<br/> distracted by the of readable content of a page <br/>when lookings at its layouts the points of using <br/>that it has a more-or-less normal.</p>
            <img className='img-greate' src={React} alt="" />
            <img className='phone' src="data:image/png;base64,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" alt="" />
            <div id='call'>
            <p>123456789</p>
            <p>Call Us Anytime</p>
            <button className='greate-btn'>Get Free Estimate</button>
            </div>
            
        </div>
    );
}


