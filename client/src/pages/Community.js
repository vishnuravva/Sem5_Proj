// import React from 'react'

// const Community = () => {
//     return (
//         <div className="community">
//             <div className="chat-list">
//                 {/* List of chat rooms or discussion threads */}
//             </div>
//             <div className="chat-room">
//                 {/* Messages in the selected chat room */}
//                 <div className="message">
//                     <div className="user-avatar"></div>
//                     <div className="message-content">
//                         <div className="message-text">Hello, everyone!</div>
//                         <div className="message-meta">
//                             <span className="username">JohnDoe</span>
//                             <span className="timestamp">2 hours ago</span>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Input field for typing messages */}
//                 <div className="message-input">
//                     <input type="text" placeholder="Type your message..." />
//                     <button>Send</button>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Community
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Community = () => {

  const { isDarkMode, toggleTheme } = useTheme()
  // Sample data for community posts
  // const initialPosts = [
  //   { id: 1, author: 'User1', content: 'Hello, everyone!', likes: 5 },
  //   { id: 2, author: 'User2', content: 'I love this community!', likes: 10 },
  // ];

  // const [posts, setPosts] = useState(initialPosts);
  // const [newPost, setNewPost] = useState('');

  // const handlePostChange = (e) => {
  //   setNewPost(e.target.value);
  // };

  // const handlePostSubmit = () => {
  //   if (newPost.trim() !== '') {
  //     const newPostData = {
  //       id: Date.now(),
  //       author: 'CurrentUser', // Replace with the actual user's name
  //       content: newPost,
  //       likes: 0,
  //     };

  //     setPosts([...posts, newPostData]);
  //     setNewPost('');
  //   }
  // };

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Community;

{/* <h1>Community Page</h1>

<div className="post-form">
  <textarea
    placeholder="Share your thoughts..."
    value={newPost}
    onChange={handlePostChange}
  />
  <button onClick={handlePostSubmit}>Post</button>
</div>

<div className="post-list">
  {posts.map((post) => (
    <div key={post.id} className="post">
      <div className="post-header">
        <span className="post-author">{post.author}</span>
        <span className="post-likes">Likes: {post.likes}</span>
      </div>
      <p className="post-content">{post.content}</p>
      {/* You can add like and comment buttons here */}
    // </div>
  // ))}
// </div> */}
