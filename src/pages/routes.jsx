import { Route, Routes, useLocation } from "react-router-dom";
import { ValidationMsg } from "../components/validationMsg/validationMsg";
import { Home } from "./home";
import { AnimatePresence } from "framer-motion";


function AppRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/congratulations" element={<ValidationMsg />} />
            </Routes>
        </AnimatePresence>

    )
}

export { AppRoutes }