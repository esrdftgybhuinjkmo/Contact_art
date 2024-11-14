import './Banner.css';
import react from "./../../../img/Home/d.png"


export const Banner = () => {
    return (
        <div>
            <img  className= 'banner'src={react} alt="" />
            <div >
             <h1 id='uniq'>Let Your Home <br/> Be Unique</h1>
             <h5 id='be'>There are many variations of the passages of lorem Ipsum <br/> fromavailable,variations of the passages.</h5>
            </div>
            <div>
                <button className='btn-banner'>Get Started</button>
            </div>

        </div>
    );
}

