 import "./sidebar.css";
import Icon from "./imgs/feed.png";
import Avi from "./imgs/avaimg.png"

 export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <img src={Icon} alt="" className="sidebarIcon" />
                        <span className="feedListItemText">Feed  </span>
                    </li>
                    <li className="sidebarListItem">
                        <img src={Icon} alt=""  className="sidebarIcon" />
                        <span className="feedListItemText">Chat  </span>
                    </li>

                    <li className="sidebarListItem">
                        <img src={Icon} alt="" className="sidebarIcon" />
                        <span className="feedListItemText">Videos  </span>
                    </li>

                    <li className="sidebarListItem">
                        <img src={Icon} alt="" className="sidebarIcon" />
                        <span className="feedListItemText">Locations  </span>
                    </li>

                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="siddbarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Seye O</span   >
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Seye O</span   >
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Seye O</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Seye O</span   >
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                    <img src={Avi} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
 }