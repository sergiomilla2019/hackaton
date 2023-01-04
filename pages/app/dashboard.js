import React from 'react'
import PrivateLayout from '../../components/PrivateLayout/PrivateLayout'
import ListNotifications from './ListNotifications'

const Dashboard = () => {
    return <PrivateLayout title="Dashboard">
      <ListNotifications />
    </PrivateLayout>
}

export default Dashboard
