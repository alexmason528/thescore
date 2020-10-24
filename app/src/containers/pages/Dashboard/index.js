import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Input, Space, Table, message } from 'antd'
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons'
import axios from 'axios'
import {
  listRushing,
  selectRushingData,
  selectRushingLoading,
} from 'store/modules/rushing'
import { downloadFile } from 'utils/file-downloader'
import columns from './columns'

const Dashboard = () => {
  const rushingData = useSelector(selectRushingData)
  const isLoading = useSelector(selectRushingLoading)

  const dispatch = useDispatch()
  const [playerName, setPlayerName] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    dispatch(listRushing())
  }, [dispatch])

  function handleTableChange(pagination, filters, sorter) {
    const { current, pageSize } = pagination
    const { player } = filters
    const { field, order } = sorter

    const params = Object.assign(
      {
        page: current,
        page_size: pageSize,
      },
      player && { player: player[0] },
      field && order && { order_by: field, dir: order }
    )

    dispatch(listRushing({ params }))
    setPlayerName(player || '')
  }

  async function handleDownload() {
    try {
      setIsDownloading(true)

      const params = playerName ? `?player=${playerName}` : ''
      const res = await axios.get(`/rushings.csv/${params}`)

      downloadFile(res.data, 'text/csv', 'rushings.csv')
    } catch {
      message.error('Failed to download file')
    } finally {
      setIsDownloading(false)
    }
  }

  function getColumnSearchProps(dataIndex) {
    return {
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            className="search-input"
            placeholder={`Search by ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }}
            onPressEnter={confirm}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              size="small"
              className="search-btn"
              style={{ width: 90 }}
              onClick={confirm}
            >
              Search
            </Button>
            <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
    }
  }

  function getColumns() {
    return [
      {
        title: 'Player',
        dataIndex: 'player',
        key: 'player',
        ...getColumnSearchProps('player'),
      },
      ...columns,
    ]
  }

  return (
    <Card className="dashboard">
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        style={{ marginBottom: 8, float: 'right' }}
        loading={isDownloading}
        onClick={handleDownload}
      >
        Download
      </Button>

      <Table
        dataSource={rushingData.rushings}
        columns={getColumns()}
        bordered
        loading={isLoading}
        rowKey="id"
        scroll={{ x: true, y: 550 }}
        pagination={{
          total: rushingData.meta.total,
          pageSize: rushingData.meta.page_size,
          showTotal: (total) => `Total: ${total}`,
        }}
        onChange={handleTableChange}
      />
    </Card>
  )
}

export default Dashboard
