import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper"></div>
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
