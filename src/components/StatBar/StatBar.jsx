import React from 'react'
import { formatProp } from '../../services/methods';
import './StatBar.css'

const StatBar = ({stat}) => {

    const percent = 100 / 255 * stat.base_stat;

  return (
    <div className="stat">
        <div className="stat-info">
            <span><strong>{ formatProp(stat.stat.name) + ':' }</strong></span>
            <span>{ stat.base_stat }</span>
        </div>
        <div className='stat-bar'>
            <div className="stat-bar-fill" style={{ width: percent + '%' }}></div>
        </div>
    </div>
  )
}

export default StatBar