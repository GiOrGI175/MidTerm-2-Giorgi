import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { div } from 'framer-motion/client';

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/?results=10');

        setdata(res.data.results);
      } catch (error) {
        setError(error);
      }
    };
    fetchdata();
  }, []);

  console.log(data);
  return (
    <>
      <h1 className='text-3xl font-bold text-center'>Midterm 2</h1>
      <div>
        {data.map((user) => (
          <div key={user.cell}>
            <p>{user.gender}</p>
            <p>{user.name.first}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
