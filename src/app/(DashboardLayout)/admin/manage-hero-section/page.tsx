import ManageHero from '@/components/module/admin/manage-hero'
import { getHeroSec } from '@/services/heroSec'
import React from 'react'

const ManageHeroSection = async () => {
  const heroData = await getHeroSec()
  return (
    <div><ManageHero data={heroData?.data}/></div>
  )
}

export default ManageHeroSection