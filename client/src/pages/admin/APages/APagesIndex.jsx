import AdminLayout from '../../../components/admin/AdminLayout';
import React from 'react'

export default function APagesIndex() {
    let pageName = 'Главная';
    const backLink = '/edit/pages/'

    return (
        <AdminLayout title={ 'Редактирование страницы "' + pageName + '"' } backLink={ backLink } hasBack={ true }>
            
        </AdminLayout>
    )
}
