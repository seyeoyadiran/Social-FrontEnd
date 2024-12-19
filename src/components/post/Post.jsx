import "./post.css";
import More from "./imgs/more.png"
import Image1 from "./imgs/liftGym.avif"
import Me from "./imgs/Me.png";
import Heart from "./imgs/heart.png"
import Like from "./imgs/like.png"
export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                     <img src={Image1} alt="" className="postProfileImg" />
                     <span className="postUsername">Seye Oyadiran</span>
                     <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                <img src={More} alt="" />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first POst</span>
                <img  className="postImg" src={Image1} alt="" />
            </div>
            <div className="postBottom">
            <div className="postBottomLeft">
                <img src={Heart}alt="" className="likeIcon" />
                <img src={Like} alt="" className="likeIcons" /> 
                <span className="postLikeCounter"> 32 People liked it</span>            
                </div>
            </div> 
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
