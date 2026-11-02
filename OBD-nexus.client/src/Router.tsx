import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

const App = lazy(() => import("./App"));
const FaultCodes = lazy(() => import("./pages/FaultCodes"));

import Loading from "./components/Loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Loading />}>
                <App />
            </Suspense>
        ),
        children: [
            {
                index: true,
                element: <FaultCodes />,
            },
        ],
    },
]);

export default router;
