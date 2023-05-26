import { useEffect, useState } from "react";
import fetchFromApi from "../utils/fetchFromAPI";
import { Box, CardMedia, Stack, Typography } from "@mui/material";

function SuggestedVideos({ videoId }) {
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  useEffect(() => {
    fetchFromApi("search", {
      relatedToVideoId: videoId,
      part: "id,snippet",
      type: "video",
      maxResults: "10",
    }).then((data) => {
      setSuggestedVideos(data.items);
    });
  }, [videoId]);
  
  return (
    <Box>
      <Stack>
        {suggestedVideos.map((video) => {
          return (
            <Stack flexDirection={"row"} marginBottom="8px">
              <div
                style={{
                  height: "94px",
                  width: "168px",
                  marginRight: "1rem",
                }}
              >
                <CardMedia
                  alt={video.snippet.title}
                  sx={{
                    width: 168,
                    height: 94,
                    backgroundPosition: "center",
                    borderRadius: "10px",
                  }}
                  image={
                    video.snippet.thumbnails.high.url
                      ? video.snippet.thumbnails.high.url
                      : "https://i.ibb.co/G2L2Gwp/API-Course.png"
                  }
                ></CardMedia>
              </div>
              <Box>
                <Typography
                  color="#fff"
                  variant="subtitle2"
                  fontWeight={"bold"}
                  fontSize={"14px"}
                  marginBottom="4px"
                >
                  {video.snippet.title.slice(0, 40)}
                </Typography>
                <Typography
                  color="#aaaaaa"
                  variant="subtitle2"
                  fontSize={"12px"}
                >
                  {video.snippet.channelTitle}
                </Typography>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}

export default SuggestedVideos;
