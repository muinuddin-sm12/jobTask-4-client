import ManageService from '@/components/module/admin/manage-service'
import { getServices } from '@/services/serviceSec'
import React from 'react'

const ManageServiceSection = async() => {
const serviceData = await getServices();
  return (
    <div><ManageService data={serviceData?.data}/></div>
  )
}

export default ManageServiceSection