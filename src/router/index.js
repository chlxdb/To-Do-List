import Vue from 'vue'
import VueRouter from 'vue-router'
import lists from "../components/lists";
import statistic from "../components/statistic";
Vue.use( VueRouter) 
const routes = [
    {
        path:'',
       redirect: '/lists'
    },
{
path:'/lists',
component: lists
},
{
    path:'/statistic',
    component: statistic
}
]
const router = new VueRouter({
    //PEIZHI
    routes 
})
//导出对象到实例
export default router    