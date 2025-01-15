import { BrowserRouter, Routes, Route } from "react-router";
import Login from '../views/login/Login';
import NewsSandBox from '../views/sandbox/NewsSandBox';

export default function IndexRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NewsSandBox />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}