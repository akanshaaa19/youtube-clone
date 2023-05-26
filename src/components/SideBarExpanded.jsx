import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Box, Stack } from "@mui/material";
import Home from "../icons/Home";
import Shorts from "../icons/Shorts";
import Subscription from "../icons/Subscription";
import Library from "../icons/Library";
import History from "../icons/History";
import YourVideos from "../icons/YourVideos";
import YourCourses from "../icons/YourCourses";
import WatchLater from "../icons/WatchLater";
import YourClips from "../icons/YourClips";
import LikedVideos from "../icons/LikedVideos";
import Logo from "../icons/Logo";

function BackDrop(props) {
  return (
    <div
      onClick={() => {
        props.setShowSideBar(false);
      }}
      className="backdrop fixed top-0 left-0 w-screen h-screen z-10 bg-[#000000a1]"
    >
      {props.children}
    </div>
  );
}

function SideBarLayover(props) {
  const categories = [
    {
      group: 1,
      elements: [
        { icon: <Home />, name: "Home" },
        { icon: <Shorts />, name: "Shorts" },
        { icon: <Subscription />, name: "Subscriptions" },
      ],
    },
    {
      group: 2,
      elements: [
        { icon: <Library />, name: "Library" },
        { icon: <History />, name: "History" },
        { icon: <YourVideos />, name: "Your Videos" },
        { icon: <YourCourses />, name: "Your Courses" },
        { icon: <WatchLater />, name: "Watch Later" },
        { icon: <YourClips />, name: "Your Clips" },
        { icon: <LikedVideos />, name: "Liked Videos" },
      ],
    },
  ];
  return (
    <Box width="20vw" className="layover h-screen fixed bottom-0 left-0 z-20 bg-[#121212]">
      <div className="start flex items-center ml-3">
        <div
          className="p-4"
          onClick={() => {
            props.setShowSideBar(false);
          }}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </div>
        <div className="flex items-center px-4">
          <Logo />
        </div>
      </div>
      <Stack sx={{ flexDirection: "column", padding: "12px" }}>
        {categories.map((category) => {
          return (
            <div className="cursor-pointer">
              {category.elements.map((item) => {
                return (
                  <Stack
                    sx={{
                      flexDirection: "row",
                      paddingX: "12px",
                      paddingY: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div className="mr-6">{item.icon}</div>
                    <div className="text-sm">{item.name}</div>
                  </Stack>
                );
              })}
              <div
                style={{
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2",
                  marginTop: "12px",
                  marginBottom: "12px",
                }}
              ></div>
            </div>
          );
        })}
      </Stack>
    </Box>
  );
}

function SideBarExpanded(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop setShowSideBar={props.setShowSideBar} />,
        document.getElementById("modal-hook")
      )}
      {ReactDOM.createPortal(
        <SideBarLayover setShowSideBar={props.setShowSideBar} />,
        document.getElementById("modal-hook")
      )}
    </Fragment>
  );
}

export default SideBarExpanded;
