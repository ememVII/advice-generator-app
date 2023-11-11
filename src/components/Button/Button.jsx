import React from 'react'

export default function Button(props) {
  return (
    <button className='advice-btn' onClick={props.onClickHandler}>{props.children}</button>
  )
}
