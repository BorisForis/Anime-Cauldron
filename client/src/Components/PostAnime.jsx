/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../Util/Axios";
// import { useRef } from "react";

const postAnime = (anime) => {
    return axiosInstance.post("/anime", anime);
};
const PostAnime = ({ anime }) => {
    const { mutate } = useMutation({
        mutationFn: () => postAnime(anime),
    });
    return (
        <div>
            <button onClick={(anime) => mutate(anime)}>Buton</button>
        </div>
    );
};

export default PostAnime;
