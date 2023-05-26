import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import Loading from "./Loading/Loading";

function ChannelCard({ channelDetail, marginTop }) {
  if (!channelDetail) {
    return <Loading />;
  } else {
    return (
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          display: "flex",

          alignItems: "center",
          // width: { xs: "356px", md: "320px" },
          height: "326px",
          margin: "auto",
          // marginTop,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            // textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail.snippet.thumbnails.high.url
                ? channelDetail.snippet.thumbnails.high.url
                : channelDetail.snippet.thumbnails.medium.url
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              marginRight: "1rem",
              border: "1px solid #e3e3e3",
            }}
          />
          <Box width={"75%"}>
            <Typography variant="h6">
              {channelDetail?.snippet?.title}{" "}
            </Typography>
            <Box sx={{ display: "flex", width: "100%" }}>
              <Typography variant="subtitle2" color="#aaaaaa" marginRight={"1rem"}>
                {channelDetail?.snippet?.customUrl}{" "}
              </Typography>
              {channelDetail?.statistics?.subscriberCount && (
                <div>
                <Typography
                
                  sx={{ fontSize: "15px", fontWeight: 500, color: "gray"}}
                >
                  {parseInt(
                    channelDetail?.statistics?.subscriberCount
                  ).toLocaleString("en-US")}{" "}
                  Subscribers
                </Typography></div>
              )}
            </Box>
            <div className="hidden sm:flex">{channelDetail.snippet.description && <Typography variant="subtitle2" marginY="1rem" sx= {{display: {sm: "hidden"}}}>
              {channelDetail?.snippet?.description}
            </Typography>}</div>
          </Box>
        </CardContent>
      </Box>
    );
  }
}

export default ChannelCard;
