'use client';

import Link from 'next/link';
import Image from 'next/image';
import '../Styles/FourZero.css';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function FourZeroFour() {
  const linkRef = useRef(null);

  useEffect(() => {
    const el = linkRef.current;
    gsap.fromTo(
      el,
      { y: 0 },
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 0.6,
      }
    );
  }, []);

  return (
    <div className="main1_FourZeroFour">
      <div className="container1_FourZeroFour">
        <div className="row1_FourZeroFour">
          <div className="col1_FourZeroFour">
            <h4>404 Page Not Found</h4>
            <h2>
              <span
                style={{
                  color: '#ff6600',
                  borderBottom: '4px solid #ff6600',
                  paddingBottom: '5px',
                }}
              >
                Oops!
              </span>{' '}
              You’ve taken a wrong turn
            </h2>
            <h5>You're almost there — let’s keep moving!</h5>

            <Link href="/">
              <div
                ref={linkRef}
                style={{
                  display: 'inline-block',
                  color: 'black',
                  textDecoration: 'none',
                  padding: '20px 50px',
                  borderRadius: '30px',
                  fontFamily: 'Lato, sans-serif',
                  background: '#fff',
                  fontWeight: '500',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                }}
              >
                Go To HomePage
              </div>
            </Link>
          </div>

          <div className="col2_FourZeroFour">
            <Image
              src="/Images/imagefour.png"
              width={760}
              height={412}
              alt="fourzerofour"
            />
          </div>
        </div>
      </div>
    </div>
  );
}