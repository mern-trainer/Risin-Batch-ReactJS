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
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Params from "./Pages/Params"
import SingleProductPage from "./Pages/SingleProductPage"
import FormPage from "./Pages/Form"
import FormikPage from "./Pages/Formik"
import ReduxPage from "./Pages/ReduxPage"
import TodoListPage from "./Pages/TodoListPage"
import TodoEditPage from "./Pages/TodoEditPage"
import TodoSingleView from "./Pages/TodoSingleView"

// context api => Provide a way to pass data through the component tree without having to pass props down manually at every level
// global state management
// prop drilling => Passing data from parent to child

// createContext => a function that returns a context object

// React Router => A set of components that allows you to navigate between different pages in a React application.

// Redux ->  
const App = () => {

    // useNavigate => to navigate between pages
    // useParams => to get parameters from the URL

    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/array-mapping" Component={ArrayMapping} />
            <Route path="/password-generator" Component={PasswordGenerator} />
            <Route path="/products" Component={ShopPages} />
            <Route path="/product/:product_id?" Component={SingleProductPage} />
            <Route path="/cart" Component={Cart} />
            <Route path="/page1" Component={Page1} />
            <Route path="/page2" Component={Page2} />
            <Route path="/params/:random_number?" Component={Params} />
            <Route path="/form" Component={FormPage} />
            <Route path="/formik" Component={FormikPage} />
            <Route path="/redux" Component={ReduxPage} />
            <Route path="/todo-v2" Component={TodoListPage} />
            <Route path="/todo-v2/edit/:id" Component={TodoEditPage} />
            <Route path="/todo-v2/view/:id" Component={TodoSingleView} />
        </Routes>
    </BrowserRouter>
}

export default App