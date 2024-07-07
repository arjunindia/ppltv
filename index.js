if (typeof window.WebAssembly === "undefined") {
  var script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/gh/arjunindia/ppltv@latest/wasm-polyfill.min.js";
  (document.head || document.documentElement).appendChild(script);
  script.remove();
}

localStorage.setItem(
  "settings.txt",
  "BAcAAAAAAAAACgAAAGludHJvX3NlZW4BARAAAABtb3ZlX2Rvd25fYnV0dG9uAgMAAAAAAAAAEAAAAG1vdmVfbGVmdF9idXR0b24CAAAAAAAAAAARAAAAbW92ZV9yaWdodF9idXR0b24CAQAAAAAAAAAOAAAAbW92ZV91cF9idXR0b24CAgAAAAAAAAASAAAAcmVuZGVyaW5nX3NldHRpbmdzAggAAAAAAAAADQAAAHR1dG9yaWFsX3NlZW4BAQ==\u0000",
);
localStorage.setItem("settings.txt.hash", "sQCDkiENqdhHsFKz/DCFMw==\u0000");

if (localStorage.getItem("refresh") === "true") {
  localStorage.setItem("refresh", "false");
} else {
  localStorage.setItem("refresh", "true");
  window.location.reload();
}
