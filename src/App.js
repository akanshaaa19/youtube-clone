import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'
import Layout from "./components/Layout";
import Feed from "./pages/Feed";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Video from "./pages/Video";
import Channel from "./pages/Channel";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
function App() {
  

  return <HashRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/channel/:channelId" element={<Channel />} />
        <Route path="/search/:searchInput" element= {<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </HashRouter>;
}

export default App;
