import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

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
      {posts.map((post, index) =>
        <Post
          id={post._id}
          title={post.title}
          imageUrl={post.imageUrl ? `http://localhost:4444${post.imageUrl}` : ''}
          isLoading={isloading}
          isEditable={isAuth}
        />
      )}
    </Box>
  );
};
export default Exposure;
