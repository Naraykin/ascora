import React, { useState, useEffect, Fragment} from 'react';
import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils } from 'draft-js';

import { getPost, addPost } from '../../actions/postActions';
import AdminButton from '../../components/admin/AdminButton';
import AdminSecondaryFooter from '../../components/admin/AdminSecondaryFooter';
import AdminLayout from '../../components/admin/AdminLayout';
import AdminSwitch from '../../components/admin/AdminSwitch';
import AdminMetaRow from '../../components/admin/AdminMetaRow';

function AdminEditPost({ post, getPost, addPost, isNewPost }) {
    const NEW_POST_TOP_TEXT = 'Новый пост'; 
    const EDIT_POST_TOP_TEXT = 'Редактирование поста';

    const { id } = useParams();

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postDate, setPostDate] = useState('');
    const [isArchived, setIsArchived] = useState(false);

    useEffect(() => {
        setPostTitle('');
        setPostContent('');
        setPostDate('');
        
        return () => {
            setPostTitle('');
            setPostContent('');
            setPostDate('');
        }
    }, [])

    useEffect(() => {
        getPost(id);
    }, [getPost, id]);

    useEffect(() => {
        if(post) 
            if(post.post) {
                setPostTitle(post.post.title);
                setPostContent(post.post.content);
                setPostDate(post.post.date);
            }
    }, [post]);

    function showTopText() {
        let resultText = '...';
        if(isNewPost) resultText = NEW_POST_TOP_TEXT;
        else resultText = EDIT_POST_TOP_TEXT; 

        return <>{ resultText } { id }</>;
    };

    function onEditorChange(editorState) {
        setEditorState(editorState)
    }

    function handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
          onEditorChange(newState);
          return 'handled';
        }

        return 'not-handled';
    }

    function styleInline(state) {
        onEditorChange(RichUtils.toggleInlineStyle(editorState, state));
    }

    function styleBlock(state) {
        onEditorChange(RichUtils.toggleBlockType(editorState, state));
    }

    function _onLinkClick() {
        onEditorChange(RichUtils.toggleInlineStyle(
            editorState,
            'LINK'
        ));
    }

    function onSave() {
        return <Redirect to='/edit/news' />
    }

    return (
        <Fragment>
            <AdminLayout title={ showTopText() } backLabel='Посты' backLink='/edit/news/' hasBack={ true } >
                <div className='admin-edit-post__wrapper'>
                    <div className='admin-edit-post-meta'>
                        <AdminMetaRow title='В архиве'>
                            <AdminSwitch state={ isArchived } setState={ setIsArchived } onClick={ () => console.log('arch') } />
                        </AdminMetaRow>
                        <AdminMetaRow title='Дата создания'>
                            { postDate }
                        </AdminMetaRow>
                        <AdminMetaRow title='Дата публикации'>
                            -
                        </AdminMetaRow>
                        <AdminMetaRow title='В архиве'>
                            <AdminSwitch state={ isArchived } setState={ setIsArchived } onClick={ () => console.log('arch') } />
                        </AdminMetaRow>
                        <AdminMetaRow title='В архиве'>
                            <AdminSwitch state={ isArchived } setState={ setIsArchived } onClick={ () => console.log('arch') } />
                        </AdminMetaRow>
                    </div>
                </div>
                <div className='admin-edit-post__wrapper'>
                </div>
                <div className='admin-edit-post__wrapper'>
                    <div className='admin-edit-post__inputs'>
                        <input type='text'
                            placeholder='Название'
                            className='admin-edit-post__title'
                            onChange={ evt => {
                                setPostTitle(evt.target.value);
                                //setEditorState(evt.target.value)
                            } }
                            value={ postTitle } />
                        <div className='admin-edit-post__content-text'>
                            <Editor placeholder='Превью'
                                editorState={ editorState }
                                handleKeyCommand={ handleKeyCommand }
                                onChange={ onEditorChange } />
                        </div>
                        <textarea name='content'
                            className={ `admin-edit-post__content-text` }
                            placeholder='Контент' cols="30" rows="10" value={ postContent }
                            onChange={ e => setPostContent(e.target.value) } />
                    </div>
                    <div className='admin-edit-post__tools'>
                        <AEditPostRow>
                            <AEditPostItem classMod="bold" click={ () => styleInline('BOLD') }>Ж</AEditPostItem>
                            <AEditPostItem classMod="italic" click={ () => styleInline('ITALIC') }>К</AEditPostItem>
                            <AEditPostItem classMod="underline" click={ () => styleInline('UNDERLINE') }>П</AEditPostItem>
                        </AEditPostRow>
                        <AEditPostRow>
                            <AEditPostItem classMod="strikethrough" click={ () => styleInline('STRIKETHROUGH') }>З</AEditPostItem>
                        </AEditPostRow>
                        <AEditPostRow>
                            <AEditPostItem click={ () => styleBlock('header-one') }>З1</AEditPostItem>
                            <AEditPostItem click={ () => styleBlock('header-two') }>З2</AEditPostItem>
                            <AEditPostItem click={ () => styleBlock('header-three') }>З3</AEditPostItem>
                        </AEditPostRow>
                        <AEditPostRow>
                            <AEditPostItem click={ () => styleBlock('unordered-list-item') }>Ul</AEditPostItem>
                            <AEditPostItem click={ () => styleBlock('ordered-list-item') }>Ol</AEditPostItem>
                            <AEditPostItem click={ () => styleBlock('code-block') }>Code</AEditPostItem>
                        </AEditPostRow>
                        <AEditPostRow>
                            <AEditPostItem click={ () => styleBlock('blockquote') }>“ ”</AEditPostItem>
                            <AEditPostItem click={ () => styleBlock('unstyled') }>Сброс</AEditPostItem>
                        </AEditPostRow>
                        <AEditPostRow>
                            <AEditPostItem click={ _onLinkClick }>Link</AEditPostItem>
                        </AEditPostRow>
                    </div>
                </div>
            </AdminLayout>
            <AdminSecondaryFooter>
                <AdminButton classMod='save' label='Сохранить' onClick={ onSave } />
                <AdminButton classMod='delete' label='Удалить' onClick={ () => console.log('Удалить') } />
                <AdminButton classMod='republish' label='Переопубликовать' onClick={ () => console.log('Переопубликовать') } />
                <AdminButton classMod='archive' label='Архив' onClick={ () => console.log('Архив') } />
            </AdminSecondaryFooter>
        </Fragment>
    )
}

function AEditPostRow({ children }) {
    return (
        <div className="admin-edit-post__tools-row">
            { children }
        </div>
    )
}

function AEditPostItem({ children, click, classMod }) {
    return (
        <div className={ `admin-edit-post__tools-item ${ classMod ? "admin-edit-post__tools-item_" + classMod : "" }` } onClick={ click }>
            { children }
        </div>
    )
}

AdminEditPost.propTypes = {
    getPost: PropTypes.func.isRequired,
    addPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost, addPost })(AdminEditPost);