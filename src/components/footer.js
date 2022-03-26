import React from "react";
import "./footer.scss"


//import '@fortawesome/fontawesome-free/css/all.min.css';
export default function MyFooter(){
    return(
        <footer id="footer" className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h5><i className="fa fa-road"></i> VIETBANDO</h5>
                    <div className="row">
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li><a href="">Product</a></li>
                                <li><a href="">Benefits</a></li>
                                <li><a href="">Partners</a></li>
                                <li><a href="">Team</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li><a href="">Documentation</a></li>
                                <li><a href="">Support</a></li>
                                <li><a href="">Legal Terms</a></li>
                                <li><a href="">About</a></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="nav">
                        <li className="nav-item"><a href="" className="nav-link"><i className="fa-solid fa-location-dot"></i></a></li>
                        <li className="nav-item"><a href="" className="nav-link"><i className="fa-solid fa-phone"></i></a></li>
                        <li className="nav-item"><a href="" className="nav-link"><i className="fa-brands fa-facebook"></i></a></li>
                        <li className="nav-item"><a href="" className="nav-link"><i className="fa-solid fa-envelope"></i></a></li>
                        
                    </ul>
                    <br></br>
                </div>
                <div className="col-md-2">
                    <h5 className="text-md-right">Contact Us</h5>
                    <br></br>
                </div>
                <div className="col-md-5">
                    <form>
                        <fieldset className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"></input>
                        </fieldset>
                        <fieldset className="form-group">
                            <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                        </fieldset>
                        <fieldset className="form-group text-xs-right">
                            {/* <button type="button" className="btn btn-secondary-outline btn-lg">Send</button> */}
                            <button>
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </footer>
  
    )
}