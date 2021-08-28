import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import AEditLink from './AComponents/AEditLink';

export default function APages() {
    const index = { link: '/edit/pages/index', title: 'Главная', info: '/' }
    const news = { link: '/edit/pages/news', title: 'Новости', info: 'Новости' }
    const projects = { link: '/edit/pages/projects', title: 'Проекты', info: 'Игровые проекты - их описание' }
    const media = { link: '/edit/pages/media', title: 'Материалы', info: 'Арты, скриншоты, видео, истории' }
    const about = { link: '/edit/pages/about', title: 'О команде Ascora Games', info: 'Описание участников команды' }
    const support = { link: '/edit/pages/support', title: 'Поддержка пользователя', info: 'Формы по ошибкам и багам' }
    const donate = { link: '/edit/pages/donate', title: 'Поддержка команды', info: 'Подробности о донатах' }
    const footer = { link: '/edit/pages/footer', title: 'Футер', info: 'Настройка нижней части сайта' }

    return (
        <AdminLayout title="Страницы" hasBack={ false }>
            <div className='admin-pages-links'>
                <AEditLink link={ index.link } title={ index.title } info={ index.info }></AEditLink>
                <AEditLink link={ news.link } title={ news.title } info={ news.info }></AEditLink>
                <AEditLink link={ projects.link } title={ projects.title } info={ projects.info }></AEditLink>
                <AEditLink link={ media.link } title={ media.title } info={ media.info }></AEditLink>
                <AEditLink link={ about.link } title={ about.title } info={ about.info }></AEditLink>
                <AEditLink link={ support.link } title={ support.title } info={ support.info }></AEditLink>
                <AEditLink link={ donate.link } title={ donate.title } info={ donate.info }></AEditLink>
                <AEditLink link={ footer.link } title={ footer.title } info={ footer.info }></AEditLink>
            </div>
        </AdminLayout>
    )
}
