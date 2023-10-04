import { useParams } from "react-router-dom";
import Toolbar from "./Toolbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const AnimePage = () => {
    // const nav = useNavigate();
    const { id } = useParams();
    const { data, isLoading, isError, refetch } = useQuery(
        ["getAnime", id],
        () =>
            axios
                .get(`https://api.jikan.moe/v4/anime/${id}/full`)
                .then((resp) => resp.data.data)
    );

    useEffect(() => {
        refetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching anime data</div>;
    }

    const altTitles = (title, i) => {
        if (i === data.titles.length - 1) {
            return title.title;
        } else {
            return title.title + ", ";
        }
    };

    const genres = (genre, i) => {
        if (i === data.genres.length - 1) {
            return genre.name;
        } else {
            return genre.name + ", ";
        }
    };

    const studios = (studio, i) => {
        if (studio) {
            if (i === data.studios.length - 1) {
                return studio.name;
            } else {
                return studio.name + ", ";
            }
        } else {
            return "N/A";
        }
    };

    const synopsis = () => {
        if (data.synopsis) {
            return data.synopsis;
        } else {
            return "N/A";
        }
    };

    const score = () => {
        if (data.score) {
            return data.score;
        } else {
            return "N/A";
        }
    };

    const getTrailer = (url) => {
        console.log(data.trailer.ember_url);
        if (url) {
            return (
                <iframe
                    width="560"
                    height="315"
                    src={url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            );
        } else {
            return "N/A";
        }
    };

    console.log(data);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <Toolbar />
            <div className="border-crunchyroll-orange m-10 mb-0 flex h-full w-full items-start justify-start border-2">
                <div className=" h-60vh border-crunchyroll-orange  flex items-center justify-center border-r-2 p-3">
                    <img
                        className="w-80"
                        src={data.images.webp.large_image_url}
                    />
                </div>
                <div className="relative m-5 flex h-full w-full flex-col items-start justify-center">
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="bg-crunchyroll-orange flex w-full items-center justify-center p-4">
                            <p className="text-2xl text-white">{data.title}</p>
                        </div>
                        <div className="border-crunchyroll-orange p-2px w-32 flex-col items-center justify-center border-2">
                            <p className="text-crunchyroll-orange text-xl">
                                Score
                            </p>
                            <p className="text-xl text-white">{score()}</p>
                        </div>
                    </div>
                    <div className="border-crunchyroll-orange relative m-2 ml-0 mt-0 flex h-full w-full flex-col items-start justify-center border-2 border-t-0">
                        <div className="flex h-full items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Alternative Titles:
                            </p>
                            <p className="m-2 mr-1 text-white">
                                {data.titles.map((title, i) =>
                                    altTitles(title, i)
                                )}
                            </p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Source:
                            </p>
                            <p className="m-2 mr-1 text-white">{data.source}</p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Type:
                            </p>
                            <p className="m-2 mr-1 text-white">{data.type}</p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Rating:
                            </p>
                            <p className="m-2 mr-1 text-white">{data.rating}</p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Studios:
                            </p>
                            <p className="m-2 mr-1 text-white">
                                {data.studios.map((studio, i) =>
                                    studios(studio, i)
                                )}
                            </p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Aired:
                            </p>
                            <p className="m-2 mr-1 text-white">
                                From {data.aired.string}
                            </p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Status:
                            </p>
                            <p className="m-2 mr-1 text-white">{data.status}</p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Genres:
                            </p>
                            <p className="m-2 mr-1 text-white">
                                {data.genres.map((genre, i) =>
                                    genres(genre, i)
                                )}
                            </p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Nr of Episodes:
                            </p>
                            <p className="m-2 mr-1 text-white">
                                {data.episodes}
                            </p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Episode duration:
                            </p>
                            <p className="m-2 mr-1 text-white">
                                {data.duration}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-crunchyroll-orange flex w-full flex-col items-center justify-center border-2 border-t-0">
                <div className="bg-crunchyroll-orange flex w-full items-center justify-center p-4">
                    <p className="text-2xl text-white">Synopsis</p>
                </div>
                <div className="flex items-start justify-center">
                    <p className="m-2 mr-1 text-white">{synopsis()}</p>
                </div>
            </div>
            <div className="border-crunchyroll-orange flex w-full flex-col items-center justify-center border-2 border-t-0">
                <div className="bg-crunchyroll-orange flex w-full items-center justify-center p-4">
                    <p className="text-2xl text-white">Trailer</p>
                </div>
                <div className="flex items-start justify-center text-4xl text-white">
                    {getTrailer(data.trailer.embed_url)}
                </div>
            </div>
        </div>
    );
};

export default AnimePage;
