import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrder } from "./Pages/CompleteOrder";
import { Home } from "./Pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/completeOrder" element={<CompleteOrder />} />
            </Route>

        </Routes>
    )
}