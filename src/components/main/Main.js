import React from "react";

function Main() {
  return (
    <div className="main">
        <div className="header">
            <div className="fh-top">
                <div className="fht-left">
                    <i className="fa-solid fa-chevron-left fa-lg"></i>
                    <i className="fa-solid fa-chevron-right fa-lg" style={{ color: "grey" }}></i>
                </div>
                <div className="fht-right">
                    <button className="white">Explore Premium</button>
                    <button className="install"><i className="fa-solid fa-download"></i> Install App</button>
                    <i className="fa-regular fa-bell fa-lg"></i>
                    <img className="profile-pic"
                    src="https://i.pinimg.com/280x280_RS/6a/70/94/6a709484e5fdcfcbbfb2c2b0ca70ce92.jpg"></img>
                </div>
            </div>
            <div className="fh-bottom">
            <p className="round-btn white">Playlists</p>
            <p className="round-btn">Albums</p>
            <p className="round-btn">Podcasts</p>
            <p className="round-btn">Live</p>
            </div>
        </div>  
        <div className="scroll">
            <div className="song-banners">
                <div className="s-banner">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAPp4Cyx0uAkK3RupL-EZJ4z-BPsC01kCIoBIbfPlyW208WBn_"></img>
                    <p>taylor.</p>
                </div>

                <div className="s-banner">
                    <img src="https://cdns-images.dzcdn.net/images/cover/9e17c202b5ab081171f31c81eb32dc5d/1900x1900-000000-80-0-0.jpg"></img>
                    <p>greenday.</p>
                </div>
            </div>
            <div>
            <div className="top-info">
                <p className="xl">Made for you.</p>
                <p className="grey">Show all</p>
            </div>
            <div className="gallery">
                <div className="album-art">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYduTPdGR1fkv9r6tLBoUlH7ny-FmOVbbrWw&s"></img>
                    <h3>Greenday</h3>
                </div>
                <div className="album-art">
                    <img src="https://i1.sndcdn.com/artworks-SkDizzRUALiqx8Xs-M9e5Cg-t500x500.jpg"></img>
                    <h3>Linkin Park</h3>
                </div>
                <div className="album-art">
                    <img src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166616,resizemode-75,msid-101221462/magazines/panache/coldplay-jan-2024-concert-in-singapore-has-fans-in-india-excited-spike-in-search-for-hotels-shows-agoda-data.jpg"></img>
                    <h3>Coldplay</h3>
                </div>
                <div className="album-art">
                    <img src="https://i.scdn.co/image/ab67616d0000b2732c0e1e9e1fd1e7b132da1606"></img>
                    <h3>Lauv</h3>
                </div>
            </div>

            <div className="top-info">
                <p className="xl">Your top mixes</p>
                <p className="grey">Show all</p>
            </div>
            <div className="gallery">
                <div className="album-art">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYduTPdGR1fkv9r6tLBoUlH7ny-FmOVbbrWw&s"></img>
                    <h3>Greenday</h3>
                </div>
                <div className="album-art">
                    <img src="https://i1.sndcdn.com/artworks-SkDizzRUALiqx8Xs-M9e5Cg-t500x500.jpg"></img>
                    <h3>Linkin Park</h3>
                </div>
                <div className="album-art">
                    <img src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166616,resizemode-75,msid-101221462/magazines/panache/coldplay-jan-2024-concert-in-singapore-has-fans-in-india-excited-spike-in-search-for-hotels-shows-agoda-data.jpg"></img>
                    <h3>Coldplay</h3>
                </div>
                <div className="album-art">
                    <img src="https://i.scdn.co/image/ab67616d0000b2732c0e1e9e1fd1e7b132da1606"></img>
                    <h3>Lauv</h3>
                </div>
            </div>

            <div className="top-info">
                <p className="xl">Made for you.</p>
                <p className="grey">Show all</p>
            </div>
            <div className="gallery">
                <div className="album-art">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYduTPdGR1fkv9r6tLBoUlH7ny-FmOVbbrWw&s"></img>
                    <h3>Greenday</h3>
                </div>
                <div className="album-art">
                    <img src="https://i1.sndcdn.com/artworks-SkDizzRUALiqx8Xs-M9e5Cg-t500x500.jpg"></img>
                    <h3>Linkin Park</h3>
                </div>
                <div className="album-art">
                    <img src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166616,resizemode-75,msid-101221462/magazines/panache/coldplay-jan-2024-concert-in-singapore-has-fans-in-india-excited-spike-in-search-for-hotels-shows-agoda-data.jpg"></img>
                    <h3>Coldplay</h3>
                </div>
                <div className="album-art">
                    <img src="https://i.scdn.co/image/ab67616d0000b2732c0e1e9e1fd1e7b132da1606"></img>
                    <h3>Lauv</h3>
                </div>
            </div>
        </div>
        

        </div>
        <div className="footer">
            <div className="testing">
                <i class="fa-solid fa-shuffle"></i>
                <i class="fa-solid fa-backward-step"></i>
                <i class="fa-solid fa-circle-pause fa-2xl" style={{color: "white", fontSize: '40px'}}></i>
                <i class="fa-solid fa-forward-step"></i>
                <i class="fa-solid fa-repeat"></i>
            </div>
            <div className="tracker">
                <small>0:15</small>
                <input className="line big" type="range"/>
                <small>3:12</small>
            </div>
        </div>
        
    </div>
  );
}

export default Main;
