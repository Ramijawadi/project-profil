
import './contact.css'
import phone from '../../img/phone.png' ;
import email from '../../img/email.png' ;
import adress from '../../img/adress.png';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { ThemeContext } from '../../context';
   


const Contact = () => {
const formRef = useRef();
const [done , setDone]= useState(false);
const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


const handleSubmit = (e) => {
e.preventDefault();

emailjs.sendForm('service_0p1qp3k',
'template_p93iys2', 
formRef.current, 'user_oRISSqPAjDtxhWJtqv6iV')

.then((result) => {
    console.log(result.text);
    setDone(true)
}, 

 
(error) => {
    console.log(error.text);
});
}




    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
            <div className="c-left">
        <h1 className="c-title">Let's discuss your project</h1>
           <div className="c-info">
            <div className="c-info-item">
              <img src={phone} 
                alt=""
                className="c-icon" 
                />
              +216 51 276 993 
               </div>
               <div className="c-info-item">
              <img src={email} 
                alt=""
                className="c-icon" 
                />
              ramijawadi@gmail.com
               </div>

               <div className="c-info-item">
              <img src={adress} 
                alt=""
                className="c-icon" 
                />
               Skanes-MonastirVille 5000, Tunisia
               </div>



            </div>
           </div>
            <div className="c-right">

            <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>

< input style={{backgroundColor: darkMode && "#333"}} type="text"  placeholder="Name" name="user_name" />
< input style={{backgroundColor: darkMode && "#333"}} type="text"  placeholder="Subject" name="user_subject" />
< input style={{backgroundColor: darkMode && "#333"}} type="text"  placeholder="Email" name="user_email" />
<textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
<button>Send</button>
</form>
{done && alert("succeful send")}

 

 

  

            </div>
            </div>
        </div>
    )
}

export default Contact
