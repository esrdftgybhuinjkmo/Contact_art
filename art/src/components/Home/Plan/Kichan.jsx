import './Kichan.css'
import kicha from './../../../img/Home/project/i.png';
import jph from './../../../img/Home/project/iop.jpg';
import po from '../../../img/Home/project/po.jpg';
import uio from '../../../img/Home/project/uio.jpg';


export const Kichan = () => {
    return (
        <div>
            <div className='kichan'>
                <p id='project'> Follow Our Projects</p>
                <p id='long'>It is a long established fact that a reader will be distracted by the of readable <br /> content of page  lookings at its layouts  points.</p>
                <div className='two'>
                    <div className='first'>
                        <img className='kicha' src={kicha} alt="" />
                        <p className='text mo'>Modern Kitchan</p>
                        <p className='chen'>Decor / Artchitecture</p>
                        <button className='arrow'>➤</button>
                        
                    </div>
                    <div className='second'>
                        <img className='room' src={jph} alt="" />
                        <p className='text de'>Modern Kitchan</p>
                        <p className='cheno'>Decor / Artchitecture</p>
                        <button className='arrowe'>➤</button>

                    </div>
                </div>
                <div className='four'>
                    <div className='third'>
                        <img className='table' src={uio} alt="" />
                        <p className='text rn'>Modern Kitchan</p>
                        <p className='chen'>Decor / Artchitecture</p>
                        <button className='arrow'>➤</button>

                    </div>
                    <div className='fours'>
                        <img className='window' src={po} alt="" />
                        <p className='text ki'>Modern Kitchan</p>
                        <p className='cheno'>Decor / Artchitecture</p>
                        <button className='arrowe'>➤</button>

                    </div>
                </div>
            
            
            </div>
        </div>
    );
}

