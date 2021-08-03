
import HomeSoftware from '../pages/HomeSoftware'
import view from '../pages/view'
import NotFound from '../pages/elements/404'

export const routes = [
    {
        path:'/',
        name: 'syGlass VR',
        component: HomeSoftware
    },
	{
        path:'/new/',
        name: 'syGlass VR',
        component: HomeSoftware
    },
	{
		path:'/view/',
        name: 'syGlass VR',
        component: view
	},
	{
		path:'/new/view/',
        name: 'syGlass VR',
        component: view
	},
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
];