import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Content } from './pages/content/content';
import { Analystics } from './pages/analystics/analystics';
import { Comments } from './pages/comments/comments';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'content',
        component: Content
    },
    {
        path: 'analytics',
        component: Analystics
    },
    {
        path: 'comments',
        component: Comments
    },
];
