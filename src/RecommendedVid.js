import React from 'react'
import "./RecommendedVid.css"
import VideoCard from './VideoCard.js'
// import { fetchAPI } from './fetchAPI'

import image1 from "../src/Assets/hq7201.webp"
import image2 from "../src/Assets/hq7202.webp"
import image3 from "../src/Assets/hq7203.webp"
import image4 from "../src/Assets/hq7204.webp"
import image5 from "../src/Assets/hq7205.webp"
import image6 from "../src/Assets/hq720.webp"
import image7 from "../src/Assets/hqdefault.webp"
import image8 from "../src/Assets/hqdefault1.webp"
import image9 from "../src/Assets/hqdefault2.webp"

function RecommendedVid() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a80e7b994dmsh426bf79edf2c292p1f27d8jsncf87f6214b71',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };
  
  fetch('https://youtube-v3-alternative.p.rapidapi.com/video?id=dQw4w9WgXcQ', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
  return (
    <div className='recommendedVid'>
      {/* <h1><span className='red'>Recommended</span> <span className='black'> Videos</span></h1> */}
      <div className='recommendedVid__videos'>
        <VideoCard
          title=" Let's Build a YouTube Clone with REACT JS for Beginners"
          image={image7}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title="RIHA by Anuv Jain(studio)"
          image={image1}
          views="10M Views"
          timestamp="3 years ago"
          cahnnelImage="fdghdf"
          channel="Anuv Jain"
        />
        <VideoCard
          title="15 Graphic Design Trends for 2023"
          image={image2}
          views="194K Views"
          timestamp="2 months ago"
          cahnnelImage="fdghdf"
          channel="Philip VanDusen"
        />
        <VideoCard
          title="Unboxing LG's Mind Blowing 8K 88-inch OLED Beast"
          image={image3}
          views="8.4M Views"
          timestamp="2 years ago"
          cahnnelImage="fdghdf"
          channel="Unbox Therapy"
        />
        <VideoCard
          title=" Spring- Blender Open Movie"
          image={image4}
          views="2.3M Views"
          timestamp="1 year ago"
          cahnnelImage="fdghdf"
          channel="Blender Studio"
        />
        <VideoCard
          title=" Let's Build a YouTube Clone with REACT JS for Beginners REACT JS for Beginners"
          image={image5}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title="15 Graphic Design Trends for 2023"
          image={image6}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Flying Beast"
        />
        <VideoCard
          title=" Let's Build a YouTube Clone with REACT JS for Beginners"
          image={image9}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title="Avicii, Dua Lipa, Coldplay, Martin Garrix & Kygo, The Chainsmokers Style"
          image={image8}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title=" Let's Build a YouTube Clone with REACT JS for Beginners"
          image={image2}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title=" Let's Build a YouTube Clone with REACT JS for Beginners"
          image={image2}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title=" Let's Build a YouTube Clone with REACT JS for Beginners REACT JS for Beginners"
          image={image2}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title=" Let's Build a YouTube Clone with REACT JS for Beginners"
          image={image1}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title="15 Graphic Design Trends for 2023"
          image={image6}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Flying Beast"
        />
        <VideoCard
          title=" Let's Build a YouTube Clone with REACT JS for Beginners"
          image={image9}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title="Avicii, Dua Lipa, Coldplay, Martin Garrix & Kygo, The Chainsmokers Style"
          image={image8}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title=" Let's Build a YouTube Clone with REACT JS for Beginners"
          image={image2}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
        <VideoCard
          title=" Let's Build a YouTube Clone with REACT JS for Beginners"
          image={image2}
          views="2.3M Views"
          timestamp="19 Minutes ago"
          cahnnelImage="fdghdf"
          channel="Sunny Sangjha"
        />
      </div>
    </div>
  )
}

export default RecommendedVid