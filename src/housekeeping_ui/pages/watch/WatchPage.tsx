import React from "react";
import "./WatchPage.scss";

export default function LoginPage() {
    const videoRef = React.createRef<HTMLVideoElement>();
    const src = "";
    const type = "";

    return (
        <>
            <div className="watch-page">
                <video ref={videoRef} className="watch__video" autoPlay>
                    <source src={src} type={type} />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </>
    );
}