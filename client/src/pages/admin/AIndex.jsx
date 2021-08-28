import React from 'react';

import AEditLink from './AComponents/AEditLink';

import MyProfileIcon from '../../components/Icons/MyProfileIcon';
import NewsIcon from '../../components/Icons/NewsIcon';
import MediaIcon from '../../components/Icons/MediaIcon';
import ProjectsIcon from '../../components/Icons/ProjectsIcon';
import ProfilesIcon from '../../components/Icons/AboutIcon';
import ToWebsiteIcon from '../../components/Icons/AGShortenLogoIcon';
import PagesIcon from '../../components/Icons/PagesIcon';

function AdminIndex() {

    return (
        <div className='admin-index'>
            <h1 className='admin-index__title'>Панель администратора</h1>
            <h2 className='admin-index__subtitle'>Администратор</h2>
            <div className='admin-index-links'>
                <AEditLink link='/edit/profile' title='Мой профиль' info='Аватарка, имя, пароль и прочие данные'>
                    <MyProfileIcon />
                </AEditLink>
                <AEditLink link='/edit/pages' title='Страницы' info='Настройка SEO, названий, ссылок и т.д.'>
                    <PagesIcon />
                </AEditLink>
                <AEditLink link='/edit/news' title='Посты' info='Создание, удаление и редактирование новостей'>
                    <NewsIcon />
                </AEditLink>
                <AEditLink link='/edit/projects' title='Проекты' info='Настройка SEO, названий, ссылок и т.д.'>
                    <ProjectsIcon />
                </AEditLink>
                <AEditLink link='/edit/media' title='Материалы' info='Настройка SEO, названий, ссылок и т.д.'>
                    <MediaIcon />
                </AEditLink>
                <AEditLink link='/edit/profiles' title='Профили' info='Настройка профилей и прав авторов и модераторов'>
                    <ProfilesIcon />
                </AEditLink>
                <AEditLink link='/' title='На сайт' info='ascoragames.com'>
                    <ToWebsiteIcon />
                </AEditLink>
            </div>
        </div>
    )
}

export default AdminIndex;