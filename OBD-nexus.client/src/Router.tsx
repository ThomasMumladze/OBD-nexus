import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

const App = lazy(() => import("./App"));
const FaultCodes = lazy(() => import("./pages/FaultCodes"));
const ScanHistory = lazy(() => import("./pages/scanHistory/ScanHistory"));

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
            {
                path: "scan-history",
                element: <ScanHistory />,
            },
        ],
    },
]);

export default router;
