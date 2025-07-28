// import { useSelector } from "react-redux"

import { RegisterStep1, RegisterStep2 } from "../../components/pages/authorize/register/steps";

// const navLink = useSelector(state => state.navigationSate.navLink)

export const registerRouter = [
    {path: "/authorize/register/step1", element: <RegisterStep1 />},
    {path: "/authorize/register/step2", element: <RegisterStep2 />}
]