import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';

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
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isloading ? [...Array(5)] : posts).map((post, index) =>
            isloading ? (
              <Post isLoading={true} key={index}>
                Hello bob
              </Post>
            ) : (
              <Post
                id={post._id}
                title={post.title}
                imageUrl={post.imageUrl ? `http://localhost:4444${post.imageUrl}` : ''}
                createdAt={'12 июня 2022 г.'}
                isLoading={isloading}
                isEditable={isAuth}
              />
            ),
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default Exposure;
