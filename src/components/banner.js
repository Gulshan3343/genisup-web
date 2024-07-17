import React from 'react';
import { Link } from 'react-router-dom';

function banner() {
    return (
        <div>
            <div class="banner">
                <div class="slider">
                    <img src="1.jpg" alt="img" id="slideImg" />
                </div>
                <div class="overlay">
                    <div class="content">
                        <h1>End to end Design, Innovation, Partnership
                            Designing Tomorrow, Together Today</h1>
                        <h3>Your Innovation Accelerator.
                            Build lasting change</h3>

                        <div>
                            <Link to="/Contactus" className="button-link">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-45 bg-dark">
                <div class="container">
                    <div class="row gy-45">
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="d-flex align-items-center animated" data-show="startbox"
                                style={{ transform: 'translateY(0px)', transitionDuration: '500ms', opacity: 1 }}>
                                <div class="flex-shrink-0 text-accent-3" style={{ minWidth: '42px' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="36" height="39" fill="none">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2.3"
                                            d="M34 7.25c0 2.9-7.163 5.25-16 5.25S2 10.15 2 7.25m32 0C34 4.35 26.837 2 18 2S2 4.35 2 7.25m32 0v24.5C34 34.655 26.889 37 18 37S2 34.655 2 31.75V7.25M34 19.5c0 2.905-7.111 5.25-16 5.25S2 22.405 2 19.5">
                                        </path>
                                    </svg></div>
                                <div class="flex-grow-1 ms-40">
                                    <h4 class="m-0 text-white">Innovation Ecosystem</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="d-flex align-items-center animated" data-show="startbox" data-show-delay="100"
                                style={{ transform: 'translateY(0px)', transitionduration: '500ms', opacity: '1' }}>
                                <div class="flex-shrink-0 text-accent-3" style={{ minwidth: '42px' }}><svg
                                    xmlns="http://www.w3.org/2000/svg" width="36" height="40" fill="none">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2.3"
                                        d="M12.667 38V20h10.666v18M2 14.6 18 2l16 12.6v19.8c0 .955-.375 1.87-1.041 2.546A3.534 3.534 0 0 1 30.444 38H5.556c-.943 0-1.848-.38-2.515-1.054A3.623 3.623 0 0 1 2 34.4V14.6Z">
                                    </path>
                                </svg></div>
                                <div class="flex-grow-1 ms-40">
                                    <h4 class="m-0 text-white">Product Engineering</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="d-flex align-items-center animated" data-show="startbox" data-show-delay="200"
                                style={{ transform: 'translateY(0px)', transitionduration: '500ms', opacity: 1 }}>
                                <div class="flex-shrink-0 text-accent-3" style={{ minwidth: '42px', }}><svg
                                    xmlns="http://www.w3.org/2000/svg" width="42" height="35" fill="none">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2.3"
                                        d="M7.182 33V20.944m0-6.888V2M21 33V17.5m0-6.889V2m13.818 31v-8.611m0-6.889V2M2 20.944h10.364m3.454-10.333h10.364m3.454 13.778H40">
                                    </path>
                                </svg></div>
                                <div class="flex-grow-1 ms-40">
                                    <h4 class="m-0 text-white">Digital Solutions</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="d-flex align-items-center animated" data-show="startbox" data-show-delay="300"
                                style={{ transform: 'translateY(0px)', transitionduration: '500ms', opacity: '1' }}>
                                <div class="flex-shrink-0 text-accent-3" style={{ minwidth: '42px', }}><svg
                                    xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2.3"
                                        d="M2 27.5 19 36l17-8.5M2 19l17 8.5L36 19M19 2 2 10.5 19 19l17-8.5L19 2Z"></path>
                                </svg></div>
                                <div class="flex-grow-1 ms-40">
                                    <h4 class="m-0 text-white">Staffing Solutions</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default banner
