import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

 
// let dialogsData = [
//   { id: 1, name: 'Ostap' },
//   { id: 2, name: 'Vova' },
//   { id: 3, name: 'Andry' },
//   { id: 4, name: 'Victoria' },
//   { id: 5, name: 'Ostap' },
// ]

// let messagesData = [
//   { id: 1, messages: 'Hello' },
//   { id: 2, messages: 'How are you ?' },
//   { id: 3, messages: 'Yo' },
//   { id: 4, messages: 'Yo' },
//   { id: 5, messages: 'Yo' },
// ]

//  let posts = [
//   { id: 1, message: 'Hi, how are you?' , likeCount:12},
//   { id: 2, message: 'It\'s my first post!', likeCount:1 },
//   { id: 3, message: 'kur-kru', likeCount: 1 },
//   { id: 4, message: 'Blabla!', likeCount: 2 },
// ]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
    
    state={state}
    
    // posts={posts} messagesData={messagesData} dialogsData={dialogsData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
