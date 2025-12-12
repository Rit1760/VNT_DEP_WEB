

'use client';

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo({ videoSrc }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let ticking = false;

    const updateVideoTime = (progress) => {
      if (!video.duration) return;
      video.currentTime = Math.pow(progress, 0.6) * video.duration;
    };

    const setupScroll = () => {
      container.style.height = `100vh`;

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom top",  
        scrub: 2.5,    
        pin: true,      
        pinSpacing: false, 
        onUpdate: (self) => {
          if (!ticking) {
            requestAnimationFrame(() => {
              updateVideoTime(self.progress);
              ticking = false;
            });
            ticking = true;
          }
        },
      });
    };

    if (video.readyState >= 1) {
      setupScroll();
    } else {
      video.addEventListener("loadedmetadata", setupScroll);
    }

    return () => {
      video.removeEventListener("loadedmetadata", setupScroll);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <video
        ref={videoRef}
        src={videoSrc}
        style={{ width: "100%" }}
        preload="metadata"
        muted
        playsInline
        loop={false}
        controls={false}
      />
    </div>
  );
}