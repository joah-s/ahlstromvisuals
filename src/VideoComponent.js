import React from 'react';

const VideoComponent = ({ videoLink }) => {
  return (
    <div class="">
      <div class="p-6 max-w-lg mx-auto flex items-center space-x-8">
        <div class="snap-start">
          <body class="">
            <div className="iframe-container">
              <iframe
                width="400"
                height="200"
                src={videoLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style={{ width: '450px', height: '250px' }}
              >
              </iframe>
            </div>
          </body>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;