'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo({ videoSrc, scrollFactor = 80 }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let ticking = false;

    const updateVideoTime = (progress) => {
      if (video.duration) {
        video.currentTime = progress * video.duration;
      }
    };

    const setupScroll = () => {
      // Calculate container height dynamically
      const height = video.duration * scrollFactor + window.innerHeight;
      container.style.height = `${height}px`;

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => container.offsetHeight,
        scrub: 0.5,
        pin: true,
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
  }, [scrollFactor]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <video
        ref={videoRef}
        src={videoSrc}
        style={{ width: "100%", position: "sticky", top: 0 }}
        preload="metadata"
        muted
        playsInline
        loop
        controls={false}
      />
    </div>
  );
}