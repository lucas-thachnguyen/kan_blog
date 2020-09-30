import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from './Image'

import './SliderLinkImages.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const query = graphql`
  fragment LinkImages on MarkdownRemark {
    frontmatter {
      linkImages {
        image
        alt
      }
    }
  }
`

export default class SliderLinkImages extends Component {
  render() {
    const { linkImages } = this.props
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    return (
      <Fragment>
        {linkImages &&
          linkImages.length > 0 && (
            <Slider className="list-partner" {...settings}>
              {linkImages.map((item, index) => (
                <div className="item" key={'link-images-' + index}>
                  <a href="#" className="link-item">
                    <Image
                      resolutions="small"
                      src={item.image}
                      alt={item.alt}
                      className="photo"
                    />
                  </a>
                </div>
              ))}
            </Slider>
          )
        }
      </Fragment>
    )
  }
}

SliderLinkImages.propTypes = {
  linkImages: PropTypes.array.isRequired
}