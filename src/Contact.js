const Contact = () => {
    return ( 
          <div className="form" id="contact">
        <h1>Contact Us</h1>
            
            <div className="inputs">
            <input type="text" placeholder="Enter name" className="inputs1"/>
            </div>
            <div className="inputs">
            <input type="text" placeholder="Enter email" className="inputs1" />
            </div>
            <div className="inputs">
            <textarea placeholder="Message..." className="inputs2"></textarea><br />
            </div>
            <div className="inputs">
            <button onClick = {() => window.location.assign('/')} className="submit" >Submit</button>
            </div>
        
    </div>
     );
}
 
export default Contact ;