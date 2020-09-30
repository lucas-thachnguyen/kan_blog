import React from 'react'
import './PageHeader.css'

const PageHeaderVideo = ({
  video
}) => {
  return (
    <div className="PageHeaderVideo">
      {video && (
        <video src={video} className="video-hero" playsInline loop autoPlay muted></video>
      )}
    </div>
  )
}

export default PageHeaderVideo