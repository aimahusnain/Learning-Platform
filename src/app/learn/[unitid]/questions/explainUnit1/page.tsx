import React from 'react'

const page = () => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/flpNSOxSF8U?si=Ag1Ewzjyn5AxrcJj"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
              className='w-full h-screen flex items-center justify-center'
      ></iframe>
    </div>
  );
}

export default page