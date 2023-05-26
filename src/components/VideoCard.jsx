import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  const videoId = video.id.videoId;
  const snippet = video.snippet;
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "458px", md: "359px" },
        boxShadow: "none",
        background: "#121212",
        outline: "none",
      }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          alt={snippet.title}
          sx={{
            width: 420,
            height: 202,
            backgroundPosition: "start",
            borderRadius: "10px",
          }}
          image={
            snippet.thumbnails.high.url
              ? snippet.thumbnails.high.url
              : "https://i.ibb.co/G2L2Gwp/API-Course.png"
          }
        ></CardMedia>{" "}
      </Link>

      <CardContent
        sx={{ height: "106px", backgroundColor: "#121212", paddingLeft: "0" }}
      >
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="#fff">
            {snippet.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet.channelId}`}>

          <Typography variant="subtitle2" color="gray">
            {snippet.channelTitle}
            {/* <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} /> */}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
