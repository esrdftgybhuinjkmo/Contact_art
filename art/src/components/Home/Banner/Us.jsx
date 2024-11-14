import './Us.css'
import photo from '../../../img/Home/a.jpg'
import photop from '../../../img/Home/e.jpg'
import photot from '../../../img/Home/f.jpg'
export const Us = () => {
    return (
        <div className='about'>
            <p id='us'>What the People Thinks About Us</p>
            <div className='natash'>
            <div className='con'>
                <div className='in'>
                    <img  className='photo'src={photo} alt="" />
                    <p className='name'>Nattasha Mith</p>
                    <p className='adress'>Sydney, USA</p>
                </div>
                <p className='lor'>Lorem Ipsum is simply dummy  text of the typesetting industry.  Ipsum has been.</p>
            </div>
           </div>
           <div className='natash1'>
            <div className='con'>
                <div className='in'>
                    <img className='photo' src={photop} alt="" />
                    <p className='name'>Nattasha Mith</p>
                    <p className='adress'>Sydney, USA</p>
                </div>
                <p className='lor'>Lorem Ipsum is simply dummy  text of the typesetting industry.  Ipsum has been.</p>
            </div>
           </div>
           <div className='natash2'>
            <div className='con'>   
                <div className='in'>
                    <img className='photo' src={photot} alt="" />
                    <p className='name'>Nattasha Mith</p>
                    <p className='adress'>Sydney, USA</p>
                </div>
                <p className='lor'>Lorem Ipsum is simply dummy  text of the typesetting industry.  Ipsum has been.</p>
            </div>
           </div>
        </div>
        
    );
}

