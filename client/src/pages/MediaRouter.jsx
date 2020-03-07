import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MediaIndex from './media/Media';
import MediaArts from './media/Arts';

export default function MediaRouter() {
    return (
        <Switch>
            <Route exact path='/media'>
                <MediaIndex />
            </Route>
            <Route path='/media/arts'>
                <MediaArts />
            </Route>
            <Route path='/media/video'>
                <h1>Видео, медиа</h1>
            </Route>
            <Route path='/media/stories'>
                <h1>Истории, медиаа</h1>
            </Route>
        </Switch>
    )
}
