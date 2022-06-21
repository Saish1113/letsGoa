import React, { Component } from 'react'
import './utility.css'
import './normalize.css'
import './responsive.css'
import './style.css'
import './fonts.css'

export default function Services (){
    return (
        <>
        <section id = "services" class = "py-4">
        <div class = "container">
            <div class = "title-wrap">
                <span class = "sm-title">know about services that we offer</span>
                <h2 class = "lg-title">Our services</h2>
            </div>

            <div class = "services-row">
                <div class = "services-item">
                    <span class = "services-icon">
                        <i class = "fas fa-hotel"></i>
                    </span>
                    <h3>Luxurious Hotel</h3>
                    <p class = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                    <a href = "#" class = "btn">Read more</a>
                </div>

                <div class = "services-item">
                    <span class = "services-icon">
                        <i class = "fas fa-map-marked-alt"></i>
                    </span>
                    <h3>Trave Guide</h3>
                    <p class = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                    <a href = "#" class = "btn">Read more</a>
                </div>

                <div class = "services-item">
                    <span class = "services-icon">
                        <i class = "fas fa-money-bill"></i>
                    </span>
                    <h3>Suitable Price</h3>
                    <p class = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                    <a href = "#" class = "btn">Read more</a>
                </div>
            </div>
        </div>
    </section>
    <section id = "testimonials" class = "py-4">
        <div class = "container">
            <div class = "title-wrap">
                <span class = "sm-title">what our clients say about us</span>
                <h2 class = "lg-title">testimonials</h2>
            </div>

            <div class = "test-row">
                <div class = "test-item">
                    <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis, asperiores, velit iste eos officiis tempora magni quaerat quo consectetur expedita cum recusandae facere nam voluptate minus iusto eum. Delectus!</p>
                    <div class = "test-item-info">
                        <img src = "../images/test-1.jpg" alt = "testimonial"/>
                        <div>
                            <h3>Kevin Wilson</h3>
                            <p class = "text">Trip to Brazil</p>
                        </div>
                    </div>
                </div>

                <div class = "test-item">
                    <p class = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut dolores tenetur harum deserunt. Maxime tenetur consectetur recusandae nobis fugit iusto natus quibusdam nulla!</p>
                    <div class = "test-item-info">
                        <img src = "../images/test-2.jpg" alt = "testimonial"/>
                        <div>
                            <h3>Ben Davis</h3>
                            <p class = "text">Trip to Maldives</p>
                        </div>
                    </div>
                </div>

                <div class = "test-item">
                    <p class = "text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sapiente amet expedita quae autem deleniti quo magni numquam facilis soluta dicta, praesentium ipsum, quos optio sed quibusdam! Reprehenderit recusandae provident id nemo!</p>
                    <div class = "test-item-info">
                        <img src = "../images/test-3.jpg" alt = "testimonial"/>
                        <div>
                            <h3>Jaura Jones</h3>
                            <p class = "text">Trip to Thailand</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
};