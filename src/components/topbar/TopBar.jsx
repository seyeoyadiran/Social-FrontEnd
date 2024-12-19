import "./topbar.css"
import Search from "./icons/search.png"
import Person from "./icons/person.png"
import Chat from "./icons/chat.png"
import Noti from "./icons/noti.png"
import Avi from "./icons/avaimg.png"

export default function Topbar(){
    return(
        <div>
            <div className="topbarContainer">
                <div className="topBarLeft">
                    <span className = "logo"> Gym Social </span>
                </div>
                <div className="topBarCenter">
                    <div className="searchbar">
                       <img src={Search} alt="" className="searchIcon"/>
                       <input placeholder="Search for friend, post or video" className="searchInput" />
                    </div>
                </div>
                <div className="topBarRight"> 
                    <div className="topbarLinks">
                        <span className="topbarLink">HomePage</span>
                        <span className="topbarLink">TimeLine</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <span className="topBarIconBadge">
                                <img src={Person} alt="" className="topbarImg" />
                                1</span>
                        </div>
                        <div className="topbarIconItem">
                            <span className="topBarIconBadge">
                                <img src={Chat} alt="" className="topbarImg" />
                                2</span>
                        </div>
                        <div className="topbarIconItem">
                            <span className="topBarIconBadge">
                                <img src={Noti} alt="" className="topbarImg" />
                                1</span>
                        </div>
                    </div>
                    <img src={Avi} alt="" className="topbarImg" />
                </div>
            </div>
        </div>
    )
}