import React, { Fragment } from 'react'

const Sushi = (props) => {

  // have: img_url, name, price

  // tbd: clickHandler, eaten



  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.clickHandler(props.id)}>
        { props.eaten ?
           null
          :
          <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi