import React from 'react'
import Table from '@mui/material/Table'
import constituentData from '../../dummyData/constituentData.json'

const PrincipleTable2 = () => {
    const [loading, setLoading] = React.useState(false)
    const relatedConstStock = constituentData

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'ticker',
            dataIndex: 'ticker',
            key: 'ticker'
        },
        {
            title: 'change',
            dataIndex: 'change',
            key: 'change'
        }
    ]

    return (
        <div>
            <div>
                <Table
                    loading={loading}
                    size='small'
                    dataSource={relatedConstStock}
                    columns={columns}
                    pagination={false}
                    scroll={{ x: 400, y: 370 }}
                />
            </div>
        </div>
    )

}

export default PrincipleTable2