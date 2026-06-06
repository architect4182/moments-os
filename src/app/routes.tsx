import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import MemoryDetail from "./pages/MemoryDetail";
import Places from "./pages/Places";
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";
import Music from "./pages/Music";
import Collections from "./pages/Collections";
import Journal from "./pages/Journal";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/app",
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: "memories", Component: Memories },
      { path: "memories/:id", Component: MemoryDetail },
      { path: "places", Component: Places },
      { path: "people", Component: People },
      { path: "people/:id", Component: PersonDetail },
      { path: "music", Component: Music },
      { path: "collections", Component: Collections },
      { path: "journal", Component: Journal },
      { path: "settings", Component: Settings },
    ],
  },
]);
