import Welcome from '@/views/home/Welcome.vue'
import Login from '@/views/auth/Login.vue'
import Calls from '@/views/call/Calls.vue'
import Calling from '@/views/call/Calling.vue'
import Companies from '@/views/company/Companies.vue'
import Employees from '@/views/employee/Employees.vue'
import Products from '@/views/product/Products.vue'
import Subscriptions from '@/views/subscription/Subscriptions.vue'
import NotFound from '@/views/others/NotFound.vue'
import Roles from '@/views/auth/Roles.vue'

export default [
    {
        path: '/home',
        name: 'home',
        component: Welcome
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
        component: Login
    },
    {
        path: '/calls',
        name: 'calls',
        component: Calls
    },
    {
        path: '/calling',
        name: 'calling',
        component: Calling
    },
    {
        path: '/companies',
        name: 'companies',
        component: Companies
    },
    {
        path: '/employees',
        name: 'employees',
        component: Employees
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/subscriptions',
        name: 'subscriptions',
        component: Subscriptions
    },
    {
        path: '/roles',
        name: 'roles',
        component: Roles
    },
    {
        path: '*',
        name: 'notfound',
        component: NotFound
    }
]