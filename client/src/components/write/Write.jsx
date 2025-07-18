import './Write.css';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Context } from '../../context/Context.js';

export default function Write() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };

    let data;
    if (file) {
      data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;

      try {
        await axios.post('/upload', data); // ✅ URL should match backend route
      } catch (err) {
        console.log('Image upload error:', err);
      }
    }

    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {
      console.log('Post creation error:', err);
    }
  };

  return (
    <div className="write">
      <img
        className="writeImage"
        src={
          file
            ? URL.createObjectURL(file)
            : 'https://media.istockphoto.com/id/515228946/photo/flower.jpg?s=612x612&w=0&k=20&c=oUkBRs-zVtg0jXLEAvZA848SvM6GVQ51WZ3Nlwxge_Y='
        }
        alt="Preview"
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            className="writeInput writeText"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}