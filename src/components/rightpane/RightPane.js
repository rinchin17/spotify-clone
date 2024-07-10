import React, {useState} from "react";

function Right(){
    
    const [isHovered, setHovered] = useState(false);
    
    const focus = (event) =>{
        setHovered(true);

    };

    const remove = (event) =>{
        setHovered(false);
    };

    return(
    <div className="right">
        <div className="left-list">
            <div className="right-top">
                <p className="md">playlist.</p>
                <div>
                    <i className="fa-solid fa-ellipsis"></i>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div className="banner">
                <div className="banner-top">
                    <div className="song-details">
                        <p className="song-name xl">Heather</p>
                        <p className="song-artist">Conan Gray</p>
                    </div>
                    <i className="fa fa-check check" aria-hidden="true"></i>
                </div>
                <div className="banner-img">
                    <img src="https://m.media-amazon.com/images/I/81RlWe2SiNL._UF1000,1000_QL80_.jpg"></img>
                    <p className="md">About the artist</p>
                </div>
                <div className="tools">
                    <i className="active fa-solid fa-play"></i>
                    <i className="fa-solid fa-headset"></i>
                    <i className="fa-solid fa-bars-staggered"></i>
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <i className="fa-solid fa-volume-high"></i>
                    <input className="line" type="range"/>
                    
                    {/* <div onMouseLeave={remove} onMouseEnter={focus} className="line" id="line">
                    {isVisible? <div className="ball" id="ball"></div>: ""
                    } */}
                    
                    
                    {/* </div> */}
                    <i className="fa-regular fa-rectangle-list"></i>
                    <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Right;