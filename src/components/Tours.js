import Title from './Title'
import { tours } from '../data'
import React from 'react'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, image, date, name, info, country, days, price } = tour
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={name} />
                <p className="tour-date">{date}</p>
              </div>
              <article className="tour-info">
                <div className="tour-title">
                  <h4>{name}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{days} days</p>
                  <p>from ${price}</p>
                </div>
              </article>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
