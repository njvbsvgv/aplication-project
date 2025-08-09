// import { useSelector } from "react-redux"

import LogInStep1 from "../../components/pages/authorize/logIn/steps/LogInStep1"
import LogInStep2 from "../../components/pages/authorize/logIn/steps/LogInStep2";
import LogInStep3 from "../../components/pages/authorize/logIn/steps/LogInStep3";

export const LogInRouter = [
    {path: "/authorize/logIn/step1", element: <LogInStep1 />},
    {path: "/authorize/logIn/step2", element: <LogInStep2 />},
    {path: "/authorize/logIn/step3", element: <LogInStep3 />}
]