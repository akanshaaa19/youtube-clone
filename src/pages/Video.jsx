import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading/Loading";
import fetchFromApi from "../utils/fetchFromAPI";
import SuggestedVideos from "../components/SuggestedVideos";

function Video() {
  const { videoId } = useParams();
  const [snippet, setSnippet] = useState({});
  const [statistics, setStatistics] = useState({});
  useEffect(() => {
    async function getVideo(videoId) {
      fetchFromApi(`videos?part=snippet,statistics&id=${videoId}`, {}).then(
        (data) => {
          setSnippet(data.items[0].snippet);
          setStatistics(data.items[0].statistics);
        }
      );
    }

    getVideo(videoId);
  }, []);

  return (
    <Box paddingX={5} paddingY={4}>
      <Stack direction={{ sm: "column", md: "row" }}>
        <Box flex={1} marginRight={"2rem"}>
          <Box width={"640px"}>
            <ReactPlayer
              sx={{
                md: { width: "713px", height: "401px" },
                sm: { width: "100%" },
              }}
              className="react-player"
              controls={true}
              url={`https://www.youtube.com/watch?v=${videoId}`}
            />
            <Typography color="#fff" variant="h6" fontWeight="bold" my={2}>
              {snippet.title ? snippet.title : ""}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
            >
              <Link to={`/channel/${snippet.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                  p={0}
                >
                  {snippet.channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

              <SuggestedVideos videoId = {videoId} />
        
      </Stack>
    </Box>
  );
}

export default Video;
