/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Util/Axios";

const getAnime = (id) => {
    return axiosInstance.get(`/anime/${id}`).then((res) => res.data());
};
const GetAnime = ({ id }) => {
    const { data, refetch } = useQuery({
        queryKey: ["getAnime", id],
        queryFn: () => getAnime(id),
        enabled: false,
    });
    return <div>{JSON.stringify(data)}</div>;
};

export default GetAnime;
