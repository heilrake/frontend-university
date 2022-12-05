import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

import 'easymde/dist/easymde.min.css';
import { selectIsAuth } from '../../redux/slice/auth';
import { Navigate } from 'react-router-dom';
import instance from '../../axios';

import styles from './AddPost.module.scss';

export const AddPost = () => {
  const isAuth = useSelector(selectIsAuth);
  const { id } = useParams();
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputFileRef = useRef(null);
  const isEditing = Boolean(id);

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

  useEffect(() => {
    if (id) {
      instance.get(`/posts/${id}`).then(({ data }) => {
        setText(data.text)
        setTitle(data.title)
        setImageUrl(data.imageUrl)
      }).catch((error) => {
        console.log(error);
      })
    }
  }, [])

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/" />;
  }

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const allInfo = { title, text, imageUrl }
      const { data } = isEditing ? await instance.patch(`/posts/${id}`, allInfo) : await instance.post('/posts', allInfo)
      const _id = isEditing ? id : data._id;

      navigate(`/posts/${_id}`);
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
          {isEditing ? 'Зберегти' : 'Опублікувати'}
        </Button>
        <Link href="/">
          <Button size="large">Отмена</Button>
        </Link>
      </div>
    </Paper>
  );
};
