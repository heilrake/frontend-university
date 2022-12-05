import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';

import { Post } from '../../components/Post';

import { fetchPosts } from '../../redux/slice/postActionCreators';
import { selectIsAuth } from '../../redux/slice/auth';

const Exposure = () => {
  const { posts, isloading } = useSelector((state) => state.postsReducer);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {!isloading ? posts.map((post) =>
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          imageUrl={post.imageUrl ? `http://localhost:4444${post.imageUrl}` : ''}
          isLoading={isloading}
          isEditable={isAuth}
        />
      ) :
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 136px)', width: '100%' }}>
          <CircularProgress />
        </Box>
      }
    </Box >
  );
};
export default Exposure;
