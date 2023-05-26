import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
  return <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly" gap={2}>
    {videos.map((item, idx)=>{
      return <Box key={idx}>
        <VideoCard video={item} />
      </Box>
    })}
  </Stack>;
}

export default Videos;
