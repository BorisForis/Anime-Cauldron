import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className=" flex-column relative h-screen w-full items-center justify-center overflow-hidden p-4">
            <img src="./Images/NotFound.webp" className="relative top-8" />
            <p className="relative text-white">
                {" "}
                <button
                    className="hover:text-crunchyroll-orange"
                    onClick={() => navigate("/main")}
                >
                    Click here
                </button>
                {", "}
                to return to the main page
            </p>
        </div>
    );
};

export default NotFound;
