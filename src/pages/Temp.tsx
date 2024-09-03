import { Link } from 'react-router-dom'
export const Temp = () => (
    <div style={{
        padding: '100px',
        display: 'flex',
        gap: '20px',
        flexDirection: 'column'
    }}>
        <Link to={'/signup'}>录入信息参与</Link>
        <Link to={'/lot'}>抽奖转盘</Link>
        <Link to={'/info'}>管理用户信息</Link>
    </div>
)