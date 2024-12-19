import "./rightbar.css";
import Gym from "./img/esporta.jpg"
import Ava from "./img/avaimg.png"

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Seye O</b> and <b> 6 other friends </b> started a workout today
            </span>
          </div>
          <img src={Gym} alt="" className="rightBarAd"  />
          <h4 className="rightbarTitle"> Online Friends </h4>
          <ul className="rightbarFriendList">
            <li className="rightBasrFriend"> 
              <div className="rightbarProfileImgContainer">
                <img src={Ava} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"> </span>
              </div>
              <span className="rightbarUsername"> John Carter</span>
            </li>
            <li className="rightBasrFriend"> 
              <div className="rightbarProfileImgContainer">
                <img src={Ava} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"> </span>
              </div>
              <span className="rightbarUsername"> John Carter</span>
            </li>
            <li className="rightBasrFriend"> 
              <div className="rightbarProfileImgContainer">
                <img src={Ava} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"> </span>
              </div>
              <span className="rightbarUsername"> John Carter</span>
            </li>
            <li className="rightBasrFriend"> 
              <div className="rightbarProfileImgContainer">
                <img src={Ava} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"> </span>
              </div>
              <span className="rightbarUsername"> John Carter</span>
            </li>
            <li className="rightBasrFriend"> 
              <div className="rightbarProfileImgContainer">
                <img src={Ava} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"> </span>
              </div>
              <span className="rightbarUsername"> John Carter</span>
            </li>
            <li className="rightBasrFriend"> 
              <div className="rightbarProfileImgContainer">
                <img src={Ava} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"> </span>
              </div>
              <span className="rightbarUsername"> John Carter</span>
            </li>
            <li className="rightBasrFriend"> 
              <div className="rightbarProfileImgContainer">
                <img src={Ava} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"> </span>
              </div>
              <span className="rightbarUsername"> John Carter</span>
            </li>
            <li className="rightBasrFriend"> 
              <div className="rightbarProfileImgContainer">
                <img src={Ava} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"> </span>
              </div>
              <span className="rightbarUsername"> John Carter</span>
            </li>
            <li className="rightBasrFriend"> 
              <div className="rightbarProfileImgContainer">
                <img src={Ava} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"> </span>
              </div>
              <span className="rightbarUsername"> John Carter</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
