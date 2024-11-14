import './News.css'
import photoNews from '../../../img/Home/News/newse.png'
import Newse from '../../../img/Home/News/new.png'
import oNews from '../../../img/Home/News/news.png'


export const News = () => {
    return (
        <div className='news'>
            <div>
                <p className='arc'>Articles & News</p>
                <p className='arctext'>It is a long established fact that a reader will be distracted by the of readable content <br />            of a page when lookings at its layouts the points of using.</p>

            </div>
            <div className='newgori'>
                <div>
                    <div>
                        <img className='newimage1' src={photoNews} alt="" />
                        <p className='arcp'>Let’s Get Solution For<br /> Building Construction<br /> Work</p>
                        <p className='arcdata'>26 December,2022 </p>
                        <button className='arcbtn'>🠖</button>
                    </div>
                </div>
                <div>
                    <div className='no'>
                    <img className='newimage2' src={Newse} alt="" />
                    <p className='arcp1'>Let’s Get Solution For<br /> Building Construction<br /> Work</p>                        
                    <p className='arcdata1'>26 December,2022 </p>
                    <button className='arcbtn1'>🠖</button>

                    </div>
                </div>
                <div>
                <img className='newimage3' src={oNews} alt="" />
                <p className='arcp2'>Let’s Get Solution For <br /> Building Construction<br /> Work</p>                   <div>
                <p className='arcdata2'>26 December,2022 </p>
                <button className='arcbtn'>🠖</button>
                
                    </div>
                </div>


            </div>
        </div>
    );
}

