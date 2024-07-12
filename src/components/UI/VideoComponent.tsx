
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa'; // Import the play icon from react-icons

const VideoComponent = () => {

  return (
    <div className="">
      <h5 className="text-2xl font-semibold mb-4">Video</h5>
      <div id="background-video" className="relative">
       
          <div className="h-[250px] md:h-[400px]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Vdp6x7Bibtk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
       
      </div>
    </div>
  );
};

export default VideoComponent;
