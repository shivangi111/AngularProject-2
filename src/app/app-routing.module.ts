import {NgModule}from '@angular/core'
import{Routes,RouterModule}from'@angular/router'

import{ShoppingCartComponent}from'./components/shopping-cart/shopping-cart.component'
import{RegisterComponent}from'./components/register/register.component'
import{LoginComponent}from'./components/login/login.component'
import{PageNotFoundComponent}from './components/shared/page-not-found/page-not-found.component'
import { AdminComponent } from './components/admin/admin.component'
import { ProfileComponent } from './components/profile/profile.component'

const routes:Routes=[
    {path:'',redirectTo:'/shop', pathMatch:'full'},
    { path:'login',component:LoginComponent},
     { path:'register',component:RegisterComponent},
     { path:'admin',component:AdminComponent},
    {path:'profile',component: ProfileComponent},
    {path:'shop',component:ShoppingCartComponent},

  { path:'**',component:PageNotFoundComponent},
 
]
    




@NgModule({

    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}