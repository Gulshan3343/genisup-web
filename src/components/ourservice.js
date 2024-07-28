<<<<<<< HEAD
import React from 'react';
import "../styles/navbar.css";
import statsImage1 from '../assets/stats-1.jpg';
import statsImage2 from '../assets/stats-2.jpg';
=======
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ourservice.css';
>>>>>>> 41d87af634cebd1f2d48bb902c3b27c0d72f3bb5

function OurService() {
  return (
    <div>
<<<<<<< HEAD
      <section className="stats" id="stats">
        <div className="section__container stats__container">
          <div className="stats__content">
            <p className="section__subheader">Company</p>
            <h2 className="section__header">Our Stats</h2>
            <p className="para">
              At Genisup, our team of dedicated experts and professionals brings
              a wealth of experience and knowledge to every project. Our deep
              industry insights and hands-on experience enable us to tackle even
              the most complex challenges, providing you with tailored solutions
              that drive results.
            </p>
            <div className="stats__grid">
              <div className="stats__card">
                <span><i className="fas fa-building"></i></span>
                <h4>150+</h4>
                <p>Global Clients</p>
              </div>
              <div className="stats__card">
                <span><i className="fas fa-user"></i></span>
                <h4>200+</h4>
                <p>Expert Team Members</p>
              </div>
              <div className="stats__card">
                <span><i className="fas fa-smile"></i></span>
                <h4>1000+</h4>
                <p>Satisfied Clients</p>
              </div>
              <div className="stats__card">
                <span><i className="fas fa-trophy"></i></span>
                <h4>300+</h4>
                <p>Successful Projects</p>
              </div>
=======
      <div className="pt-15 pt-lg-210 pb-130">
        <div className="container">
            {/* <div className="services"> */}
                    <div className="services_heading">
                        <h1>Areas of Expertise</h1>
                    </div>
                    <div className="services_cards">
                        {/* <div className="sc-box"> */}
                            <div className="hr_consulting">
                                <div className="simg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" fill="currentColor"
                                        viewBox="0 0 512 512" id="hr">
                                        <path fill="#676e87"
                                            d="M204.38 7.5h103.24a40 40 0 0 1 40 40v62.61H164.38V47.5a40 40 0 0 1 40-40Z">
                                        </path>
                                        <path fill="#f66"
                                            d="M453.32 504.5H58.68a35.82 35.82 0 0 1-35.92-35.71v-48.34l2.69-27.66c.07-.81.17-1.61.26-2.41 4.49-35.88 31.43-65 66.75-73.64l87.93-16L256 187.47 332.5 300l8.74 1.69 78.3 15.1c35.31 8.64 62.26 37.76 66.73 73.64.11.8.2 1.6.28 2.41l2.69 27.66v48.34a35.82 35.82 0 0 1-35.92 35.66Z">
                                        </path>
                                        <path fill="#ffcd85"
                                            d="m189.19 287.54 12.32-18.46L256 202.47l55.26 66.14 12.33 18.24L256 346.48l-66.81-58.94z">
                                        </path>
                                        <path fill="#ffc166"
                                            d="M311.26 268.61 256 202.47l-14.84 18.14 40.1 48 1 1.45a23 23 0 0 1-3.84 30.19l-37.4 33 15 13.23 67.59-59.62Z">
                                        </path>
                                        <path fill="#ffe966"
                                            d="M295.76 504.5 266.7 390.59l-21.41.01-29.05 113.9h79.52z">
                                        </path>
                                        <path fill="#ffe236"
                                            d="m284.2 373.44-18.48 18.12a13.89 13.89 0 0 1-19.44 0l-18.45-18.08 28.17-27Z">
                                        </path>
                                        <path fill="#ff4e4e"
                                            d="m309.78 388.29 53.34-77.35a6 6 0 0 0-1.08-8l-25-21.11a6.22 6.22 0 0 0-7.84.09L256 346.47l44.7 42.75a6 6 0 0 0 9.08-.93zm-107.56 0-53.34-77.35a6 6 0 0 1 1.07-8l25.05-21.1a6.22 6.22 0 0 1 7.84.09L256 346.47l-44.7 42.75a6 6 0 0 1-9.08-.93z">
                                        </path>
                                        <path fill="#ffcd85"
                                            d="M271.11 280h-30.23a76.5 76.5 0 0 1-76.5-76.5v-107c13.68 3.71 49.32 11.33 88.39-4.45a133.48 133.48 0 0 0 40.37-25.67 52.4 52.4 0 0 0 54.48 30.12v107a76.51 76.51 0 0 1-76.51 76.5Z">
                                        </path>
                                        <path fill="#ffc166"
                                            d="M317 91.26a53.29 53.29 0 0 1-23.87-24.87 136.47 136.47 0 0 1-19.57 15A51.74 51.74 0 0 0 287 91.26a53 53 0 0 0 30.61 5.25v107a76.51 76.51 0 0 1-76.5 76.49h30a76.51 76.51 0 0 0 76.51-76.5v-107A53 53 0 0 1 317 91.26Z">
                                        </path>
                                        <path fill="#ffcd85"
                                            d="M347.62 125.44h18.64a12.91 12.91 0 0 1 12.91 12.91v28.83a12.91 12.91 0 0 1-12.91 12.91h-18.64v-54.65Z">
                                        </path>
                                        <path fill="#ffc166"
                                            d="M164.38 180.1h-18.64a12.91 12.91 0 0 1-12.91-12.91v-28.83a12.91 12.91 0 0 1 12.91-12.91h18.64v54.65Z">
                                        </path>
                                        <path fill="#272a33"
                                            d="M496.71 419.72 494 392c-.09-.89-.18-1.77-.29-2.57-4.8-38.42-33.89-70.57-72.4-80l-.36-.08-52.07-10a13.44 13.44 0 0 0-2-2.13l-25.05-21.1a13.78 13.78 0 0 0-16.8-.47l-3.44-5.07a84 84 0 0 0 33.53-67.1v-15.89h11.14a20.43 20.43 0 0 0 20.41-20.41v-28.82a20.44 20.44 0 0 0-20.41-20.42h-11.14V47.5a47.51 47.51 0 0 0-22.05-40.08c-.25-.17-.5-.34-.77-.49A47.27 47.27 0 0 0 307.62 0H204.38a47.56 47.56 0 0 0-47.5 47.5v70.44h-11.14a20.44 20.44 0 0 0-20.42 20.42v28.82a20.43 20.43 0 0 0 20.42 20.41h11.14v15.88a83.93 83.93 0 0 0 34.26 67.64l-3.42 5.13a13.76 13.76 0 0 0-17.55-.13l-25 21.1a13.53 13.53 0 0 0-2.49 2.77l-51.51 9.38-.44.1c-38.5 9.42-67.6 41.56-72.41 80-.11.87-.21 1.75-.29 2.57l-2.69 27.66v49.07A43.36 43.36 0 0 0 58.68 512h394.64a43.36 43.36 0 0 0 43.42-43.21v-48.34c0-.25-.01-.45-.03-.73ZM355.12 132.94h11.14a5.42 5.42 0 0 1 5.41 5.42v28.82a5.41 5.41 0 0 1-5.41 5.41h-11.14Zm-198.24 39.65h-11.14a5.42 5.42 0 0 1-5.42-5.41v-28.82a5.42 5.42 0 0 1 5.42-5.42h11.14Zm176.27 115.82 23 19.39-51.56 74.78-37.51-35.88ZM256 356.85l17.42 16.66-12.95 12.69a6.41 6.41 0 0 1-8.94 0l-12.95-12.69Zm0-20.38-56.93-50.22 4.9-7.34a83.46 83.46 0 0 0 36.91 8.56h30.23a83.46 83.46 0 0 0 37.72-9l4.84 7.11Zm75.53-311a32.36 32.36 0 0 1 8.59 22v41.95a44.68 44.68 0 0 1-37.77-21.69A163 163 0 0 0 322 42.66a162.38 162.38 0 0 0 9.53-17.14Zm-159.65 22A32.54 32.54 0 0 1 204.38 15h103.24A32.29 32.29 0 0 1 319 17a147.41 147.41 0 0 1-9.56 17.56A147.93 147.93 0 0 1 288 60.94a125.3 125.3 0 0 1-38 24.16c-31.05 12.55-60.52 9.51-78.08 5.55Zm0 156V106c19.79 4 50.89 6.28 83.7-7a139.56 139.56 0 0 0 35.56-21 59.57 59.57 0 0 0 49 26.4v99.05a69 69 0 0 1-32.39 58.44 7.14 7.14 0 0 0-.79.47l-.26.2a68.59 68.59 0 0 1-35.57 9.89h-30.25a69.07 69.07 0 0 1-69-68.98Zm7 84.94 5.33 4.71 60.68 53.54-37.52 35.88-51.54-74.74ZM210.42 497h-97.15v-65.4a9 9 0 0 0-18 0V497H58.68a28.35 28.35 0 0 1-28.42-28.21v-48l2.66-27.36c.07-.73.15-1.45.23-2.14 4-32.22 28.49-59.21 60.88-67.23l48.69-8.87L196 392.55a13.47 13.47 0 0 0 9.74 5.76 12.75 12.75 0 0 0 1.38.07 13.52 13.52 0 0 0 9.33-3.74l11.24-10.75 9.23 9Zm15.48 0 24.19-94.84a21.71 21.71 0 0 0 11.82 0L286.1 497Zm255.84-28.21A28.35 28.35 0 0 1 453.32 497h-36.64v-65.4a9 9 0 0 0-18 0V497h-97.1L275 392.93l9.22-9.05 11.25 10.76a13.48 13.48 0 0 0 9.33 3.74 12.88 12.88 0 0 0 1.38-.07 13.47 13.47 0 0 0 9.74-5.76l53.33-77.35c.1-.15.19-.31.28-.46l48.36 9.33c32.42 8 56.88 35 60.91 67.32.1.72.17 1.44.25 2.12l2.65 27.3ZM229.21 224.32a48.9 48.9 0 0 0 26 8h.86a49.59 49.59 0 0 0 26.87-8 8.89 8.89 0 0 0 2.53-12.32 9 9 0 0 0-12.47-2.58 30.84 30.84 0 0 1-33.93 0 9 9 0 0 0-12.41 2.58 8.9 8.9 0 0 0 2.55 12.32Zm66.71-66.53a9 9 0 0 0 9-8.93v-11.52a9 9 0 0 0-18 0v11.52a9 9 0 0 0 9 8.93Zm-79.84 0a9 9 0 0 0 9-8.93v-11.52a9 9 0 0 0-18 0v11.52a9 9 0 0 0 9 8.93Z">
                                        </path>
                                    </svg>
                                </div>
                                <h4 className="mb-15">Silicon Engineering</h4>
                                <p>We simplify your HR with expert, all-encompassing consulting</p>
                            </div>

                            <div className="hr_consulting">
                                <div className="simg">
                                     <svg id="Layer_1 "viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="100" height="150" fill="currentColor">
                                        <path d="m13 6h38v30h-38z" fill="#a3cef1" />
                                        <path d="m13 6h38v6h-38z" fill="#274c77" />
                                        <circle cx="32" cy="49" fill="#ec7d10" r="9" />
                                        <path d="m52 48v6h2l1 8h4l1-8h2v-6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2z"
                                            fill="#6096ba" />
                                        <circle cx="57" cy="41" fill="#6096ba" r="3" />
                                        <path d="m2 48v6h2l1 8h4l1-8h2v-6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2z"
                                            fill="#6096ba" />
                                        <circle cx="7" cy="41" fill="#6096ba" r="3" />
                                        <g fill="#274c77">
                                            <path d="m18 18h4v4h-4z" />
                                            <path d="m26 18h4v4h-4z" />
                                            <path d="m34 18h4v4h-4z" />
                                            <path d="m18 26h4v4h-4z" />
                                            <path d="m26 26h4v4h-4z" />
                                            <path d="m34 26h4v4h-4z" />
                                        </g>
                                        <path
                                            d="m60 45h-6c-1.65 0-3 1.35-3 3v6c0 .55.45 1 1 1h1.12l.89 7.12c.06.5.49.88.99.88h4c.5 0 .93-.38.99-.88l.89-7.12h1.12c.55 0 1-.45 1-1v-6c0-1.65-1.35-3-3-3zm1 8h-1c-.5 0-.93.38-.99.88l-.89 7.12h-2.23l-.89-7.12c-.06-.5-.49-.88-.99-.88h-1v-5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v5z" />
                                        <path
                                            d="m61 41c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                        <path
                                            d="m2 55h1.12l.89 7.12c.06.5.49.88.99.88h4c.5 0 .93-.38.99-.88l.89-7.12h1.12c.55 0 1-.45 1-1v-6c0-1.65-1.35-3-3-3h-6c-1.65 0-3 1.35-3 3v6c0 .55.45 1 1 1zm1-7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v5h-1c-.5 0-.93.38-.99.88l-.89 7.12h-2.23l-.89-7.12c-.06-.5-.49-.88-.99-.88h-1v-5z" />
                                        <path
                                            d="m11 41c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                        <path
                                            d="m52 36v-30c0-.55-.45-1-1-1h-5v-1c0-1.65-1.35-3-3-3s-3 1.35-3 3v1h-5v-1c0-1.65-1.35-3-3-3s-3 1.35-3 3v1h-5v-1c0-1.65-1.35-3-3-3s-3 1.35-3 3v1h-5c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1h38c.55 0 1-.45 1-1zm-10-32c0-.55.45-1 1-1s1 .45 1 1v1h-2zm-11 0c0-.55.45-1 1-1s1 .45 1 1v1h-2zm-11 0c0-.55.45-1 1-1s1 .45 1 1v1h-2zm30 31h-36v-22h36zm0-24h-36v-4h8v1h-3v2h4c.55 0 1-.45 1-1v-2h9v1h-3v2h4c.55 0 1-.45 1-1v-2h9v1h-3v2h4c.55 0 1-.45 1-1v-2h4z" />
                                        <path
                                            d="m18 23h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm1-4h2v2h-2z" />
                                        <path
                                            d="m26 23h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm1-4h2v2h-2z" />
                                        <path
                                            d="m34 23h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm1-4h2v2h-2z" />
                                        <path
                                            d="m18 31h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm1-4h2v2h-2z" />
                                        <path
                                            d="m26 31h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm1-4h2v2h-2z" />
                                        <path
                                            d="m34 31h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm1-4h2v2h-2z" />
                                        <path
                                            d="m44 27c-.55 0-1-.45-1-1h-2c0 1.3.84 2.4 2 2.82v1.18h2v-1.18c1.16-.41 2-1.51 2-2.82 0-1.65-1.35-3-3-3-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1h2c0-1.3-.84-2.4-2-2.82v-1.18h-2v1.18c-1.16.41-2 1.51-2 2.82 0 1.65 1.35 3 3 3 .55 0 1 .45 1 1s-.45 1-1 1z" />
                                        <path
                                            d="m58 24h-2v8.13l-1.45-.96-1.11 1.66 3 2c.17.11.36.17.55.17s.39-.06.55-.17l3-2-1.11-1.66-1.45.96v-8.13z" />
                                        <path
                                            d="m7 35c.19 0 .39-.06.55-.17l3-2-1.11-1.66-1.45.96v-8.13h-2v8.13l-1.45-.96-1.11 1.66 3 2c.17.11.36.17.55.17z" />
                                        <path
                                            d="m32 52c-.55 0-1-.45-1-1h-2c0 1.3.84 2.4 2 2.82v1.18h2v-1.18c1.16-.41 2-1.51 2-2.82 0-1.65-1.35-3-3-3-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1h2c0-1.3-.84-2.4-2-2.82v-1.18h-2v1.18c-1.16.41-2 1.51-2 2.82 0 1.65 1.35 3 3 3 .55 0 1 .45 1 1s-.45 1-1 1z" />
                                        <path
                                            d="m32 59c5.51 0 10-4.49 10-10s-4.49-10-10-10-10 4.49-10 10 4.49 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z" />
                                        <path d="m43 48h2v2h-2z" />
                                        <path d="m47 48h2v2h-2z" />
                                        <path d="m15 48h2v2h-2z" />
                                        <path d="m19 48h2v2h-2z" />
                                    </svg>
                                </div>
                                <h4 className="mb-15">Embedded Solutions</h4>
                                <p>Biznivate's Payroll process: Secure, accurate, and stress-free.</p>
                            </div>

                            <div className="hr_consulting">
                                <div className="simg">
                                    <svg id="Capa_1"
                                        enable-background="new 0 0 512 512" viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg" width="100" height="150" fill="currentColor">
                                        <g>
                                            <circle cx="256" cy="256" fill="#ffe78d" r="256" />
                                            <path
                                                d="m284.635 510.397c120.432-13.407 215.627-110.347 226.34-231.572l-162.513-162.514-132.016 16.696-12.487 12.487 46.424 46.424-9.553 25.737h-144.762l-25.228 25.228 130.382 130.382-31.898 21.821z"
                                                fill="#ffda3e" />
                                            <path d="m70.84 191.727h205.371v51.156h-205.371z" fill="#a36553" />
                                            <g>
                                                <path
                                                    d="m276.21 343.594h-72.77v17.164h-34.116v34.328h106.886l36.126-25.746z"
                                                    fill="#b67261" />
                                                <path d="m348.981 360.758v-17.164h-72.771v51.492h106.887v-34.328z"
                                                    fill="#a36553" />
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="m276.21 296.523h-61.869v-165.621h61.869l21.505 82.811z"
                                                        fill="#b67261" />
                                                    <path d="m276.21 130.902h61.869v165.62h-61.869z" fill="#a36553" />
                                                </g>
                                                <g>
                                                    <path d="m276.21 145.494h-72.251v-29.183h72.251l25.114 14.591z"
                                                        fill="#c3826e" />
                                                    <path d="m276.21 116.311h72.252v29.182h-72.252z" fill="#b67261" />
                                                </g>
                                                <g>
                                                    <path d="m276.21 311.114h-72.251v-29.182h72.251l25.114 14.591z"
                                                        fill="#c3826e" />
                                                    <path d="m276.21 281.932h72.252v29.182h-72.252z" fill="#b67261" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <h4 className="mb-15">Industry 4.0 Solutions</h4>
                                <p>Stay compliant. Focus on growth. We manage the rest.</p>
                            </div>

                            <div className="hr_consulting">
                                <div className="simg">
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 122.88 80.26" width="100" height="150" fill="currentColor">
                                        <defs>
                                            {/* <style>
                                                {{.cls-1 {
                                                    fill-rule: evenodd;
                                                }
                                            </style> */}
                                        </defs>
                                        <title>hiring</title>
                                        <path className="cls-1"
                                            d="M93.28,30.93c2.84,6,14.31,6.32,16.87-.42,7.78,5,12.78,4.05,12.73,15.08H93.4a32.33,32.33,0,0,1-4.48,10.62l14,15.24-9.65,8.81L79.77,65.43A32.32,32.32,0,0,1,30.28,45.29H0c.87-11.23,3-9.86,12.57-15.85,2.64,6.87,15.34,7.32,18.13,0l.15.09A32.51,32.51,0,0,1,39,15.68,32.31,32.31,0,0,1,93.28,30.93ZM51.42,37.1a6.78,6.78,0,0,1-3.18-2c5-1.88,2.27-10.19,3.73-14.4,1.89-5.47,8.88-7.34,12.78-4.14,3-.32,6.14,1.25,6.8,6,.55,3.95-1.4,10.73,3.15,12.91a7.47,7.47,0,0,1-3.48,1.68,36,36,0,0,1-5.49.61v1.65l1.92,3.06-6.18,4.83L55.3,42.47l1.37-2.93V37.76a23.15,23.15,0,0,1-5.25-.66Zm19.75,7.95a15,15,0,0,0-2.86-4.44C79.42,44.91,78.44,42,80.74,51c.21.82.45,1.74.72,2.77-9,11.55-30.44,11.55-40,0,.28-1,.52-2,.73-2.82,2.26-8.88,1.24-6,12.49-10.32a14.78,14.78,0,0,0-2.86,4.44L54.72,45l6.59,5.27L68.23,45l2.94.07Zm11-26.81a28.67,28.67,0,0,0-40.57,0,29,29,0,0,0,0,40.58A28.69,28.69,0,1,0,82.16,18.24ZM15.55,28.9A4.13,4.13,0,0,1,16,27.42,6,6,0,0,1,13.6,23h-.13a1.75,1.75,0,0,1-.86-.22,2.39,2.39,0,0,1-.94-1.15c-.44-1-.78-3.64.32-4.39l-.21-.13,0-.3c0-.53-.06-1.17-.07-1.84,0-2.48-.09-5.48-2.08-6.08l-.85-.26L9.32,8a32.83,32.83,0,0,1,5-5.06A12.65,12.65,0,0,1,20.08.09,7,7,0,0,1,25.7,1.66a10.21,10.21,0,0,1,1.5,1.51A6.37,6.37,0,0,1,31.7,5.8a9.05,9.05,0,0,1,1.46,3,10.23,10.23,0,0,1,.4,3.35,8.07,8.07,0,0,1-2.34,5.43,1.65,1.65,0,0,1,.73.19,1.81,1.81,0,0,1,.64,2.22c-.22.67-.49,1.46-.75,2.12-.31.89-.77,1.05-1.66,1-.05,2.19-1.06,3.28-2.43,4.57l.31,1.08c-.86,4.19-10,4.64-12.51.23ZM95.91,30a3.85,3.85,0,0,1,.4-1.39,5.67,5.67,0,0,1-2.23-4.14H94a1.63,1.63,0,0,1-.8-.22,2.17,2.17,0,0,1-.89-1.08c-.41-.94-.73-3.41.3-4.12l-.2-.13,0-.27c0-.5,0-1.11-.06-1.74,0-2.33-.08-5.15-2-5.71l-.8-.25.53-.65a29.85,29.85,0,0,1,4.69-4.76,11.9,11.9,0,0,1,5.43-2.64,6.55,6.55,0,0,1,5.28,1.48,10,10,0,0,1,1.41,1.42,6,6,0,0,1,4.23,2.47,8.72,8.72,0,0,1,1.38,2.78,9.83,9.83,0,0,1,.37,3.15,7.62,7.62,0,0,1-2.2,5.1,1.53,1.53,0,0,1,.68.18,1.69,1.69,0,0,1,.61,2.08c-.21.64-.47,1.37-.71,2-.29.84-.72,1-1.56.91,0,2.06-1,3.08-2.28,4.29l.29,1c-.82,3.94-9.43,4.37-11.76.22Z" />
                                    </svg>
                                </div>
                                <h4 className="mb-15">Staffing Solutions</h4>
                                <p>We source, onboard, and manage your ideal workforce.</p>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="text-center mt-80">
                        <div data-show="startbox" className="animated"
                            style={{transform: 'translateY(0px)', transitionduration: '500ms', opacity: '1'}}>
                            <a className="btn btn-accent-1" href="services.php" target="_self">Our
                                Services</a>
                        </div>
                        <p className="fw-medium font-size-15 mt-25 mb-0 animated" data-show="startbox" data-show-delay="100"
                            style={{transform: 'translateY(0px)', transitionduration: '500ms', opacity: '1'}}>Want to get a
                            free
                            consultation? <Link to="/Contactus">Contact us</Link>.</p>
                    </div>
                
            
        </div>
    </div>

    <div>
        <div className="container">
            <div className="row bg_white gy-50">
                <div className="col-lg-5">
                    <h3 className="mb-45 animated" data-show="startbox"
                        style={{transform: 'translateY(0px)', transitionduration: '500ms', opacity: '1',}}>Strategic growth
                        support from an executive with experience.</h3>
                    <p className="mb-40 animated" data-show="startbox" data-show-delay="100"
                        style={{transform: 'translateY(0px)', transitionduration: '500ms', opacity: '1',}}>His hath is appear
                        be one don't creepeth. Them and one moving the won't may. Moving saw wherein divide bearing
                        called. Green moveth Hath. That it years fruit behold Meat also us third itself made seasons
                        green void give replenish our said saying also spirit give lesser wherein.</p>
                    <div data-show="startbox" data-show-delay="200"
                        style={{transform: 'translateY(0px)', transitionduration: '500ms', opacity: '1'}}
                        className="animated mt-20">
                        
                        <a className="btn btn-accent-1 btn-link btn-clean" href="#" target="_self">Learn more</a>
                    </div>
                </div>

                <div className="col-lg-6 offset-lg-1">
                    <img src="Strategic growth.webp" className="about-us-img"/>
                </div>
>>>>>>> 41d87af634cebd1f2d48bb902c3b27c0d72f3bb5
            </div>
          </div>
          <div className="stats__image">
            <img src={statsImage1} alt="stats" />
            <img src={statsImage2} alt="stats" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurService;
