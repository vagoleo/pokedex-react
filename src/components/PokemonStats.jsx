import React from 'react'
import StatBar from './StatBar/StatBar'

const PokemonStats = ({ stats }) => {
  return (
    <>
        {
            stats.map(stat => (
                <StatBar stat={stat} key={stat.stat.name} />
            ))
        }
    </>
  )
}

export default PokemonStats