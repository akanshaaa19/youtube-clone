import { useParams } from "react-router-dom";
import Videos from "../components/Videos";
import { useEffect, useState } from "react";
import fetchFromApi from "../utils/fetchFromAPI";
import { Box, Stack } from "@mui/material";

function Search() {
  const [videos, setVideos] = useState([]);
  const { searchInput } = useParams();

  useEffect(() => {
    console.log(searchInput);
    fetchFromApi("search", {
      q: searchInput,
      part: "snippet,id",
      regionCode: "US",
      maxResults: "100",
      order: "date",
    }).then((data) => {
      setVideos(data.items);
    });
  }, [searchInput]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box px={2} py={4} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Search;
