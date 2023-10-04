import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import AnimeList from "./Components/AnimeList";
import AnimePage from "./Components/AnimePage";

const App = () => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/register" element={<RegisterForm />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Navigate replace to="/main" />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/list" element={<AnimeList />}></Route>
                <Route path="/main" element={<MainPage />}></Route>
                <Route path="/:id" element={<AnimePage />}></Route>
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
