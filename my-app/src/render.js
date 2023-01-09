import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import { updateNewPostText } from './redux/state';


export let rerenderEntireTree = (state) => {
   
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
    <App
    updateNewPostText={updateNewPostText}
    state={state}
    addPost={addPost}
    
    // posts={posts} messagesData={messagesData} dialogsData={dialogsData}
    />
  </React.StrictMode>
);
}
