import React from "react"
import faker from "faker"

import Image from "./SubComponents/image"
import  Description from "./SubComponents/Description";
function Card() {

	return(

	<div className="ui card">
      <Image source = {faker.image.image()}/> 
      <Description name={faker.name.findName()}
      
      description={faker.lorem.sentence()} />
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>		


);



}
export default Card
