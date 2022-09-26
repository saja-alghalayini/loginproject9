import React from 'react';

function Footer(){
    return(
        <> {/* Footer Start */}
        <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
          <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Get In Touch</h4>
              <p>
                <i className="fa fa-map-marker-alt mr-2" />
                123 Street, New York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2" />
                +012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope mr-2" />
                info@example.com
              </p>
              <div className="d-flex justify-content-start mt-4">
                <a
                  className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: 38, height: 38 }}
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: 38, height: 38 }}
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: 38, height: 38 }}
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: 38, height: 38 }}
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Quick Links</h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Home
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  About Us
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Our Services
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Our Projects
                </a>
                <a className="text-white" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Popular Links</h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Home
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  About Us
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Our Services
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Our Projects
                </a>
                <a className="text-white" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Newsletter</h4>
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Name"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Your Email"
                    required="required"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-lg btn-primary btn-block border-0"
                    type="submit"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="container border-top border-secondary pt-5">
            <p className="m-0 text-center text-white">
              ©{" "}
              <a className="text-white font-weight-bold" href="#">
                Your Site Name
              </a>
              . All Rights Reserved. Designed by
              <a className="text-white font-weight-bold" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </p>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
        {/* JavaScript Libraries */}
        {/* Contact Javascript File */}
        {/* Template Javascript */}
      </>
    )
}
export default Footer;