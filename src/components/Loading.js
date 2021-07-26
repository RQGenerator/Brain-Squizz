import { Spin, Space } from 'antd'

const LoadingSpinner = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
)

export default LoadingSpinner
