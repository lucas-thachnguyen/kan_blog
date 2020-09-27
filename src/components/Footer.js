import React from 'react'
import Logo from './Logo'
import './Footer.css'

export default () => {
  const copyright = ' ALL RIGHT RESERVED. MADE BY TRÒN HOUSE 2019',
        address = [
          {
            iconName: 'map-marker',
            label: 'THÔNG TIN LIÊN HỆ',
            info: '292 NGUYỄN VĂN LINH, PHƯỜNG BÌNH THUẬN, QUẬN 7, HCM'
          }, {
            iconName: 'phone',
            label: 'HOTLINE',
            info: '+84 961 934 065'
          }, {
            iconName: 'envelope',
            label: 'HELLO@TRONHOUSE.COM',
            socials: [
              {
                url: '#',
                iconName: 'facebook'
              }, {
                url: '#',
                iconName: 'instagram'
              }, {
                url: '#',
                iconName: 'youtube'
              }, {
                url: '#',
                iconName: 'pinterest'
              }, {
                url: '#',
                iconName: 'vimeo'
              }, {
                url: '#',
                iconName: 'behance'
              }
            ]
          }
        ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="inner">
            <Logo isFooter={true} />
            <div className="address">
              {!!address && address.map((item, index) => (
                <div className="item" key={`address-${index}`}>
                  <div className="label">
                    <span className={`fa fa-${item.iconName}`}></span>
                    <span className="text">{item.label}</span>
                  </div>
                  {item.info && (
                    <p className="info">{item.info}</p>
                  )}
                  {!!item.socials && (
                    <div className="list-social">
                      {item.socials.map((socialItem, index) => (
                        <a href={socialItem.url} className="link-social">
                          <span className={`fa fa-${socialItem.iconName}`}></span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="inner">
            <p class="copyright">&copy;{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
