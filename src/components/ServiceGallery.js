import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from './Image'

import _kebabCase from 'lodash/kebabCase'

import './ServiceGallery.css'

export const query = graphql`
  fragment Services on MarkdownRemark {
    frontmatter {
      services {
        image
        alt
        title
      }
    }
  }
`

export default class ServiceGallery extends Component {
  render() {
    const { services } = this.props
    return (
      <Fragment>
        {services &&
          services.length > 0 && (
            <div className="list-service">
              {services.map((service, index) => (
                <a className="item" href="#" key={_kebabCase(service.alt) + '-' + index}>
                  <Image
                    resolutions="small"
                    src={service.image}
                    alt={service.alt}
                    className="photo"
                  />
                  <h3 className="title-item">{service.title}</h3>
                </a>
              ))}
            </div>
          )
        }
      </Fragment>
    )
  }
}

ServiceGallery.propTypes = {
  services: PropTypes.array.isRequired
}