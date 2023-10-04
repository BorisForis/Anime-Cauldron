const PageBar = ({ page, lastPage, setPage }) => {
    if (page === 1) {
        return (
            <div className="relative my-10 flex items-center justify-center">
                <p className="mx-10 text-white">{page}</p>
                <button onClick={() => setPage(page + 1)}>
                    <svg
                        className="fill-crunchyroll-orange"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 320 512"
                    >
                        {" "}
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </button>
            </div>
        );
    } else if (page === lastPage) {
        return (
            <div className="relative my-10 flex items-center justify-center">
                <button onClick={() => setPage(page - 1)}>
                    <svg
                        className="fill-crunchyroll-orange"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 320 512"
                    >
                        {" "}
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                </button>
                <p className="mx-10 text-white">{page}</p>
            </div>
        );
    } else {
        return (
            <div className="relative my-10 flex items-center justify-center">
                <button onClick={() => setPage(page - 1)}>
                    <svg
                        className="fill-crunchyroll-orange"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 320 512"
                    >
                        {" "}
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                </button>
                <p className="mx-10 text-white">{page}</p>
                <button onClick={() => setPage(page + 1)}>
                    <svg
                        className="fill-crunchyroll-orange"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 320 512"
                    >
                        {" "}
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </button>
            </div>
        );
    }
};
export default PageBar;
