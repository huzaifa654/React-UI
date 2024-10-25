import React, { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom';
const Login = lazy(() => import("../Pages/Auth"));
const SignUp = lazy(() => import("../Pages/SignUp"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "*",
        element: <Login />
    },
    {
        path: "/SignUp",
        element: <SignUp />
    },

]);

export default router