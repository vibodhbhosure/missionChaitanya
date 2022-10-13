import React from "react";
// import '../Donate.css'
import '../AboutUs.css'



export default function AboutUs() {
    return (
        <div className="about" >

            <div className="about-text">
                Mission Chaitanya is a initiative to spread awareness among
                the people about the rich culture of our country.
                Our mission focuses on clearing misconceptions regarding our
                culture and giving the people ,
                the idea of perfect living with facts that our ancestors have discovered centuries back.
            </div>
            <div className="developer-div">
                <h3>Developers</h3>
                <div className="container-1">
                    <div>  
                     <div class="card developer-card">
                        <div class="card-body">
                            <h5 class="card-title developer-title">Suyog Havare</h5>


                            <div className="social-icons"></div>
                        </div>
                    </div>
                    </div>
                    <div> <div class="card developer-card">
                        <div class="card-body">
                            <h5 class="card-title developer-title">Suyog Havare</h5>


                            <div className="social-icons"></div>
                        </div>
                    </div></div>
                </div>
                <div className="container-1">
                    <div>
                    <div class="card developer-card">
                        <div class="card-body">
                            <h5 class="card-title developer-title">Suyog Havare</h5>


                            <div className="social-icons">
                                <img src={require('./github.png')}/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div> <div class="card developer-card">
                        <div class="card-body">
                            <h5 class="card-title developer-title">Suyog Havare</h5>


                            <div className="social-icons"></div>
                        </div>
                    </div></div>

                </div>
            </div>

        </div>

    )
}