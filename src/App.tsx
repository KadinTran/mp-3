// import Home from './components/Home.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/Root.tsx";

export default function App() {
  const router = createBrowserRouter(
        [
            {path: '*', Component: Root}
        ]
    )
    return (
        <body>
            <div id ="page-wrapper">
                <div id="content">
                    <RouterProvider router={router}/>
                </div>
            </div>
        </body>

    )

};
