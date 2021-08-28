import React from 'react'
import { useParams } from 'react-router-dom'
import AdminLayout from '../../../components/admin/AdminLayout'

export default function APagesPage() {
    const { id } = useParams();

    return (
        <AdminLayout title={id} backLink='/edit/pages/' hasBack={ true }>
            Редактирование страницы { id }
        </AdminLayout>
    )
}
