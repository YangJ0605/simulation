import React from 'react'
import {RouteConfig} from 'react-router-config'
import {Redirect} from 'react-router-dom'

import Dashboard from '@/pages/dashboard'
import Scenarios from '@/pages/scenarios'
import Workflows from '@/pages/workflows'

const routes:RouteConfig[] = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to='dashboard'/>
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/scenarios',
        component: Scenarios
    },
    {
        path: '/workflows',
        component: Workflows
    }
]

type RouteMenuItem = {
    title: string,
    path?: string,
    children?: RouteMenuItem[] 
}

export const routeMenu:RouteMenuItem[] = [
    {
        title: 'NAVIGATION',
        children: [
            {
                title: 'Dashboard',
                path: '/dashboard'
            }
        ]
    },
    {
        title: 'SERVICE',
        children: [
            {
                title: 'Scenarios',
                path: '/scenarios'
            },
            {
                title: 'Workflows',
                path: '/workflows'
            }
        ]
    }
]

export default routes