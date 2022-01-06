import * as React from 'react'

import styled from 'styled-components'


const VideoSection = ( { videoURL, className } ) => {
  return (
      <section className={ className }>
        <div className="video-container">
          <div className="video-responsive">
            <iframe
                title="Video"
                src={ videoURL }
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
          </div>
        </div>
      </section>
  )
}

export default styled( VideoSection )`
  width: 100%;
  min-height: calc(100vh - 80px);
  background-position: center;
  opacity: 1 !important;
  display: flex;
  justify-content: ${ props => (props.home ? 'flex-start' : 'center') };
  align-items: ${ props => (props.home ? 'flex-start' : 'center') };
  .video-container {
     overflow: hidden;
     margin: 16px;
     width: 100%;
   }
   .video-responsive {
      height: 0;
      overflow: hidden;
      padding-bottom: 56.25%;
      padding-top: 30px;
      position: relative;
    }
iframe, object, embed {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
`



