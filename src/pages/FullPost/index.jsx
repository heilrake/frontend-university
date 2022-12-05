import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import toast from 'react-hot-toast';

import instance from '../../axios';
import { Post } from '../../components/Post';

import styles from './FullPost.module.scss';

export const FullPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`/posts/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        toast.error('Щось пішло не так )');
      });
    setIsLoading(true);
  }, []);

  return (
    <>
      {data && isLoading ? (
        <Post
          id={id}
          title={data.title}
          imageUrl={`http://localhost:4444${data.imageUrl}`}
          isFullPost>
          <ReactMarkdown children={data.text} />,
        </Post>
      ) : (
        <Box className={styles.loader}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};
