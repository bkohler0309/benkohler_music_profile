import React, { Component } from "react";
import catalyst from "./Images/catalyst.jpg";
import c1 from "./Images/c1.jpg";
import c2 from "./Images/c2.jpg";
import semtex from "./Images/semtex.jpg";
import s1 from "./Images/s1.jpg";
import s2 from "./Images/s2.jpg";
import streetweapon from "./Images/street weapon.jpg";
import sw1 from "./Images/sw1.jpg";
import sw2 from "./Images/sw2.jpg";
import sw3 from "./Images/sw3.jpg";

class PastBands extends Component {
    render() {
        return (
            <div>
                <h2>Past Bands</h2>
                <p>These are bands that I played in that are no longer active.</p>

                <h3>Catalyst (Drums 2014 - 2019)</h3>
                <img alt="Catalyst @ Riffhouse Pub" src={catalyst} />
                <p>Genre: Thrash Metal/Crossover</p>

                <p>Catalyst was the first actual band that I had ever joined. I was
                14 when it started and some seniors knew I played drums and asked if
                I wanted to be in it. We started out as just a thrash metal band. 
                We eventually started getting asked to play punk and hardcore shows, 
                and that is when we decided to add more of a hardcore punk influence 
                to our music.</p>

                <p>For fans of: Metallica, Anthrax, Cro-Mags</p>
                <ol>
                    <li><a href="https://catalystva.bandcamp.com/album/reaction">Reaction</a> (Independent, Demo 2016)</li>
                    <a href="https://catalystva.bandcamp.com/album/reaction"><img alt="Catalyst - Reaction cover art" src={c1} /></a>
                    <li><a href="https://catalystva.bandcamp.com/track/at-the-throne-demo">At the Throne (Demo)</a> (Independent, Single 2017)</li>
                    <a href="https://catalystva.bandcamp.com/track/at-the-throne-demo"><img alt="Catalyst - At The Throne (Demo) cover art" src={c2} /></a>
                </ol>

                <h3>Semtex (Drums 2017 - 2019)</h3>
                <img alt="Semtex @ Studio 239b" src={semtex} />
                <p>Genre: Hardcore Punk</p>

                <p>Semtex was the first hardcore band that I'd ever played in. Every
                one who played in Semtex aside from the first singer went on to be in
                Street Weapon. In 2019, we briefly got a new singer and changed our name
                to Unity Fight. We only played a couple of shows under that name before 
                breaking up.</p>

                <p>For fans of: Agnostic Front, Bad Brains, Warzone</p>
                <ol>
                    <li>You Versus Them (taken off of the internet) (Independent, Demo 2017)</li>
                    <img alt="Semtex - You Versus Them cover art" src={s1}/>
                    <li><a href="https://semtex.bandcamp.com/album/marked">Marked</a> (Independent, EP 2018)</li>
                    <a href="https://semtex.bandcamp.com/album/marked"><img alt="Semtex - Marked cover art" src={s2}/></a>
                </ol>

                <h3>Street Weapon (Drums 2019 - 2021)</h3>
                <img alt="Street Weapon @ Studio 239b" src={streetweapon} />
                <p>Genre: Hardcore Punk</p>

                <p>Street Weapon was the first band I played in to put out a physical
                record and be on a label. The singer of Unity Fight originally played
                drums for this band and was on the first 2 demos. In mid-2019, he moved
                to Richmond and I took his place on drums before recording a 7" that
                was put out through a hardcore punk label that had recently started up
                in the 757 area known as Not for the Weak! Records.</p>

                <p>For fans of: 86 Mentality, The Abused, Negative Approach</p>
                <ol>
                    <li><a href="https://streetweapon.bandcamp.com/album/the-message">The Message</a> (Independent, Demo 2018)</li>
                    <a href="https://streetweapon.bandcamp.com/album/the-message"><img alt="Street Weapon - The Message cover art" src={sw1}/></a>
                    <li><a href="https://streetweapon.bandcamp.com/album/demo-2">Demo 2</a> (Independent, Demo 2019)</li>
                    <a href="https://streetweapon.bandcamp.com/album/demo-2"><img alt="Street Weapon - Demo 2 cover art" src={sw2}/></a>
                    <li><a href="https://notfortheweakrecords.bandcamp.com/album/quick-to-die">Quick to Die</a> (Not for the Weak! Records, EP 2020)</li>
                    <a href="https://notfortheweakrecords.bandcamp.com/album/quick-to-die"><img alt="Street Weapon - Quick to Die cover art" src={sw3}/></a>
                </ol>
            </div>
        );
    }
}

export default PastBands;