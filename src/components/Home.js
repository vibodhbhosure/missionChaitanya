import React from "react";
import { Link } from "react-router-dom";
import '../Home.css'
import '../App.css'
import { useSpeechSynthesis } from "react-speech-kit";

export default function Home() {

    const { speak } = useSpeechSynthesis();

    return (
        <div id="bgimghome">
            <div id="homecontainer">
                <div id="home" className="read-aloud">
                    Mission Chaitanya is a initiative to spread awareness among <br />the people
                    about the rich culture of our country.<br />

                    Our mission focuses on clearing misconceptions regarding our <br /> culture and
                    giving the people , <br />
                    the idea of perfect living with facts that our ancestors have discovered
                    centuries back.<br /><br /><Link to="/donate"><button type="button" className="btn btn-light linktodonate"><div>Donate</div></button></Link>

                    <button onClick={() => speak({ text: document.querySelector('.read-aloud').textContent })} className="btn btn-light linktodonate">
                        Speech
                    </button>
                </div>
            </div>

        </div >

    )
}