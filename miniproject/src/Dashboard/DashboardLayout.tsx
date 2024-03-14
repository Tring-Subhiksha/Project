import React, { FunctionComponent,FC } from 'react'
type DashboardProps={
  component: React.FC
  }
const DashboardLayout: FunctionComponent <DashboardProps> =({component:Component}) => {
  return (
    <div>
      <Component/>
    </div>
  )
}

export default DashboardLayout;

