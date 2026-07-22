import { Form } from "react-router-dom"

export const contactData  = async({request}) => {
    try{
       const res = await request.formData();
       console.log(res);
       
       const data = Object.fromEntries(res);
       console.log(data);
       
       return data ;
       

    }
    catch(error)
    {
        console.log(error)
    }
}

export const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-title">
                <h2>Contact Us</h2>
                <p>Get in touch with us . We are always here to help you.</p>
            </div>

            <div className="contact-container">
                    <Form method="POST" action="/contact">
                        <div className="form-div">
                            <div className="username">
                                <label htmlFor="username">Full Name</label>
                                
                                <input type="text" name="username" 
                                id="username" required autoComplete="off" 
                                placeholder="Enter Full Name" />
                            </div>
                         
                            
                            <div className="email">
                                <label htmlFor="email">Email Address</label>
                              
                                <input type="email" name="email" id="email" autoComplete="off" 
                                  placeholder="abc@mail.com" required/>
                            </div>
                          
                        

                        <div className="text-area">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10"
                            placeholder="We are always here to help you"></textarea>
                        </div>
                    </div>
                        <button className="btn form-btn">Send Message</button>
                    </Form>
                </div>
        </section>
    )
}