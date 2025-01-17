import { TopHeader } from '../components/topHeader'
import { SideMenu } from '../components/sideMenu'

export default function Dashboard() {
    return (
        <>
            {/* NewsSandBox 固定要展示的两个组件 */}
            <TopHeader></TopHeader>
            <SideMenu></SideMenu>

            {/* 随 url 变化展示的其他组件 */}
        </>
    )
}
