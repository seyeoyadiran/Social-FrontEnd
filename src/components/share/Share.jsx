import "./share.css";
import Media from "./imgs/media.png";
import Image1 from "./imgs/liftGym.avif";
import Happy from "./imgs/Happy.png"
import Location from "./imgs/location.png"
import Tag from "./imgs/tag.png"
import Me from "./imgs/Me.png";

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={Me} alt="" className="shareProfileImg" />
                <input placeholder="What's in your mind Seye" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                        <img src={Media}  alt="" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <img src={Tag} alt="" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <img src={Location} alt="" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <img src={Happy} alt="" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share Button</button>
            </div>
        </div>
    </div>
  )
}
