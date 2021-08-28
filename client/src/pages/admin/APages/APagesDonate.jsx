import AdminLayout from '../../../components/admin/AdminLayout';
import React from 'react'

export default function APagesDonate() {
    let pageName = 'Донаты';
    const backLink = '/edit/pages/'

    return (
        <AdminLayout title={ 'Редактирование страницы "' + pageName + '"' } backLink={ backLink } hasBack={ true }>
            
        </AdminLayout>
    )
}
