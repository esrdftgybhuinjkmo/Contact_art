// import Contact_adress from '../../../img/Contact/contact.png'
//  import Contact_Vector from '../../../img/Contact/Vector.png'
import './Contact_adress.css'

export const ContactAdress = () => {
    return (
        <div className='Contact_gori'>
            <div className='contact_text'>
                <div className='contact_array'>
                <p >We love meeting new people and helping <br /> them.</p>
                </div>
                <div className='Contact_block'>

                    <div className='contact_back'>
                        <div className='contact_phone'>
                            <div> <p>info@yourdomain.com</p></div>
                            <div><p>+1 (378) 400-1234</p></div>
                            <div><p>www.yourdomain.com</p></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='send_now'>
                        <div className='Contact_input'>
                            <div> <input type="text" placeholder='Name' /></div>
                            <div> <input type="text" placeholder='Phone' /></div>
                            <div> <input type="text" placeholder='Email' /></div>
                            <div> <input type="text" placeholder='Subject' /></div>
                            <div> <input type="text" placeholder='Hello Iam Intrested in..Hello Iam Intrested in..' /></div>

                        
                        </div>
                        <button>Send Now</button>
                    </div>
                </div>

            </div>

            {/* <div>     
            <img src={Contact_adress} alt="" />
            <img src={Contact_Vector} alt="" />
            </div> */}
        </div>
    );
}

 
