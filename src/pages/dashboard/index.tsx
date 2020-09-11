import React, { memo } from 'react'
import { RouteComponentProps } from 'react-router-dom'




export default memo(function Dashboard(props:RouteComponentProps) {
    console.log(props)
    return (
        <div>
            Dashboard
        </div>
    )
})
