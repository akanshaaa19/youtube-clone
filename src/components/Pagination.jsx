import { Stack } from "@mui/material";

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center bg-[#1e1e1e">
      <Stack sx={{ flexDirection: "row" }}>
        <div onClick={()=>{paginate(--currentPage)}} className={`cursor-pointer h-8 w-8 flex items-center justify-center border-2 border-zinc-900`}>{"<"}</div>
        {pageNumbers.map((number) => {
          return (
            <div
              className={` h-8 w-8 flex items-center justify-center border-2 border-zinc-900 ${
                number === currentPage
                  ? "border-white border-2 "
                  : ""
              }`}
            >
              <a
                onClick={() => {
                  paginate(number);
                }}
                href="#"
              >
                {number}
              </a>
            </div>
          );
        })}
        <div onClick={()=>{paginate(++currentPage)}} className={`cursor-pointer h-8 w-8 flex items-center justify-center border-2 border-zinc-900`}>{">"}</div>
      </Stack>
    </div>
  );
}

export default Pagination;
