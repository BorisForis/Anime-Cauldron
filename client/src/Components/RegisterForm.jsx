import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../Util/Axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const postUser = (userObj, navigate) => {
    if (userObj.username === "") {
        alert("Username can't be empty");
    } else if (userObj.email === "") {
        alert("Email can't be empty");
    } else if (userObj.password === "") {
        alert("Password can't be empty");
    } else {
        navigate("/login");
        return axiosInstance.post("/user/register", userObj);
    }
};

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const userObj = {
        username: username,
        email: email,
        password: password,
    };
    const { mutate } = useMutation({
        mutationFn: () => postUser(userObj, navigate),
    });
    return (
        <div className=" relative flex h-screen w-full flex-col items-center justify-center p-4 ">
            <h1 className="absolute top-44 text-3xl text-white">
                CREATE AN ACCOUNT
            </h1>
            <img
                src="./Images/anime-cauldron-logo.webp"
                className="absolute -top-7 max-w-sm hover:cursor-pointer"
                onClick={() => navigate("/main")}
            />
            <div className="h-40vh w-25vw border-crunchyroll-orange absolute flex flex-col items-center justify-center border-4">
                <input
                    className=" w-17.5vw h-3vh bg-dark-gray border-crunchyroll-orange relative m-3 border-2 p-5 text-white placeholder:text-white"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => {
                        setUsername(e.currentTarget.value);
                        console.log(username);
                    }}
                />
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
                    className="h-3vh border-dark-orange w-8vw bg-crunchyroll-orange leading-0 relative inline border-4 p-5 text-center text-white"
                    onClick={() => {
                        mutate();
                    }}
                >
                    Register
                </button>
            </div>
            <p className="absolute bottom-48 text-white">
                If you already have an account,{" "}
                <button
                    className="hover:text-crunchyroll-orange"
                    onClick={() => navigate("/login")}
                >
                    click here
                </button>
            </p>
        </div>
    );
};

export default RegisterForm;
