import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import clsx from 'clsx';

import { fetchRemovePost } from '../../redux/slice/postActionCreators';

import styles from './Post.module.scss';

export const Post = ({ id, title, imageUrl, children, isFullPost, isLoading, isEditable }) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(fetchRemovePost(id));
  };

  return (
    <Box className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <Box className={styles.editButtons}>
          <Link to={`/posts/${id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <Box className={styles.wrapper}>
        <Box className={styles.indention}>
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
          </h2>
          {children && <div className={styles.content}>{children}</div>}
        </Box>
      </Box>
    </Box>
  );
};
