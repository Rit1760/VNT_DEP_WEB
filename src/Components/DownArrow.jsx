

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'
import "../Styles/DownArrow.css"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function DownArrow() {
    const upDownArrowRef = useRef(null);

    useEffect(() => {
        gsap.to(upDownArrowRef.current, {
            y: -10,
            opacity: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 0.8,
            color:"#ff6600"
        });
    }, []);

    return (
        <div className="container1_DownArrow">
            <div className="col1_DownArrow" ref={upDownArrowRef}>
                <FontAwesomeIcon icon={faDownLong} fontSize={32} />
            </div>
        </div>
    );
}