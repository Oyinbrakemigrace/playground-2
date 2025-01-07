import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import About from "../component/About";
import Services from "../component/Services";
import Contact from "../component/Contact";
import Calculator from "../component/Calculator";
import SpongeBob from "../component/SpongeBob";



const routes = createBrowserRouter([{
    path:"", 
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/services",
            element: <Services />
        },
        {
            path:"/contact-us/:id",
            element:<Contact />
        },{
            path: "/calculator",
            element: <Calculator />
        },{
            path: "/sponge-bob",
            element:<SpongeBob />
        }
    ]
}])

export default routes