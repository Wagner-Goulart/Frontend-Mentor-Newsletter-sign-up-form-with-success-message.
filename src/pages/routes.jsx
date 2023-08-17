import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ValidationMsg } from "../components/validationMsg/validationMsg";
import { Home } from "./home";
import { PrivateRoutes } from "./privateRoutes";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/congratulations" element={
                    <PrivateRoutes>
                        <ValidationMsg />
                    </PrivateRoutes>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }