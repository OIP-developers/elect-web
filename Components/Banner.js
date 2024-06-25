import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";

const Banner = () => {
    const { push } = useRouter();
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        const handleCanPlay = () => {
            video.muted = true;
            video.play().catch(error => {
                console.log('Autoplay with sound failed, muting the video.', error);
                video.muted = true;
                video.play();
            });
        };

        video.addEventListener('canplaythrough', handleCanPlay);

        return () => {
            video.removeEventListener('canplaythrough', handleCanPlay);
        };
    }, []);

    const handleMuteToggle = () => {
        const video = videoRef.current;
        if (isMuted) {
            video.muted = false;
        } else {
            video.muted = true;
        }
        setIsMuted(!isMuted);
    };

    return (
        <section className="passion banner-section">
            <div className="container-80">
                {/* <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-content">
                            <h1 className="color-green">Perfect Ride
                                Made Easy</h1>
                            <button className="main-btn" >Book Your Destination<FontAwesomeIcon icon={faArrowRight} className="icon" /></button>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="passion-bg-video">
                <video ref={videoRef} autoPlay loop style={{ width: "100%", height: "100%" }} muted>
                    <source src="./Elect.mp4" type="video/mp4" />
                </video>
                <button className="mute-button" onClick={handleMuteToggle}>
                    <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} size="2x" />
                </button>
            </div>
        </section>
    );
}

export default Banner;
