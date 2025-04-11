import React from 'react'
import './Contact.css'
import msg_inc from '../../assets/msg_inc.png'
import phone_inc from '../../assets/phone_inc.png'
import locat_inc from '../../assets/locat_inc.png'
import gmial_inc from '../../assets/gmial_inc.png'

const contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "61f7be34-2ed8-4756-9922-edc1b06c00bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Eamil Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_inc} alt="" /></h3>
            <p>We are here to help you! For any question, consultation, or service you need, do not hesitate to contact us. The staff of Eagle Eye Investigation is always ready to offer you professional and personalized support in the fields of security, private investigations and forensic analysis. Contact us by phone, email or visit our office to get to know better the services we offer. Your trust and safety are our priority!</p>

            <ul>
                <li><img src={gmial_inc} alt=""/>eagleeyeinvestigation@gmail.com</li>
                <li><img src={phone_inc} alt="" />+355 688316588</li>
                <li><img src={locat_inc} alt="" />Rr.Muhamet Gjollesha, Tirane <br /> Rr.Ramiz Aranitasi, Fier</li>
            </ul>
        </div>

        <div className="contact-col">
              <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name="message" rows="10" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit</button>
              </form>
              <span>{result}</span>
        </div>
      
    </div>
  )
}

export default contact
