import "./CineUI.scss";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import WatchPage from "./pages/watch/WatchPage";

export default function CineUI() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WatchPage />} />
            </Routes>
        </BrowserRouter>
    );
}