export default [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/Welcome.vue')
    },
    {
        path: '/',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue')
    },
    {
        path: '/calls',
        name: 'calls',
        component: () => import('@/views/call/Calls.vue')
    },
    {
        path: '/calling',
        name: 'calling',
        component: () => import('@/views/call/Calling.vue')
    },
    {
        path: '/companies',
        name: 'companies',
        component: () => import('@/views/company/Companies.vue')
    },
    {
        path: '/employees',
        name: 'employees',
        component: () => import('@/views/employee/Employees.vue')
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('@/views/product/Products.vue')
    },
    {
        path: '/subscriptions',
        name: 'subscriptions',
        component: () => import('@/views/subscription/Subscriptions.vue')
    },
    {
        path: '*',
        name: 'notfound',
        component: () => import('@/views/others/NotFound.vue')
    }
]