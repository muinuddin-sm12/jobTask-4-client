import ContactList from '@/components/module/admin/dashboard'
import { getAllContacts } from '@/services/contact'
import React from 'react'

const AdminDashboard = async() => {
  const contactData = await getAllContacts()
  return (
    <div><ContactList data={contactData?.data}/></div>
  )
}

export default AdminDashboard