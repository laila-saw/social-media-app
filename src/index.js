import React, { useState } from 'react'; // it's not important after react 17 
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter as Router, 
  Routes, 
  Route,
  Link
} from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.css';
// dynamicdata 
// users 
const Users=[
  {
    id:1,
    profilPicture:"persons/p1.png",
    username:"Laila Ouhamou"
  },
  {
    id:2,
    profilPicture:"persons/p2.png",
    username:"Laila Ouhamou"
  },
  {
    id:3,
    profilPicture:"persons/p3.png",
    username:"Laila Ouhamou"
  },
  {
    id:4,
    profilPicture:"persons/p4.png",
    username:"Laila Saw"
  },
  {
    id:5,
    profilPicture:"persons/p5.png",
    username:"Saw Saw"
  },
  {
    id:6,
    profilPicture:"persons/p6.png",
    username:"Saw Saw"
  },
  {
    id:7,
    profilPicture:"persons/p7.png",
    username:"Saw Saw"
  },
  {
    id:8,
    profilPicture:"persons/p8.png",
    username:"Saw Saw"
  },
  {
    id:9,
    profilPicture:"persons/p9.png",
    username:"Saw Saw"
  },
  {
    id:10,
    profilPicture:"persons/p10.png",
    username:"Albert Smeeth"
  }
];
// !users 
// posts 
const Posts=[
  {
    id:1,
    photo:"posts/p1.png",
    date:"5 min ago",
    userId:1,
    like:132,
    comment:10
  },
  {
    id:2,
    desc:"Hi ! this is my post ",
    photo:"posts/p2.png",
    date:"Yesterday",
    userId:4,
    like:40,
    comment:19
  },
  {
    id:3,
    desc:"hello friends . post 3",
    photo:"posts/p3.png",
    date:"Just now",
    userId:5,
    like:36,
    comment:1
  },
  {
    id:4,
    desc:"hello friends .  post 4",
    date:"15 min ago",
    userId:6,
    like:2,
    comment:2
  },
  {
    id:5,
    desc:"hello friends . post 5",
    photo:"posts/p5.png",
    date:"2 days ago",
    userId:7,
    like:52,
    comment:3
  },
  {
    id:6,
    desc:"Hello it's My First Post .",
    photo:"posts/p6.png",
    date:"1 day ago",
    userId:2,
    like:19,
    comment:4
  },
  {
    id:7,
    desc:"hello friends . post 7",
    photo:"posts/p7.png",
    date:"1 Houre ago",
    userId:3,
    like:20,
    comment:5
  },
  {
    id:8,
    desc:"hello friends . post 8",
    photo:"posts/p8.png",
    date:"1 Houre ago",
    userId:3,
    like:19,
    comment:6
  },
  {
    id:9,
    desc:"hello friends . post 9",
    photo:"posts/p9.png",
    date:"1 Houre ago",
    userId:3,
    like:42,
    comment:7
  }
]
// !posts 
// dynamicdata 
ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/profile/:username" element={<Profile/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
function Home(){
  return(
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
  )
}
// component
// topbar
function Topbar(){
  return(
    <>
    <input
            hidden
            className="searchbarControllerInput"
            type="checkbox"
            name="searchbarController"
            id="searchbarController" />
    <div className="topbarContainer">
      <div className="topbarLeft">
      <label htmlFor="sidebarController" className="controlerSidbar">
          <span className="center"></span>
          <span className="side"></span>
        </label>
        <Link to="/">
        <span className="logo">AwesomeApp</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <input 
              placeholder="Search for friend, post or video" 
              type="text" 
              className="searchInput" />
              <label htmlFor="searchbarController" className="fa fa-search"></label>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <i className="fa fa-user"></i>
            <span className="topIconBage">1</span>
          </div>
          <div className="topbarIconItem">
            <i className="fa fa-comment"></i>
            <span className="topIconBage">2</span>
          </div>
          <div className="topbarIconItem">
            <i className="fa fa-bell"></i>
            <span className="topIconBage">3</span>
          </div>
          <label 
          htmlFor="rightbarController"
          title="online friends" 
          className="topbarIconItem rightbarController">
          <i className="fas fa-user-friends"></i>
            <span style={{backgroundColor:"var(--successColor)"}} className="topIconBage"></span>
          </label>
        </div>
        <Link to="/profile/:userId">
        <img
          src="/assets/persons/p1.png"
          alt=""
          className="topbarImg myprofilpic" />
        </Link>
        </div>
    </div>
    </>
  )
}
// !topbar
// sidebar
function Sidebar(){
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return(
    <>
     <input
            hidden
            className="sidebarControllerInput"
            type="checkbox"
            name="sidebarController"
            id="sidebarController" />
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i className="fas fa-rss"></i>
            <span className="text">Feed</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-comment-alt"></i>
            <span className="text">Chats</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-play-circle"></i>
            <span className="text">Videos</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-users"></i>
            <span className="text">Groups</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-bookmark"></i>
            <span className="text">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-question-circle"></i>
            <span className="text">Questions</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-briefcase"></i>
            <span className="text">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-calendar-alt"></i>
            <span className="text">Events</span>
          </li>
          <li className="sidebarListItem">
           <Link to="/login">
           <i className="fas fa-sign-out-alt"></i>
            <span className="text">Log Out</span>
           </Link>
          </li>
        </ul>
        <button className="sidebarBtn">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          {Users.map(u => (
            <li key={u.id} className="sidebarFriend">
              <img src={PF+u.profilPicture} alt="" className="myprofilpic" />
              <span className="name">{u.username}</span>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
    </>
  )
}
// !sidebar
// Feed
function Feed(){
  return(
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map(p=>(
          <Post key={p.id} post={p}/>
        ))}
        
        
      </div>
    </div>
  )
}
// Share 
function Share(){
  return(
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="myprofilpic" src="/assets/persons/p1.png" alt="" />
          <form
            action=""
            className="shareForm">
            <input
              className="shareInput"
              type="text"
              placeholder="What's in your minde Laila?" />
          </form>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
            <i style={{color:"tomato"}} className="shareIcon fa fa-photo-video"></i>
            <span className="optionTxt">Photo or video</span>
            </div>
            <div className="shareOption">
            <i style={{color:"blue"}} className="shareIcon fa fa-tag"></i>
            <span className="optionTxt">Tag</span>
            </div>
            <div className="shareOption">
            <i style={{color:"green"}} className="shareIcon fa fa-map-marker"></i>
            <span className="optionTxt">Location</span>
            </div>
            <div className="shareOption">
            <i style={{color:"goldenrod"}} className="shareIcon fa fa-grin-alt"></i>
            <span className="optionTxt">Feelings</span>
            </div>
          </div>
          <button className="shareBtn">Share</button>
        </div>
      </div>

    </div>
  )
}
// !Share 
// post 
function Post({post}){
  const [isLiked,setIsLiked]=useState(false);
  const [like,setLike]=useState(post.like);
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const likeHandler=()=>{
    setLike(isLiked? like-1:like+1);
    setIsLiked(!isLiked)
  }
  return(
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <Link to="/profile/:username">
          <img
          src={PF+Users.filter(u => u.id===post.userId)[0].profilPicture}
          alt=""
          className="myprofilpic" />
          </Link>
          <span className="postName">{Users.filter(u => u.id===post.userId)[0].username}</span>
          <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <div className="dots">
              <div style={{backgroundColor:"aqua"}} className="dot"></div>
              <div style={{backgroundColor:"tomato"}} className="dot"></div>
              <div style={{backgroundColor:"blue"}} className="dot"></div>
              </div>
              </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post?.desc}</div>
          <img 
            className="postImg"
            src={PF+post?.photo} 
            alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <i onClick={likeHandler} style={{backgroundColor:isLiked && "red",color:"white"}} className="iconLike fas fa-heart"></i>
            <span className="likeCounter"><span className="counter">{like}</span> people like it</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText"><span className="counter">{post.comment}</span> comments</div>
          </div>
        </div>
      </div>
    </div>
  )
}
// !post 
// !Feed
// Rightbar
function Rightbar({profile}){
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar=()=>{
    return (
      <>
      <div className="birthdayContainer">
          <div className="iconGift"><i className="fa fa-gift"></i></div>
          <span className="birthdayText"><b>Mohamed</b> & <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img src="/assets/posts/p2.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="friendList">
          {Users.map(u=>( 
            <li key={u.id} className="friend">
            <div className="imgContainer">
              <img
                src={PF+u.profilPicture}
                alt=""
                className="topbarImg myprofilpic" />
              <span className="rightbarOnline"></span>
            </div>
            <div className="friendName">{u.username}</div>
          </li>
          ) )}
          
        </ul>
      </>
    )
  }
  const ProfileRightbar=()=>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City :</span>
          <span className="rightbarInfoValue">Agadir.</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">from :</span>
          <span className="rightbarInfoValue">Ouarzazate.</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">RelationShip :</span>
          <span className="rightbarInfoValue">Single.</span>
        </div>
      </div>
      {/* <h4 className="rightbarTitle">Experiences Profetionnels</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Date : </span>
          <span className="rightbarInfoValue">Experience</span>
        </div>
        <form action="" className="addItemForm"></form>
        <button className="addItemBtn"><i className="fa fa-plus"></i></button>
      </div>
      <h4 className="rightbarTitle">Formations</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Date : </span>
          <span className="rightbarInfoValue">Formation</span>
        </div>
      </div>
      <button className="addItem"><i className="fa fa-plus"></i></button>
      <h4 className="rightbarTitle">Hobbies</h4>
      <div className="hobbies">
        <div className="hobbie">Programming</div>
        <div className="hobbie">Cooking</div>
        <div className="hobbie">fitness</div>
        <div className="hobbie">watch movies</div>
      </div>
      <button className="addItem"><i className="fa fa-plus"></i></button> */}
      <h4 className="rightbarTitle">Gallery</h4>
      <div className="rightbarGallery rightbarInfo">
        <div className="image">
          <img src="/assets/persons/p1.png" alt="" className="gelleyImg" />
        </div>
        <div className="image">
          <img src="/assets/persons/p2.png" alt="" className="gelleyImg" />
        </div>
        <div className="image">
          <img src="/assets/persons/p3.png" alt="" className="gelleyImg" />
        </div>
        <div className="image">
          <img src="/assets/persons/p4.png" alt="" className="gelleyImg" />
        </div>
        <div className="image">
          <img src="/assets/persons/p5.png" alt="" className="gelleyImg" />
        </div>
        <div className="image">
          <img src="/assets/persons/p6.png" alt="" className="gelleyImg" />
        </div>
        <div className="image">
          <img src="/assets/persons/p7.png" alt="" className="gelleyImg" />
        </div>
        <div className="image">
          <img src="/assets/persons/p8.png" alt="" className="gelleyImg" />
        </div>
        <div className="image">
          <img src="/assets/persons/p9.png" alt="" className="gelleyImg" />
        </div>
        <div className="image">
          <img src="/assets/persons/p10.png" alt="" className="gelleyImg" />
        </div>
      </div>
      </>
    )
  }
  return(
    <>
     <input
            hidden
            className="rightbarControllerInput"
            type="checkbox"
            name="rightbarController"
            id="rightbarController" />
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
    </>
  )
}
// !Rightbar
// profile
function Profile(){
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const [profilImg,setProfilImg]=useState(null)
  return(
       <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
          <div className="profileCoverContainer">
            <img 
          src={`${PF}posts/p6.png` }
          alt="" 
          className="profileCoverImg" />
          <i className="fa fa-camera"></i>
          </div>
        <div className="myprofilpicContainer">
          <img 
          src={profilImg ? URL.createObjectURL(profilImg) : `${PF}persons/p1.png`} 
          alt="" 
          className="myprofilpic" />
          <input 
                type="file" 
                name="profilPic" 
                id="profilPic" 
                accept=".png,.jpeg,.jpg" 
                onChange={(e) => setProfilImg(e.target.files[0])}
                hidden />
                <label htmlFor='profilPic' className="fa fa-camera"></label>
        </div>
        
        </div>
        <div className="profileInfo">
          <h4 className="name">Laila Ouhamou</h4>
          <span className="desc">Hello My friends in AwesomeApp, it's a new social media application</span>
        </div>
      </div>
      <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>
      </div>
      
    </div>
    
    </div>
    </>
  )
}
// !profile
// login 
function Login(){
  return(
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <Link to='/'><h3 className="loginLogo">AwesomeApp.</h3></Link>
          <div className="loginDesc">Connect with friends & the world around you on AwesomeApp.</div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <div className="register">You don't have an account? <span className="registerbtn"><Link to="/register">Sign Up</Link> </span> </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// !login 
// register 
function Register(){
  return(
    <div className="login register">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AwesomeApp.</h3>
          <div className="loginDesc">Connect with friends & the world around you on AwesomeApp.</div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="Email" className="loginInput" />
            <input type="text" placeholder="User Name" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <input type="password" placeholder="Confirme Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <div className="register">You Already have an account? <span className="registerbtn"><Link to="/login">Log In</Link> </span> </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// !register 


