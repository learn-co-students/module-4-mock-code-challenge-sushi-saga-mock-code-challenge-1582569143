import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {props.renderedSushi.map( sushiData => (
          <Sushi
            key={sushiData.id}
            {...sushiData}
            clickHandler={props.eatSushi}
            eaten={props.eaten.includes(sushiData.id)}
          />
        ))}
        <MoreButton clickHandler={props.advanceStartIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer