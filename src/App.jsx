import "./App.scss";
import { Route, Routes } from "react-router-dom";
import DragonPage from "./page/Dragon.page.jsx";
import NavBar from "./component/NavBar.jsx";
import KnightPage from "./page/Knight.page.jsx";
import CouplePage from "./page/Couple.page.jsx"; // Importez la nouvelle page

function App() {
    return (
        <main>
            <header>
                <h1>Dragons & Knights</h1>
                <NavBar />
            </header>

            <Routes>
                <Route path={"/"} element={<DragonPage />} />
                <Route path={"/knight"} element={<KnightPage />} />
                <Route path={"/couple"} element={<CouplePage />} /> // Ajoutez
                la route pour la nouvelle page
            </Routes>
        </main>
    );
}

export default App;
