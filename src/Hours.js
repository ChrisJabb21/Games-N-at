import React, { Component } from 'react';

class Hours extends Component {
    render() {
        return (
            <div className="align middle">


<h2>Our Hours and Location</h2>

<br>
</br>
<table class="GeneratedTable">
  <thead>
    
  </thead>
  <tbody>
    <tr>
      <td>Thursday</td>
      <td>4:00pm to Midnight</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td>4:00pm to 1:00am</td>
    </tr>
    <tr>
      <td>Saturday</td>
      <td>Noon to 1:00am
</td>
    </tr>
    <tr>
      <td>Sunday</td>
      <td>Noon to 8:00pm
</td>
    </tr>
  </tbody>
</table>


<p>NO KIDS UNDER 14 YEARS OF AGE AFTER 9:00 P.M.</p>

<div className="map">
<p>We are located on the South Side at: 
2010 Josephine Street,
Pittsburgh, PA 15203</p>
<a href="http://maps.google.com/maps?f=q&amp;hl=en&amp;geocode=&amp;q=2010+Josephine+Street+Pittsburgh+PA+15203&amp;sll=40.432772,-79.976177&amp;sspn=0.030183,0.087891&amp;ie=UTF8&amp;ll=40.429048,-79.977078&amp;spn=0.015092,0.027637&amp;z=15&amp;g=2010+Josephine+Street+Pittsburgh+PA+15203&amp;iwloc=r0" imageanchor="1" target="_blank">
<img src="images\map_static.gif" alt=""/> </a>
</div>



<div className ="map ">
<img src ="images\games_nat_front.jpg"></img>
You can't miss our building! 
<p>Free parking in our lot and along the street.</p>
</div>
<p>
Visit:
2010 Josephine St
Pittsburgh PA 15203 </p>


<p> Call:(412) 481-2002</p>

            </div>
        );
    }
}

export default Hours;