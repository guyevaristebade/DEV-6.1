import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from "./Layout";
import RandomUserPage from "./Page/RandomUserPage/RandomUserPage";
import UserPage from "./Page/UserPage/UserPage";
import Unknown from "./Page/Unknown/Unknown";

function AppRouter() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<RandomUserPage/>}/>
                <Route element={<UserPage/>} path=":seed">

                </Route>
                <Route element={<Unknown/>} path="*"/>
            </Route>
        </Routes>
    )
}

export default AppRouter