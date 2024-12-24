const Tour = ({ image, date, name, info, country, days, price }) => {
  return (
    <article className="tour-card">
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
}
export default Tour
