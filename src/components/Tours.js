import Title from './Title'
import { tours } from '../data'
import React from 'react'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  )
}

export default Tours
