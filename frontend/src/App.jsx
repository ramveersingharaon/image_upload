import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [about, setAbout] = useState({});
  const [user, setUser] = useState();

  function handleAboutImage(e) {
    const file = e.target.files[0]
    const Reader = new FileReader();
    // Reader.readAsDataURL(e.target.files[0])
    Reader.readAsDataURL(file)

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({ ...about, avatar: Reader.result });
      }
    }
  }

  async function submitHandler() {
    try {
      console.log(about)
      const { data } = await axios.post("https://image-upload-2jbi.onrender.com/create", about);
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }

  async function getUsers() {
    try {
      const { data } = await axios.get("https://image-upload-2jbi.onrender.com/user")
      setUser(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers();

  }, [])
  console.log(user)
  return (
    <div className='app'>
      <form>
        <input type="text" placeholder='Name' value={about.name} onChange={(e) => setAbout({ ...about, name: e.target.value })} />
        <input type="text" placeholder='Title' value={about.title} onChange={(e) => setAbout({ ...about, title: e.target.value })} />
        <input type="file" placeholder='Choose Avatar' onChange={handleAboutImage} accept='image/' />
      </form>
      <button onClick={submitHandler}>Submit</button>

      <div className="user">
        {user && user.user.map((ele) => <div>
          <h1>Name:{ele.name}</h1>
          <h1>Name:{ele.title}</h1>
          <img src={ele.avatar.url} alt="" />
        </div>)}
      </div>
    </div>

  )
}

export default App
