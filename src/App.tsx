import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import ChatBox from "./pages/ChatBox"
import Messages from "./pages/Messages"
import Connections from "./pages/Connections"
import Profile from "./pages/Profile"
import Discover from "./pages/Disvover"
import CreatePost from "./pages/CreatePost"
import Layout from "./pages/Layout"
import { useUser } from "@clerk/clerk-react"

function App() {
  const { user } = useUser()
  return (
    <>
      <Routes>
        <Route path="/" element={ !user ? <Login /> : <Layout />}>
          <Route index element={<Feed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App