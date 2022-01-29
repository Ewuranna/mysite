import React from "react";
import './message.css';

class Message extends React.Component{
    render(){
        return(
            <p className="themessage"> Hey friend! <br/> Thank you for doing this! <br/> 
        You can do any of these three things to celebrate with me today:<br/> 
       <br/> <b> Read</b> any of <a href="https://vocal.media/authors/ewuranna-smith-quayson" >my articles</a> and share with 10 people.<br/>
       <br/> <b>Send cash</b> (because who doesn't like cash right?). 
        Options: <a href=''> Mobile Money</a>, <a href=''> Debit Card</a>  or  <a href="https://www.paypal.com/paypalme/buzzedison"> Paypal</a>
        <br/><br/>
        <b>Buy </b> from any of these businesses:  <a href='https://www.justfreshonline.com/juices'> Just Fresh</a> (juices) or <a href='https://www.pricelezz.co'>Pricelezz</a> (A website or ecommerce shop at a really good deal)
         <br/><br/> <br/>
         Thanks again for doing this! <br/><br/>
         Love,<br/>
         Ewuranna.
         </p>
        
        )
    }
}

export default Message