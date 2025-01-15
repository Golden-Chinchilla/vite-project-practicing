import { BrowserRouter, HashRouter, Routes, Route } from "react-router";
import Login from '../views/Login/Login';
import NewsSandBox from '../views/NewsSandBox/NewsSandBox';

export default function IndexRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<>test</>}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/newssandbox' element={<NewsSandBox />}></Route>
            </Routes>
        </BrowserRouter>
    )
}