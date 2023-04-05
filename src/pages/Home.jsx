import React from 'react'
import PokemonGrid from '../components/PokemonGrid'

const Home = () => {


  return (
    <div>
      <section className='pokemon-grid' style={{minHeight: '100vh'}}>
        <div className="container">
          <PokemonGrid />
        </div>
      </section>
    </div>
  )
}

export default Home