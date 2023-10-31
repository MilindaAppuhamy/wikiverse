import React from "react";
import { createRoot } from "react-dom/client";
import "regenerator-runtime/runtime";

import { App } from "./utils/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
