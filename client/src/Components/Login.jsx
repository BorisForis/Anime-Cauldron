import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Util/Axios";
import { useQuery } from "@tanstack/react-query";

const getUser = (userObj) => {
    if (userObj.email === "") {
        alert("Email can't be empty");
    } else if (userObj.password === "") {
        alert("Password can't be empty");
    } else {
        // navigate("/main");
        return axiosInstance.post("/user/login", userObj);
    }
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const userObj = {
        email: email,
        password: password,
    };
    const { data, refetch } = useQuery({
        queryKey: ["getUser", userObj],
        queryFn: () => getUser(userObj),
        enabled: false,
    });
    console.log(data);
    return (
        <div className=" relative flex h-screen w-full items-center justify-center p-4 ">
            {/* <h1 className="absolute top-44 text-3xl">SIGN-IN</h1> */}
            <img
                src="./Images/anime-cauldron-logo.webp"
                className="absolute top-12 max-w-sm hover:cursor-pointer"
                onClick={() => navigate("/main")}
            />
            <div className="h-30vh w-25vw border-crunchyroll-orange absolute flex flex-col items-center justify-center border-4">
                <input
                    className="w-17.5vw h-3vh bg-dark-gray border-crunchyroll-orange relative m-3 inline border-2 p-5 text-white placeholder:text-white"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.currentTarget.value);
                        console.log(email);
                    }}
                />
                <input
                    className="w-17.5vw h-3vh bg-dark-gray border-crunchyroll-orange relative m-3 inline border-2 p-5 text-white placeholder:text-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.currentTarget.value);
                        console.log();
                    }}
                />
                <button
                    className="h-3vh border-dark-orange w-8vw bg-crunchyroll-orange leading-0 relative m-3 inline border-4 p-5 text-center text-white"
                    onClick={() => {
                        refetch();
                    }}
                >
                    Login
                </button>
            </div>
            <p className="absolute bottom-56 text-white">
                {/*eslint-disable-next-line react/no-unescaped-entities*/}
                If you don't have an account,{" "}
                <button
                    className="hover:text-crunchyroll-orange"
                    onClick={() => navigate("/register")}
                >
                    click here
                </button>
            </p>
        </div>
    );
};

export default Login;
