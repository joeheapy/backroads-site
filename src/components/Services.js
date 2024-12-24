// This file is the Services component. It imports the Title component and the services data from the data file. It maps over the services data and passes each service as a prop to the Service component. Finally, it returns the Title component and the mapped services.

import Title from './Title'
import { services } from '../data'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services
