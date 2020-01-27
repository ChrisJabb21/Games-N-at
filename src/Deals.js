import React, { Component }from "react";


class Deals extends Component {
    render() {

        return (
            <div className="container-fluid"> 
<h2>Deals</h2>

<p>Click on a flyer below to see what kind of great time we can put together for you!

Catered Party Packages
	Field Trips, Youth Groups,
After-School</p>



  <div className="grid-container">
   
    <div className="grid-item">
    <h5>Two and Four
Player Packages </h5>
      <img src= "/images/EatnPlay.jpg" alt=""/> 
      </div>

      <div className="grid-item">
      <h5>Catered Parties</h5>
      <img src= "/images/cateredpack.jpg" alt=""/>
      </div>

          <div class="grid-item">
            <h5>Field Trips</h5>
          <img src="/images/FieldTrip.jpg" alt=""></img>
          </div>

          <div class="grid-item" ><h5>Birthday Parties</h5>
          <img src="/images/Birthday.jpg" alt=""></img>

          </div>
    </div>
</div>



        );


    }
}


export default Deals;

