import React from 'react'
import check from '../../../assets/LoginHomePageImages/check-circle.png'

const Lists = ({description}) => {

  return (
    <li style={
        {display:"flex",
        alignItems:"center",
        gap:".6em",
        padding:".2em 0"
    }
    }><img src={check} alt='checkmark'/>{description}</li>
  )
}

export default Lists