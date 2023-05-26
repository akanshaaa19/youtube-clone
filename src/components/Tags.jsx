import { Chip, Stack } from "@mui/material";

function Tags({selectedCategory, setSelectedCategory}) {
  const tags = [
    { name: "New" },
    { name: "Trending" },
    { name: "Computer Programming" },
    { name: "Music" },
    { name: "Education" },
    { name: "Gaming" },
    { name: "Live" },
    { name: "Movies" },
    { name: "Sports" },
    { name: "Podcast" },
    { name: "Beauty" },
    { name: "Motivation" },
    { name: "AI" },
    { name: "Tech" },
    { name: "Food" },
    { name: "News" },
  ];
  return (
    <div className="tags w-full bg-white">
      <Stack py={2}
        sx={{ flexDirection: "row", backgroundColor: "#121212", color: "#fff", overflowX: "auto" }}
      >
        {tags.map((tag) => {
          return <Chip onClick={()=>{setSelectedCategory(tag.name)}} sx={{ color: "#fff", borderRadius: "10px" , backgroundColor: selectedCategory === tag.name ? "red" : "#f1f1f140", marginRight: "0.75rem" }} label={tag.name} />;
        })}
      </Stack>
    </div>
  );
}

export default Tags;
