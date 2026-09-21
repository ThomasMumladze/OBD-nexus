import "./assets/font/_font.scss";
import "./styles/components/index.scss";
import "./styles/layout/index.scss";
import "./index.scss";

import App from "./App.tsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
