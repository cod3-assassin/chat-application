import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import ProfilePage from "./pages/ProfilePage"; // Import ProfilePage
import ProfileSettings from "./components/Profile/ProfileSettings";

function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Software Developer",
  });

  const [activities] = useState([
    { timestamp: "2024-06-03", description: "Logged in" },
    { timestamp: "2024-06-02", description: "Updated profile" },
    { timestamp: "2024-06-01", description: "Joined a new chat" },
  ]);

  const [conversations] = useState([
    { id: 1, name: "John Doe", lastMessage: "Hey there!" },
    { id: 2, name: "Jane Smith", lastMessage: "How are you?" },
    { id: 3, name: "Skipper", lastMessage: "Hey there!" },
    { id: 4, name: "Kwolski", lastMessage: "How are you?" },
    { id: 5, name: "Private", lastMessage: "Hey there!" },
    { id: 6, name: "Riko", lastMessage: "How are you?" },
    { id: 7, name: "Private", lastMessage: "Hey there!" },
    { id: 8, name: "Riko", lastMessage: "How are you?" },
  ]);

  const [currentChat, setCurrentChat] = useState(null);

  const navigate = useNavigate();

  const selectConversation = (id) => {
    const chat = conversations.find((conv) => conv.id === id);
    setCurrentChat(chat);
    navigate(`/chat/${id}`);
  };

  const sendMessage = (message) => {
    // Add message sending logic here
    console.log(`Message sent: ${message}`);
  };

  const backToHome = () => {
    setCurrentChat(null);
    navigate("/");
  };

  const updateProfile = (updatedData) => {
    setUser(updatedData);
    console.log("Profile updated:", updatedData);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            conversations={conversations}
            selectConversation={selectConversation}
          />
        }
      />
      {currentChat && (
        <Route
          path={`/chat/${currentChat.id}`}
          element={
            <Chat
              chatName={currentChat.name}
              messages={[]}
              sendMessage={sendMessage}
              backToHome={backToHome}
            />
          }
        />
      )}
      <Route
        path="/profile"
        element={
          <ProfilePage
            user={user}
            activities={activities}
            onUpdateProfile={updateProfile}
          />
        }
      />
      <Route
        path="/settings"
        element={<ProfileSettings user={user} onUpdate={updateProfile} />}
      />
    </Routes>
  );
}

export default App;
