import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App.tsx";
import { MainPage } from "./pages/MainPage.tsx";
import { CountryPage } from "./pages/CountryPage.tsx";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/country/:name",
        element: <CountryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
