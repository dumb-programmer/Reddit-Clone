import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, logout, registerAuthObserver } from "../firebase";
import "../styles/Home.css";
import CreateCommunityModal from "./CreateCommunityModal";

const Home = ({ user, setUser }) => {
    const [logoutDisabled, setLogoutDisabled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.stopPropagation();
        setLogoutDisabled(true);
        await logout();
        navigate("/");
    }

    useEffect(() => {
        window.addEventListener("click", () => {
            if (showDropdown) {
                setShowDropdown(false);
            }
        });

        const unsub = registerAuthObserver((user) => {
            setUser(user);
        });

        return () => unsub();
    });

    return (
        <>
            <header className="nav-bar">
                <div className="logo">
                    <svg className="SVG-icon SnooIcon" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 20 20">
                        <g>
                            <circle fill="#ff4500" cx="10" cy="10" r="10" />
                            <path fill="#fff" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z" />
                        </g>
                    </svg>
                </div>
                <input type="text" id="search-bar" placeholder="Search Reddit" />
                <div className="header-btns">
                    {
                        isLoggedIn() ? (
                            <>
                                <div className="user-dropdown" styles={{ marginRight: "5px" }} onClick={(e) => { e.stopPropagation(); setShowDropdown(prev => !prev) }}>
                                    <img src="https://preview.redd.it/j6n0dp5c5bu71.png?width=256&format=png&auto=webp&s=e6ce31875458e6f094b997ea4fbf32e93dc4af81" height="30px" width="30px" alt="user-avatar" />
                                    <span>{user.username}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888b8d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>
                                {
                                    showDropdown && <div className="dropdown">
                                        <ul>
                                            <li className="dropdown-link">Profile</li>
                                            <li className="dropdown-link" onClick={!logoutDisabled ? handleLogout : null}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Logout</li>
                                        </ul>
                                    </div>
                                }
                            </>
                        ) :
                            <>
                                <button className="btn" id="sign-up-btn" onClick={() => navigate("signup")}>Sign Up</button>
                                <button className="btn" id="login-btn" onClick={() => navigate("login")}>Log In</button>
                            </>
                    }
                </div>
            </header>
            <main className="posts-container">
                {
                    showModal && <CreateCommunityModal user={user} onExit={() => setShowModal(false)} />
                }
                <div className="posts">
                    {Array.from({ length: 10 }).map((idx) => (
                        <div key={idx} className="post">
                            <div className="post-sidebar">
                                <button className="upvote-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></button>
                                <p>26.4k</p>
                                <button className="downvote-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></button>
                            </div>
                            <div className="post-main">
                                <div className="post-header">
                                    <p>
                                        <b>r/AskReddit</b>
                                        <span> Posted by u/dog_red472 15 hrs ago </span>
                                    </p>
                                </div>
                                <div className="post-title"><h3>Hello There</h3></div>
                                <div className="post-body"></div>
                            </div>
                        </div>))}
                </div>
                {
                    isLoggedIn() && <aside className="main-btns">
                        <img src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png" alt="banner art" />
                        <div style={{ display: "flex" }}>
                            <img id="reddit-avatar" src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png" height="68px" width="40px" alt="reddit avatar" />
                            <span><h3 style={{ marginLeft: 10 }}>Home</h3></span>
                        </div>
                        <p style={{ marginLeft: 10, borderBottom: "1px solid #eeeeef", paddingBottom: 10 }}>Your personal Reddit frontpage. Come here to check in with your favorite communities.</p>
                        <div style={{ padding: "0 10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                            <button className="primary-btn">Create Post</button>
                            <button className="secondary-btn" onClick={() => setShowModal(true)}>Create Community</button>
                        </div>
                    </aside>
                }
            </main >
        </>
    );
};

export default Home;