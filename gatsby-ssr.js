import React from "react";

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([<script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>,
  <script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer></script>
]);
}
