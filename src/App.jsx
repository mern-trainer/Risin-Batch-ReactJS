import { Fragment } from "react"
import LandingPage from "./Pages/LandingPage"
import ArrayMapping from "./Pages/ArrayMapping"
import ShopPages from "./Pages/ShopPages"
import States from "./Pages/states"
import PasswordGenerator from "./Pages/PasswordGenerator"
import TodoList from "./Pages/TodoList"
import A from "./Pages/A"
import { Toaster } from "react-hot-toast"

const App = () => {
    return <Fragment>
        {/* <LandingPage /> */}
        {/* <ShopPages /> */}
        {/* <States /> */}
        {/* <PasswordGenerator /> */}
        <TodoList />
        {/* <A /> */}
        {/* <ArrayMapping /> */}
        <Toaster position="top-right"/>
    </Fragment>
}

export default App