import AdminLayout from '../../../components/admin/AdminLayout';
import React from 'react'

export default function APagesFooter() {
    let pageName = 'Футер';
    const backLink = '/edit/pages/'

    return (
        <AdminLayout title={ 'Редактирование страницы "' + pageName + '"' } backLink={ backLink } hasBack={ true }>
            
        </AdminLayout>
    )
}
