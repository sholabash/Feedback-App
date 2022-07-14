import React from 'react'


function Header({text, bgColor, texColor}) {
    const headerStyle ={
        backgroundColor:bgColor,
        color:texColor
    }
  return (
    <header style={headerStyle} >
 
    <div className='container'>
<h2>{text}</h2>
    </div>
    </header>
  )
}

Header.defaultProps ={
    text: 'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    texColor:'#ff6a95',

}

export default Header