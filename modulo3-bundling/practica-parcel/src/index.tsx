import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorldComponent } from "./helloworldComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloWorldComponent />
  </div>
);