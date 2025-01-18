import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
const App = () => (
    <Space direction="vertical" size={16}>
        <Space wrap size={16}>
            <Avatar icon={<UserOutlined />} />
        </Space>
    </Space>
);
export default App;