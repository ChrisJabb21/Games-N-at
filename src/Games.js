import React, { Component } from 'react';
import {Container,  Row, Col} from 'react-bootstrap';

class Games extends Component {
    render() {
        return (
            <div>
<h2>Games</h2>

<p>We have arcade games, 
    pinball, games of skill for prizes,
     and a whole lot of video games!
      PC and Internet gaming, XBOX, and a wide-screen TV.</p>

<Container fluid className = "Justify middle">
    <Row>
        
<h5>Arcade Games</h5>
<Col xs={6} md={4}>
<ul>
<li>Big Buck HD</li>
<li>    House of The Dead 3</li>
<li>    Air Hockey</li>
<li>    Area 51</li>
<li>    Trophy Hunter</li>
<li>    SnoCross</li>
<li>    Maze of the Kings</li>
<li>    Jurassic Park</li>
<li>    Golden Tee 2017</li>
<li>    Pac-man</li>
<li>    Donkey Kong</li>
<li>    Cuisin' Exotica</li>
<li>    Space Invader</li>
<li>    Alley Cat Puck Bowling</li>
<li>    Ultracade (90 classic games in one)</li>
</ul>
</Col>
            
<h5>Pinball!</h5>
<Col xs={6} md={4}>
 <ul>
<li>Metallica</li>
<li>    Lord of The Rings</li>
<li>    Addams Family</li>
<li>    Steelers NFL</li>
<li>    South Park</li>
<li>    WWE</li>
<li>    KISS</li>
<li>    Rescue 911</li>
<li>    Star Trek - '91 Data East</li>
<li>    Simpson's Pinball Party</li>
</ul>
</Col>


<h5>Games of Skill</h5>
<Col xs={6} md={4}>
<ul>
<li>    3 Regulation-sized Pool Tables</li>
<li>    Foosball</li>
<li>    Skeeball</li>
<li>    Hoop Fever</li>
<li>    Alley Cats Puck Bowling</li>
<li>    Air Hockey</li>
<li>    Highway 66 Bowling</li>
</ul>
<p> ...and lots of great prizes!</p>
</Col>
</Row>


<h4>Lots of Video Games!</h4>


<h5>XBOX 360 Games</h5>
<Col xs={6} md={4}>
<ul> 
<li>    Battlefield 4</li>
<li>    BioShock - Infinite</li>
<li>    Call of Duty Black Ops II</li>
<li>    Call of Duty Ghost</li>
<li>    Dragonball Z - Budokai</li>
<li>    Elder Scrolls  Skyrim</li>
<li>    ESPN NHL 2K6</li>
<li>    Elder Scrolls - Skyrim</li>
<li>    FIFA 13</li>
<li>    FIFA 14</li>
<li>    Fable III</li>
<li>    Fight Night Champion</li>
<li>    Forza Motorsports 4</li>
<li>    Gears of War - Judgement</li>
<li>    Gears of War 2</li>
<li>    HALO 4</li>
<li>    Homefront</li>
<li>    Lost Planet</li>
<li>    Madden 25</li>
<li>    Mass Effect 3</li>
<li>    Minecraft</li>
<li>    Oblivion</li>
<li>    NHL 14</li>
<li>    NHL 16</li>
<li>    NBA 2K6</li>
<li>    Need For Speed - The Run</li>
<li>    Resident Evil 6</li>
<li>    The Amazing Spiderman</li>
<li>    Transformers - Dark of The Moon</li>
<li>    You Don't Know Jack</li>
</ul>
</Col>

<h5>XBOX One Games</h5>
<Col xs={6} md={4}>
<ul>
<li>Call of Duty - Advanced Warfare</li>
<li>Destiny</li>
<li>FIFA 18</li>
<li>Fortnite</li>
<li>HALO 5</li>
<li>HALO Reach</li>
<li>Madden 19</li>
<li>NBA 2K19</li>
<li>NHL 18</li>
<li>Need For Speed - Rivals</li>
<li>Plants vs. Zombies</li>
<li>Titanfall</li>
<li>Tomb Raider</li>
<li>UFC</li>
<li>WW2K18</li>
</ul>
</Col>
</Container>

            </div>
        );
    }
}

export default Games;