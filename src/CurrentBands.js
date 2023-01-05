import React, { Component } from "react";
import zenbrain from "./Images/zen brain.jpg";
import zb1 from "./Images/zb1.jpg";
import zb2 from "./Images/zb2.jpg";
import zb3 from "./Images/zb3.jpg";
import zb4 from "./Images/zb4.jpg";
import deficit from "./Images/deficit.jpg";
import d1 from "./Images/d1.jpg";
import d2 from "./Images/d2.jpg";
import bw1 from "./Images/bw1.jpg";
import bw2 from "./Images/bw2.jpg";
import ba1 from "./Images/ba1.jpg";
import primesuspect from "./Images/prime suspect.jpg";
import ps1 from "./Images/ps1.jpg";

class CurrentBands extends Component {
    render() {
        return(
            <div>
                <h2>Current Bands</h2>
                <p>These are the bands that I play in that are currently active 
                and doing things such as playing shows and releasing music.</p>

                <h3>Zen Brain (Drums, 2019 - present)</h3>
                <img alt="Zen Brain @ Charlie's Cafe" src={zenbrain} />
                <p>Genre: Alternative Rock/Grunge</p>

                <p>Zen Brain is a band that me and some of my
                friends do as a side project to our hardcore bands.</p>

                <p>For fans of: Smashing Pumpkins, Silverchair, Nirvana</p>
                <ol>
                    <li><a href="https://zenbrainva.bandcamp.com/album/demo">Demo</a> (Independent, Demo 2019)</li>
                    <a href="https://zenbrainva.bandcamp.com/album/demo"><img alt="Zen Brain - Demo cover art" src={zb1}/></a>
                    <li><a href="https://zenbrainva.bandcamp.com/album/tv-fish">TV Fish</a> (Independent, Single 2020)</li>
                    <a href="https://zenbrainva.bandcamp.com/album/tv-fish"><img alt="Zen Brain - TV Fish cover art" src={zb2}/></a>
                    <li><a href="https://open.spotify.com/album/5YNNxd4nLYtKAg8OKqCS5U?si=ymRPsk8MS9OpLWtetwTzUQ">Phoebe</a> (Independent, Single 2020)</li>
                    <a href="https://open.spotify.com/album/5YNNxd4nLYtKAg8OKqCS5U?si=ymRPsk8MS9OpLWtetwTzUQ"><img alt="Zen Brain - Phoebe cover art" src={zb3}/></a>
                    <li><a href="https://zenbrainva.bandcamp.com/album/metallic-monks">Metallic Monks</a> (Human Body Language Club, EP 2021)</li>
                    <a href="https://zenbrainva.bandcamp.com/album/metallic-monks"><img alt="Zen Brain - Metallic Monks cover art" src={zb4}/></a>
                </ol>

                <h3>Deficit (Everything 2021 - 2022, Vocals 2022 - present)</h3>
                <img alt="Deficit @ West Beach Tavern" src={deficit} />
                <p>Genre: Hardcore Punk</p>
                
                <p>Deficit started out as a solo project that I started
                as a way to keep myself occupied musically during the height of covid 
                since none of my bands were able to play shows. Now, I have a full 
                lineup and just stick to vocals</p>

                <p>For fans of: Negative Approach, Cadaver Dog, Nightstick Justice</p>
                <ol>
                    <li><a href="https://deficithatesyou.bandcamp.com/album/staggering-towards-false-light">Staggering Towards False Light</a> (Not For The Weak! Records, Demo 2021)</li>
                    <a href="https://deficithatesyou.bandcamp.com/album/staggering-towards-false-light"><img alt="Deficit - Staggering Towards False Light cover art" src={d1}/></a>
                    <li><a href="https://deficithatesyou.bandcamp.com/album/stfl-ii">STFL II</a> (Independent, Demo 2021)</li>
                    <a href="https://deficithatesyou.bandcamp.com/album/stfl-ii"><img alt="Deficit - STFL II cover art" src={d2}/></a>
                </ol>

                <h3>Bow Wielder (Everything 2021 - present)</h3>
                <p>Genre: Black Metal/Punk</p>

                <p>Bow Wielder is a solo project I started when diving heavily into the 
                punkier side of black metal.</p>

                <p>For fans of: Bone Awl, Ildjarn, Raw Moon</p>
                <ol>
                    <li><a href="https://bowwielder.bandcamp.com/album/demo-i">Demo I</a> (Independent, Demo 2021)</li>
                    <a href="https://bowwielder.bandcamp.com/album/demo-i"><img alt="Bow Wielder - Demo I cover art" src={bw1}/></a>
                    <li><a href="https://bowwielder.bandcamp.com/album/demo-ii">Demo II</a> (Human Body Language Club, Demo 2021)</li>
                    <a href="https://bowwielder.bandcamp.com/album/demo-ii"><img alt="Bow Wielder - Demo II cover art" src={bw2}/></a>
                </ol>

                <h3>Bastard Altar (Everything 2021 - present)</h3>
                <p>Genre: Raw Black Metal/Dungeon Synth</p>

                <p>Bastard Altar is another solo project for black metal ideas that I
                liked but didn't fit what I was going for with Bow Wielder.</p>

                <p>For fans of: Darkthrone, Ash Pool, Mütiilation</p>
                <ol>
                    <li><a href="https://geistraumrecords.bandcamp.com/album/bastard-altar-struggling-beams-of-a-waning-moon-raum-014">Struggling Beams of a Waning Moon</a> (Geistraum Records (US) and Escafismo Records (EU), Demo 2021)</li>
                    <a href="https://geistraumrecords.bandcamp.com/album/bastard-altar-struggling-beams-of-a-waning-moon-raum-014"><img alt="Bastard Altar - Struggling Beams of a Waning Moon cover art" src={ba1}/></a>
                </ol>

                <h3>Prime Suspect (Drums 2022 - present)</h3>
                <img alt="Prime Suspect @ Norfolk Taphouse" src={primesuspect} />
                <p>Genre: Hardcore Punk</p>

                <p>Prime Suspect started out as just me and the singer of our old 
                band Street Weapon. I did bass on the demo, but now we have a full
                lineup, including the bassist of Street Weapon. We just played our
                first show last month, which can be viewed <a href="https://www.youtube.com/watch?v=MdKQoJ-AWhc">here</a>.</p>

                <p>For fans of: Stop and Think, Youth of Today, Lockin' Out Records</p>
                <ol>
                    <li><a href="https://manicmantra.bandcamp.com/album/mm06-prime-suspect-demo">Demo</a> (Convulse Records' cassette tape imprint Manic Mantra (US), Conviction Records (UK), and Breakout! Records (Indonesia), Demo 2022)</li>
                    <a href="https://manicmantra.bandcamp.com/album/mm06-prime-suspect-demo"><img alt="Prime Suspect - Demo cover art" src={ps1}/></a>
                </ol>
            </div>
        );
    }
}

export default CurrentBands;