import { useEffect, useState } from "react";
import Tags from "../components/Tags";
import axios from "axios";
import Videos from "../components/Videos";
import { Box, Stack, Typography } from "@mui/material";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Pagination";
import fetchFromApi from "../utils/fetchFromAPI";

function Feed() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = videos.slice(firstPostIndex, lastPostIndex);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    fetchFromApi("search", {
      q: selectedCategory,
      part: "snippet,id",
      regionCode: "US",
      maxResults: "100",
      order: "date",
    }).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <section className="py-2">
      <Tags
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box px={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            
            sx={{ color: "white" }}
          >
            {selectedCategory} <span style={{ color: "#FC1503" }}> videos</span>
          </Typography>
          <Typography variant="subtitle2" color="#aaaaaa" fontWeight={"semibold"} mb={2}>
            Page {currentPage}
          </Typography>

          {loading ? <Loading /> : <Videos videos={currentPosts} />}
        </Box>
      </Stack>
      <div className="text-white text-center py-4 mb-2pagination">
        {/* <Pagination color={"primary"} count={10} /> */}
        <Pagination
          postsPerPage={postPerPage}
          totalPosts={videos.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default Feed;
