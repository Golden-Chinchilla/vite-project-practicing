import { Routes, Route } from "react-router";
import { Login } from "./login"
import { Dashboard } from "./dashboard"

// 可以跑通了
export default function RouterConfig() {
    return (
        <Routes>
            <Route index element={<Login></Login>}></Route>
            <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
    )
}