import { useState, useCallback, useMemo, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import { Link, useNavigate } from 'react-router-dom';

import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slice/auth';
import { Navigate } from 'react-router-dom';
import instance from '../../axios';
import toast from 'react-hot-toast';

export const AddPost = () => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputFileRef = useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await instance.post('/upload', formData);
      setImageUrl(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl('');
  };

  const onChange = useCallback((value) => {
    setText(value);
  }, []);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введіть текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/" />;
  }

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const { data } = await instance.post('/posts', { title, text, imageUrl });
      const id = data._id;

      navigate(`/posts/${id}`);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Paper style={{ padding: 30 }}>
      <Button onClick={() => inputFileRef.current.click()} variant="outlined" size="large">
        Загрузити картинку
      </Button>
      <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <>
          <Button variant="contained" color="error" onClick={onClickRemoveImage}>
            Видалити
          </Button>
          <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
        </>
      )}
      <br />
      <br />
      <TextField
        b={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок публікації..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      {/* <TextField classes={{ root: styles.tags }} variant="standard" placeholder="Тэги" fullWidth /> */}
      <SimpleMDE className={styles.editor} value={text} onChange={onChange} options={options} />
      <div className={styles.buttons}>
        <Button onClick={onSubmit} size="large" variant="contained">
          Опублікувати
        </Button>
        <Link href="/">
          <Button size="large">Отмена</Button>
        </Link>
      </div>
    </Paper>
  );
};
