import React from 'react' 
import PropTypes  from 'prop-types'

function Cards({children, reverse}) {
//   return <div className='card'>{children}</div>
return <div className='card'  style={{
    backgroundColor: reverse ? 'black' : '#fff',
    color: reverse ? '#fff' : '#000'

}}>

{children}

</div>
}

Cards.defaultProps ={
    reverse: false,
}

Cards.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Cards  