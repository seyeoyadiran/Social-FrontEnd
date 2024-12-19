import "./post.css";
import More from "./imgs/more.png"
import Image1 from "./imgs/liftGym.avif"
import Me from "./imgs/Me.png";
import Heart from "./imgs/heart.png"
import Like from "./imgs/like.png"
import {Users} from '../../../dummyData'

export default function Post({post}) {
  
  
  
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                     <img src={Image1} alt="" className="postProfileImg" />
                     <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
                     <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                <img src={More} alt="" />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img  className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
            <div className="postBottomLeft">
                <img src={Heart}alt="" className="likeIcon" />
                <img src={Like} alt="" className="likeIcons" /> 
                <span className="postLikeCounter"> {post.like}</span>            
                </div>
            </div> 
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment}</span>
            </div>
        </div>
      </div>
    </div>
  )
}
