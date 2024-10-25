import React, { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom';
const Login = lazy(() => import("../Pages/Auth"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "*",
        element: <Login />
    },

]);

export default router