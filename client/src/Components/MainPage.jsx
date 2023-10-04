import { useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";

const MainPage = () => {
    const nav = useNavigate();
    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <Toolbar />
        </div>
    );
};

export default MainPage;
