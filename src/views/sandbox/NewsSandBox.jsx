// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router"
import TopHeader from "../../components/TopHeader"
import SideMenu from "../../components/SideMenu"
import Home from "./home/Home"
import UserList from "./user-manage/UserList"
import RoleList from "./right-manage/RoleList"
import RightList from "./right-manage/RightList"


export default function NewsSandBox() {
    return (
        <BrowserRouter>
            <TopHeader></TopHeader>
            <SideMenu></SideMenu>
            <Routes>
                <Route path='home' element={<Home></Home>}></Route>
                <Route path='user-manage/list' element={<UserList></UserList>}></Route>
                <Route path='right-manage/role/list' element={<RoleList></RoleList>}></Route>
                <Route path='right-manage/right/list' element={<RightList></RightList>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
