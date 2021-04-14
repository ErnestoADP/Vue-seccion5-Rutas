import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import Post from "./components/Post";


export const routes = [
    { path: '/', component: Inicio },
    { path: '/blog', component: Blog },
    { path: '/Post/:id', component: Post },

]