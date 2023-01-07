import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrder } from "./Pages/CompleteOrder";
import { Delivery } from "./Pages/Delivery";
import { Home } from "./Pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/completeorder" element={<CompleteOrder />} />
                <Route path="/Delivery" element={<Delivery />} />
            </Route>

        </Routes>
    )
}