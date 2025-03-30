import React from 'react';
import VideoComponent from './VideoComponent';

const VideoPopup = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 pointer-events-none">
      <div className="bg-white relative pointer-events-auto max-w-screen-lg p-4 rounded-md">
        <button onClick={onClose} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.364 3.364a.5.5 0 01.708 0L10 9.293l5.929-5.93a.5.5 0 01.707.708L10.707 10l5.93 5.929a.5.5 0 01-.708.707L10 10.707l-5.929 5.93a.5.5 0 01-.707-.708L9.293 10 3.364 4.071a.5.5 0 010-.708z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <VideoComponent videoLink={videoUrl}/>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
