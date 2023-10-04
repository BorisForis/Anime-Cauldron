import { useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"; // Import axios directly
import { useState } from "react";
import PageBar from "./PageBar";

const AnimeList = () => {
    const nav = useNavigate();
    const [page, setPage] = useState(1); // Initialize the page state

    const { data, isLoading, isError } = useQuery(["getAnime", page], () =>
        axios
            .get(
                `https://api.jikan.moe/v4/anime?page=${page}&order_by=title&sfw=true`
            )
            .then((resp) => resp.data)
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching anime data</div>;
    }

    console.log(data);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <Toolbar />
            <div className="mt-4 flex items-center justify-center">
                {" "}
                <PageBar
                    page={page}
                    lastPage={data.pagination.last_visible_page}
                    setPage={setPage}
                />
            </div>
            <div className="inline-grid grid-cols-5 grid-rows-5 place-items-center">
                {data.data.map((anime, i) => (
                    <button
                        id={anime.mal_id}
                        key={i}
                        className="m-5 flex w-52 flex-col items-center justify-center text-white"
                        onClick={(e) => nav(`/${e.target.id}`)}
                    >
                        <div
                            id={anime.mal_id}
                            className=" bg-crunchyroll-orange flex h-72 items-center justify-center"
                        >
                            <img
                                id={anime.mal_id}
                                src={anime.images.webp.image_url}
                                alt={anime.title}
                            />
                        </div>
                        <p
                            id={anime.mal_id}
                            className="relative top-10 text-white"
                        >
                            {" "}
                            {anime.title}{" "}
                        </p>
                    </button>
                ))}
            </div>
            <div className="mt-4 flex items-center justify-center">
                {" "}
                <PageBar
                    page={page}
                    lastPage={data.pagination.last_visible_page}
                    setPage={setPage}
                />
            </div>
        </div>
    );
};

export default AnimeList;
