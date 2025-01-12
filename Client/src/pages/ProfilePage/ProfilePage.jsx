import React from "react";
import List from '../../components/List/List';
import Chat from '../../components/Chat/Chat';
import "./ProfilePage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/api/auth/logout");
      localStorage.removeItem('user');
      navigate('/');
    } catch (error) {
      
    }
  }

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
