import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default function Sidebar(){
    return <div className="w-80 flex flex-col items-start justify-between text-white py-4 px-[0.63rem] bg-[#1E2640]">
        <div className="w-full flex flex-col gap-6">
            <Header/>
            <Menu/>
        </div>
        <Footer/>
    </div>
}