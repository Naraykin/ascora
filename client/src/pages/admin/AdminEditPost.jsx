import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts, addPost } from '../../actions/postActions';

function AdminEditPost({ post }) {
    return (
        <div>
            
        </div>
    )
}

AdminIndex.propTypes = {
    getPosts: PropTypes.func.isRequired,
    addPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps)(AdminEditPost);