import Content from './pages/Content'
import Car from './pages/Car'
import ShopDetail from './pages/ShopDetail'

export const routes =  [
        {
            path: '/',
            redirect: '/content',
        },
        {
            path:'/content',
            name:'Content',
            component:Content,
        },
        {
            path:'/car',
            name:'Car',
            component:Car,
        },
        {
            path:'/shopdetail',
            name:'ShopDetail',
            component:ShopDetail,
        },
        
    ]