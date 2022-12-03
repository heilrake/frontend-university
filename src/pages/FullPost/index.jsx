import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import instance from '../../axios';
import { Box, CircularProgress } from '@mui/material';
import { Post } from '../../components/Post';

import styles from './FullPost.module.scss';

export const FullPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const { id } = useParams();

  console.log(data);

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
          imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
          isFullPost>
          <p>{data.text}</p>
        </Post>
      ) : (
        <Box className={styles.loader}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};
