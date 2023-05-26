import Navbar from "./NavBar";
import SideBar from "./SideBar";

function Layout (props){
   return <>
    <Navbar />
    <SideBar />
    <main className="fixed right-0 ">
        {props.children}
    </main>
   </>;
}
 
export default Layout