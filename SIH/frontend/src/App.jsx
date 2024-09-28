//import Navbar from './components/navbar.component'
//import Signin from './components/1.jsx'
// import './index.css'
import {Routes , Route} from "react-router-dom";
import Login from './components/1login.jsx'
import Signup from './components/2signup.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { lookInSession } from './components/extra/ex/1session.jsx'
import { createContext , useEffect , useState } from 'react';

export const usercontext = createContext({});

const App = () => {

    const [userAuth , setuserAuth] = useState({});

    useEffect(() => {

        let userinsession = lookInSession("user");

        userinsession ? setuserAuth(JSON.parse(userinsession)): setuserAuth({access_token: null});
    } , [])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },

        {
            path: "/signup",
            element: <Signup />
        },

    ])
    return (
        <div>
            <usercontext.Provider value={{userAuth , setuserAuth}}>
                <ChakraProvider>
                    <RouterProvider router={router} />
                </ChakraProvider>
            </usercontext.Provider>
        </div>
    )
}

export default App;
