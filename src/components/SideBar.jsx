import Home from "../icons/Home";
import Shorts from "../icons/Shorts";
import Subscription from "../icons/Subscription";
import Library from "../icons/Library";

function SideBar() {
  const icons = [
    { icon: <Home />, name: "Home" },
    { icon: <Shorts />, name: "Shorts" },
    { icon: <Subscription />, name: "Subscriptions" },
    { icon: <Library />, name: "Library" },
  ];

  return (
    <aside className="fixed bottom-0 px-1 sidebar hidden sm:flex">
      <div>
        {icons.map(icon=>{
            return <div key={icon.name} className="py-4  hover:bg-transparent cursor-pointer">
                <div className="flex items-center flex-col">
                {icon.icon}
                <h4 className="text-xs mt-1.5">{icon.name}</h4>
                </div>
                </div>
        })}
      </div>
    </aside>
  );
}

export default SideBar;
