import React, { Component } from "react";
import homeimg from "./Images/homeimg.jpg";

class Home extends Component {
    render() {
        return(
            <div>
                <h2>Benjamin Kohler</h2>
                <p>I was born in Virginia Beach, VA on March 9th, 2000. I started off playing piano when I
                was only 3 years old. Around the time I was 9, I joined the Academy of Rock Music
                and played keyboards. Seeing some of the other students play drums piqued my
                interest in the instrument, so my parents bought me a drumset when I was 10
                and I started playing drums for the academy. Around the time I was 12, I also 
                began playing bass and guitar. When I turned 14, I started interning and teaching music
                at the academy until I was 19.</p>

                <p>In 2014, I joined my first band outside of the academy. It was a thrash metal band
                called Catalyst that I played drums for with some friends from high school and the academy.
                Since then, I have played in various metal, rock, and hardcore/punk bands around the 757 area.</p>

                <img alt="Me at 17 years old playing with Catalyst" src={homeimg} />
            </div>
        );
    }
}

export default Home;