import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ChannelCard from "../components/ChannelCard";
import { useEffect, useState } from "react";
import fetchFromApi from "../utils/fetchFromAPI";
import Videos from "../components/Videos";

function Channel() {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi("channels", {
      part: "snippet,statistics",
      id: channelId,
    }).then((data) => {
      console.log(data.items[0]);
      setChannelDetails(data.items[0]);
    });

    fetchFromApi("search", {
      channelId: channelId,
      part: "snippet,id",
      order: "date",
      maxResults: "50",
    }).then((data) => {
      setVideos(data.items);
    });
  }, [channelId]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "150px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default Channel;
