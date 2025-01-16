import { Fragment, useState } from "react"
import LandingPage from "./Pages/LandingPage"
import ArrayMapping from "./Pages/ArrayMapping"
import ShopPages from "./Pages/ShopPages"
import States from "./Pages/states"
import PasswordGenerator from "./Pages/PasswordGenerator"
import TodoList from "./Pages/TodoList"
import A from "./Pages/A"
import { Toaster } from "react-hot-toast"
import Context from "./Pages/ContextSample"
import UseEffectComponent from "./Pages/UseEffectComponent"
import ApiFetching from "./Pages/ApiFetching"
import Cart from "./Components/CartList"
import { BrowserRouter, Routes, Route } from "react-router"

// context api => Provide a way to pass data through the component tree without having to pass props down manually at every level
// global state management
// prop drilling => Passing data from parent to child

// createContext => a function that returns a context object

// React Router => A set of components that allows you to navigate between different pages in a React application.

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/array-mapping" Component={ArrayMapping} />
            <Route path="/password-generator" Component={PasswordGenerator} />
            <Route path="/shop" Component={ShopPages} />
            <Route path="/cart" Component={Cart} />
        </Routes>
    </BrowserRouter>
}

export default App