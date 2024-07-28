import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
<<<<<<< HEAD
  return (
    <div>
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <h3>Genisup</h3>
            <p>End to end partnership| Designing Tomorrow, Together Today</p>
            <p>
              When you visit or interact with our sites, services or tools, we
              or our authorised service providers may use cookies for storing
              information to help provide you with a better, faster and safer
              experience and for marketing purposes.
            </p>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <p>
              <Link to="/aboutus">About Us</Link>
            </p>
            <p>
              <Link to="/careers">Careers</Link>
            </p>
            <p>
              <Link to="/blogs">Our Blogs</Link>
            </p>
            <p>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </p>
            <p>
              <Link to="/terms">Terms & Conditions</Link>
            </p>
          </div>
          <div className="footer__col">
            <h4>Industries</h4>
            <p>
              <Link to="/">Semiconductor</Link>
            </p>
            <p>
              <Link to="/">Automobile</Link>
            </p>
            <p>
              <Link to="/">Aviation</Link>
            </p>
            <p>
              <Link to="/">Customer Goods</Link>
            </p>
            <p>
              <Link to="/">Manufacturing</Link>
            </p>
          </div>
          <div className="footer__col">
            <h4>Contact Us</h4>
            <p>
              <i className="fas fa-map-pin"></i> #236, TNHB Phase VII, Brindavan
              Hosur, 635109, Tamil Nadu, IN
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:info@genisup.com">info@genisup.com</a>
            </p>
            <p>
              <i className="fas fa-phone"></i>{" "}
              <a href="tel:+914344350044">043443 50044</a>
            </p>
          </div>
        </div>
        <div className="footer__bar">
          <div className="footer__bar__content">
            <p>Copyright © 2024 Genisup Pvt Ltd. All rights reserved.</p>
            <div className="footer__socials">
              <span>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
=======
    return (
        <footer className="bg-dark text-white  pb-20 footerNext" style={{ paddingTop: '50px' }}>
            <div className="container">
                <div className="row bg_black gy-50 pb-20">
                    <div className="footerupper">
                        <div class="newsletter">
                            <div>
                                <div class="newspara mb-15">
                                    <h4>Signup our newsletter to get update information, news, insight or promotions.</h4>
                                </div>
                            </div>
                            <div class="emailarea">
                                <div class="emailbox">
                                    <input type="email" placeholder="Email" class="email" />
                                </div>
                                <div class="signupbtn">
                                    <button class="singnupbtn">Sign Up</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 ">
                            {/* <div className="jc-r"> */}
                            <div className='footerlogo'>
                                <Link className="d-block mb-30" to="/">
                                    <img width="200px" src="Genisup logo.svg" /></Link>

                                <ul className="d_flex nav text-white align-items-center mb-20 nav-gap-md nav-no-opacity">
                                    <li className="nav-item"><a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="8" height="17" fill="none">
                                        <path fill="currentColor"
                                            d="M6.318 2.8h1.391V.202A16.842 16.842 0 0 0 5.683.088c-2.006 0-3.38 1.353-3.38 3.837v2.287H.089v2.902h2.214v7.303h2.713V9.114H7.14l.338-2.902H5.016v-2c0-.839.21-1.413 1.302-1.413Z">
                                        </path>
                                    </svg></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="21" height="15" fill="none">
                                        <path fill="currentColor"
                                            d="M19.687 2.485A2.472 2.472 0 0 0 17.953.73C16.423.313 10.29.313 10.29.313s-6.133 0-7.662.416A2.473 2.473 0 0 0 .895 2.485c-.41 1.55-.41 4.782-.41 4.782s0 3.233.41 4.782c.226.855.89 1.5 1.734 1.729 1.53.415 7.662.415 7.662.415s6.132 0 7.662-.415a2.435 2.435 0 0 0 1.734-1.729c.41-1.549.41-4.782.41-4.782s0-3.232-.41-4.782ZM8.285 10.203v-5.87l5.126 2.934-5.126 2.936Z">
                                        </path>
                                    </svg></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="16" fill="none">
                                        <path fill="currentColor"
                                            d="M17.477 4.484c.012.165.012.329.012.493 0 5.014-3.817 10.792-10.792 10.792-2.149 0-4.145-.623-5.824-1.703.305.035.599.047.916.047a7.596 7.596 0 0 0 4.709-1.62 3.8 3.8 0 0 1-3.547-2.63c.235.034.47.058.717.058.34 0 .68-.047.998-.13A3.793 3.793 0 0 1 1.625 6.07v-.047a3.82 3.82 0 0 0 1.714.482 3.79 3.79 0 0 1-1.691-3.159c0-.704.188-1.35.517-1.914a10.781 10.781 0 0 0 7.82 3.97 4.282 4.282 0 0 1-.094-.87c0-2.09 1.691-3.793 3.793-3.793 1.092 0 2.079.458 2.771 1.198a7.466 7.466 0 0 0 2.408-.916c-.282.88-.881 1.62-1.668 2.09a7.604 7.604 0 0 0 2.184-.587 8.153 8.153 0 0 1-1.902 1.961Z">
                                        </path>
                                    </svg></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="17" height="17" fill="none">
                                        <path fill="currentColor"
                                            d="M8.788 4.097C6.47 4.097 4.6 5.95 4.6 8.25c0 2.298 1.87 4.153 4.188 4.153 2.318 0 4.188-1.855 4.188-4.153 0-2.3-1.87-4.153-4.188-4.153Zm0 6.853c-1.498 0-2.723-1.211-2.723-2.7 0-1.49 1.221-2.7 2.723-2.7 1.502 0 2.723 1.21 2.723 2.7 0 1.489-1.225 2.7-2.723 2.7Zm5.336-7.023a.97.97 0 0 1-.977.968.97.97 0 0 1-.976-.968c0-.535.437-.969.976-.969.54 0 .977.434.977.969Zm2.774.983c-.062-1.298-.36-2.447-1.32-3.394C14.624.569 13.465.272 12.156.207c-1.349-.076-5.39-.076-6.74 0C4.113.27 2.954.565 1.995 1.512 1.035 2.46.74 3.61.674 4.906c-.076 1.338-.076 5.346 0 6.683.063 1.298.361 2.447 1.32 3.394.959.947 2.114 1.244 3.423 1.309 1.348.076 5.39.076 6.739 0 1.308-.062 2.468-.358 3.422-1.309.956-.947 1.254-2.096 1.32-3.394.076-1.337.076-5.342 0-6.68Zm-1.742 8.114a2.745 2.745 0 0 1-1.553 1.54c-1.075.423-3.627.325-4.815.325-1.188 0-3.743.095-4.815-.325a2.746 2.746 0 0 1-1.552-1.54c-.427-1.066-.329-3.596-.329-4.774 0-1.179-.094-3.712.329-4.775a2.745 2.745 0 0 1 1.552-1.54C5.048 1.512 7.6 1.61 8.788 1.61c1.188 0 3.743-.094 4.815.325a2.745 2.745 0 0 1 1.553 1.54c.426 1.066.328 3.596.328 4.775 0 1.178.098 3.712-.328 4.774Z">
                                        </path>
                                    </svg></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="19" height="15" fill="none">
                                        <path fill="currentColor"
                                            d="M2.774 3.144a.682.682 0 0 0-.22-.571L.924.606V.313H5.99L9.91 8.905 13.354.313h4.832v.293l-1.395 1.338a.407.407 0 0 0-.155.39v9.832c-.025.148.036.3.155.39l1.363 1.337v.293h-6.857v-.293l1.413-1.37c.138-.137.138-.18.138-.39V4.188l-3.93 9.973h-.53l-4.57-9.973v6.683a.91.91 0 0 0 .254.767l1.836 2.226v.293H.703v-.29l1.836-2.23a.88.88 0 0 0 .235-.766V3.144Z">
                                        </path>
                                    </svg></a></li>
                                </ul>
                            </div>
                            {/* </div> */}
                            {/* <p className="font-size-13 text-muted m-0">Copyright © 2022 - Genisup India Pvt. Ltd.</p> */}

                        </div>
                    </div>
                </div>
                {/* <div className="col-2 d-none d-lg-block"></div> */}
                <div><hr style={{ width: '90%', margin: '20px auto', border: 0, borderTop: '1px solid #ccc' }} /></div>

                <div className="row bg_black gy-50 pb-20">
                    <div className="footerdown">
                        <div className="footer-row gy-50">
                            <div className="col-6 col-md-4 mr-150">
                                <h6 className="display-6 text-white mb-20">Industries</h6>
                                <ul className="nav flex-column text-white nav-opacity nav-gap-sm">
                                    <li className="nav-item"><a className="nav-link" href="#">Semiconductor</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Automobile</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Avation</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Consumer Goods</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Manufacturing</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-4 mr-150">
                                <h6 className="display-6 text-white mb-20">Company</h6>
                                <ul className="nav flex-column text-white nav-opacity nav-gap-sm">
                                    <li className="nav-item"><Link className="nav-link" to="/aboutus">About</Link></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Careers</a></li>
                                    <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Customers</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Hire us</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-4 mr-150">
                                <h6 className="display-6 text-white mb-20">Help and advice</h6>
                                <ul className="nav flex-column text-white nav-opacity nav-gap-sm">
                                    <li className="nav-item"><Link className="nav-link" to="/Contactus">Contact us</Link></li>
                                    <li className="nav-item"><a className="nav-link" href="#">FAQ</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Legal & Privacy</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-4 mr-150">
                                <h6 className="display-6 text-white mb-20">Insights</h6>
                                <ul className="nav flex-column text-white nav-opacity nav-gap-sm">
                                    <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Newsroom</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-4 mr-150">
                                <h6 className="display-6 text-white mb-20">Contact</h6>
                                <ul className="nav flex-column text-white nav-opacity nav-gap-sm">
                                    <li className="nav-item"><a className="nav-link" href="#"><strong>Genisup India Pvt. Ltd.</strong><br /> #236,TNHB Phase VII, Brindavan Hosur, 635109, Tamil Nadu, IN</a></li>
                                    <li className="nav-item"><a className="nav-link"
                                        href="mailto:info@genisup.com">info@genisup.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                

            </div>
            <div><hr style={{ width: '90%', margin: '20px auto', border: 0, borderTop: '1px solid #ccc' }} /></div>
            <div className="footerlast">
                <div className="copyright">
                    <p>Copyright © 2024 - Genisup India Pvt. Ltd.</p>
                </div>
                <div className="tou">
                    <p>Term of use | Privacy Policy | Cookie Policy</p>
                </div>
            </div>
            </div>
        </footer>
    );
>>>>>>> 41d87af634cebd1f2d48bb902c3b27c0d72f3bb5
}

export default Footer;
