import { Navigate, useRoutes } from "react-router-dom"
import { SignUp } from "../pages/SignUp"
import { Lot } from "../pages/lot"
import { InfoPage } from "../pages/info"
import { Temp } from "../pages/Temp"


const NotFound = () => <h1>404</h1>
const routes = [
    // 重定向
    {
        path: '/',
        element: <Navigate to="/temp" replace />,
        index: true, // 表示这是默认路径
    },
    // 主页 Home
    {
        path: '/temp',
        element: <Temp />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    // 项目 Projects
    {
        path: '/lot',
        element: <Lot />,
    },
    {
        path: '/info',
        element: <InfoPage />,
    },


    // 未定义的路由
    {
        path: '*',
        element: <NotFound />
    }
]
function WraperRoutes() {
    const element = useRoutes(routes) // 识别当前的url， 返回对应的组件
    return element
}
export default WraperRoutes