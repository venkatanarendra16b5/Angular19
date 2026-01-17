import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlStatement } from './components/control-statement/control-statement';
import { DataBinding } from './components/data-binding/data-binding';
import { NgClassComponent } from './components/ng-class/ng-class';
import { NgForComponent } from './components/ng-for/ng-for';
import { NgIf } from './components/ng-if/ng-if';
import { NgStyleComponent } from './components/ng-style/ng-style';
import { SignalComponent } from './components/signal-component/signal-component';
import { User } from './components/user/user';
import { TemplateForm } from './components/template-form/template-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { GetApi } from './components/API/get-api/get-api';
import { PostApi } from './components/API/post-api/post-api';
import { ResourceApi } from './components/resource-api/resource-api';
import { CustomerDat } from './components/API/customer-dat/customer-dat';
import { LifeCycle } from './components/life-cycle/life-cycle';
export const routes: Routes = [
    {
        path:'',
        redirectTo:'admin',
        pathMatch:'full'
    },
    {
        path:'admin',
        component: Admin
    },
    {
        path:'controlStatement',
        component: ControlStatement
    },
    {
        path:'dataBinding',
        component: DataBinding
    },
    {
        path:'ngClass',
        component:NgClassComponent
    },
    {
        path:'ngFor',
        component: NgForComponent
    },
    {
        path:'ngIf',
        component: NgIf
    },
    {
        path:'ngStyle',
        component:NgStyleComponent
    },
    {
        path:'signalComponent',
        component:SignalComponent
    },
    {
        path:'user',
        component:User
    },
    {
        path:'templateForm',
        component:TemplateForm
    },
    {
        path:'reactiveForm',
        component:ReactiveForm
    },
    {
        path:'get-api',
        component:GetApi
    },
    {
        path:'post-api',
        component:PostApi
    },
    {
        path:'resource-api',
        component:ResourceApi
    },
    {
        path:'customer-data',
        component:CustomerDat
    },
    {
        path:'life-cycle',
        component:LifeCycle
    }
];
