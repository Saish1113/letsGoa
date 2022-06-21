import React, { Component } from 'react'
//import './Gallery2.css'
import './utility.css'
import './normalize.css'
import './responsive.css'
import './style.css'
import './fonts.css'
import footer from './Footer'

export default function gallery2(){
    return (
        <>
            <div id = "gallery" className = "py-4">
                <div className = "container">
                    <div className = "gallery-row">
                        <div className = "gallery-item shadow">
                            <img src = "../images/goa-image1.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/goa-image2.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/goa-image3.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/goa-image4.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/goa-image1.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/goa-image2.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/goa-image3.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/goa-image1.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className = "gallery-item shadow">
                        <img src = "../images/goa-image2.jpg" alt = "gallery img"/>
                        <span className = "zoom-icon">
                            <i className = "fas fa-search-plus"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div id = "my-img-modal-box">
            <div id = "my-img-modal">
                <button type = "button" id = "my-modal-close-btn" className = "flex">
                    <i className = "fas fa-times"></i>
                </button>
                <button type = "button" id = "my-prev-btn" className = "flex">
                    <i className = "fas fa-chevron-left"></i>
                </button>
                <button type = "button" id = "my-next-btn" className = "flex">
                    <i className = "fas fa-chevron-right"></i>
                </button>
                <img src = "images/gallery-1.jpg"/>
            </div>
        </div>
        <section id = "popular" className = "py-4">
            <div className = "title-wrap">
                <span className = "sm-title">know about some coo destination</span>
                <h2 className = "lg-title">Popular Places</h2>
            </div>

            <div className = "popular-row">
                <div className = "popular-item shadow">
                    <img src = "../images/goa-image1.jpg" alt = ""/>
                    <div>
                        <span>Eiffel Tower, Paris</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/goa-image2.jpg" alt = ""/>
                    <div>
                        <span>Machu Picchu, Peru</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/goa-image3.jpg" alt = ""/>
                    <div>
                        <span>Acropolis, Athens</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/goa-image1.jpg" alt = ""/>
                    <div>
                        <span>Bali, Indonesia</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/goa-image2.jpg" alt = ""/>
                    <div>
                        <span>Dubai, United Arab Emirates</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/goa-image3.jpg" alt = ""/>
                    <div>
                        <span>Bhutan</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/goa-image1.jpg" alt = ""/>
                    <div>
                        <span>Havana, Cuba</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div className = "popular-item shadow">
                    <img src = "../images/goa-image2.jpg" alt = ""/>
                    <div>
                        <span>Moskva, Russia</span>
                        <ul className = "rating flex">
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star"></i></li>
                            <li><i className = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>
            </div>
        </section>
        <footer/>
    </>        
)};


