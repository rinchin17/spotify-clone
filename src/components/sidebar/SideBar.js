import React from "react";

function Left(){
    return(
        <div className="left">
            <div className="left-list"> 
                <div className="buttons">
                    <div className="btn">
                        <i className="fa-solid fa-house fa-xl"></i>
                        <p>Home</p>
                    </div>
                    <div className="btn">
                        <i className="fa-solid fa-search fa-xl"></i>
                        <p>Search</p>   
                    </div>
                </div>
                <div className="library">
                    <div className="lib-top">
                        <i className="fa-brands fa-spotify fa-xl"></i>
                        <span>Your Library</span>
                        <i className="fa-solid fa-add fa-xl"></i>
                        <i className="fa-solid fa-arrow-right fa-xl"></i>
                    </div>
                    <div className="lib-bottom">
                            <p className="round-btn">Playlists</p>
                            <p className="round-btn">Albums</p>
                            <p className="round-btn">Podcasts</p>
                            <p className="round-btn">Live</p>
                    </div>

                </div>
                <div className="songs">
                    <div className="sm-song">
                        <img src="https://ew.com/thmb/SKAlYZLJynOVwTzEz8T2nJ-tolY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Coldplay-3000px-Credit-James-Marcus-Haney-scaled-1-55069bb709904a4aaba6cd2e5a3d7f13.jpg"></img>
                        <div>
                            <p className="song-name">Adventure of a lifetime</p>
                            <p className="song-artist">Coldplay</p>
                        </div>
                    </div>
                    <div className="sm-song">
                        <img src="https://i.scdn.co/image/ab67616d0000b2731e4429a14d693b418b198056"></img>
                        <div>
                            <p className="song-name">Is it just me?</p>
                            <p className="song-artist">Sasha Sloan</p>
                        </div>
                    </div>
                    <div className="sm-song">
                        <img src="https://burningblogger.com/wp-content/uploads/2024/06/eminemh0udiniart-1.jpg"></img>
                        <div>
                            <p className="song-name">Houdini</p>
                            <p className="song-artist">Enimen</p>
                        </div>
                    </div>
                    <div className="sm-song">
                        <img src="https://cdns-images.dzcdn.net/images/cover/b8a9d82432964ab1e3259fd498faa7ae/350x350.jpg"></img>
                        <div>
                            <p className="song-name">Here's Hopin'</p>
                            <p className="song-artist">JP Saxe</p>
                        </div>
                    </div>
                    <div className="sm-song">
                        <img src="https://i.scdn.co/image/ab67616d00001e02372da95cca579704703e35cd"></img>
                        <div>
                            <p className="song-name">Alonica</p>
                            <p className="song-artist">LANY</p>
                        </div>
                    </div>
                    <div className="sm-song">
                        <img src="https://i.scdn.co/image/ab67616d0000b2735355919e31efac9b14c45c49"></img>
                        <div>
                            <p className="song-name">Never Not</p>
                            <p className="song-artist">Lauv</p>
                        </div>
                    </div>
                    <div className="sm-song">
                        <img src="https://cdns-images.dzcdn.net/images/cover/b8a9d82432964ab1e3259fd498faa7ae/350x350.jpg"></img>
                        <div>
                            <p className="song-name">Here's Hopin'</p>
                            <p className="song-artist">JP Saxe</p>
                        </div>
                    </div>
                    <div className="sm-song">
                        <img src="https://i.scdn.co/image/ab67616d00001e02372da95cca579704703e35cd"></img>
                        <div>
                            <p className="song-name">Alonica</p>
                            <p className="song-artist">LANY</p>
                        </div>
                    </div>
                    <div className="sm-song">
                        <img src="https://i.scdn.co/image/ab67616d0000b2735355919e31efac9b14c45c49"></img>
                        <div>
                            <p className="song-name">Never Not</p>
                            <p className="song-artist">Lauv</p>
                        </div>
                    </div>
                   
                   
                </div>
            </div>
        </div>
    );

}

export default Left;