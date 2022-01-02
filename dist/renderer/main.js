"use strict";
console.log("hello from the renderer");
const coreCount = document.getElementById("cores");
if (coreCount)
    coreCount.innerText = `Core Counts: ${window.api.threads}`;
