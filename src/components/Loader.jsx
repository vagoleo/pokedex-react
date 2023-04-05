import React from 'react'
import cool from '../assets/loaders/pikachu-running.gif';
import icon from '../assets/loaders/Round-Line-Loading.gif';

const Loader = ({ type }) => {

  const image = type == 'icon' ? icon : cool;

  const styles = { 
    display: 'grid',
    placeContent: 'center',
    textAlign: 'center',
    paddingTop: '50px'
 }

  return (
    <div className='loader tc' style={styles}>
        <img src={image} alt='loader icon' />
        { type != 'icon' && <h2>&nbsp;&nbsp;Loading...</h2>}
    </div>
  )
}

export default Loader