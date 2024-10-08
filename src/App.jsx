import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setdata] = useState([]);
  const [oldUsers, setOldusers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/?results=10');

        setdata(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const filterOldUsers = data.filter((user) => user.dob.age > 50);

    setOldusers(filterOldUsers);

    console.log(oldUsers);
  }, [data]);

  console.log(data);

  return (
    <div className='flex flex-col justify-center bg-[#fff6f6]'>
      <h1 className='text-3xl font-bold text-center underline'>Midterm 2</h1>
      <div className='flex justify-center '>
        <div>
          {data.map((user) => (
            <div
              key={user.cell}
              className='w-[900px] border h-[840px] p-[90px] rounded-[50px] flex flex-col bg-[#FFFFFF] mb-[40px]'
            >
              <div className='w-[800px] h-[216px] flex items-center'>
                <div className='w-[200px] h-[200px] mb-[60px] mr-[56px] rounded-[50%] overflow-hidden '>
                  <img
                    src={user.picture.large}
                    alt=''
                    className='w-[200px] h-[200px] object-contain'
                  />
                </div>
                <div>
                  <p className='font-[Catamaran] font-bold text-[50px] leading-[82px] '>
                    {user.name.first} {user.name.last}
                  </p>
                  <p className='font-[Catamaran] font-medium text-[35px] leading-[57px]'>
                    {user.dob.age}/{user.gender}
                  </p>
                </div>
              </div>
              <div className='w-[800px] h-[394px] '>
                <div className='flex '>
                  <span className='w-[320px] font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    Age
                  </span>
                  <span className='w-[480px] font-[Catamaran]  font-medium text-[36px] leading-[59px]'>
                    {user.dob.age}y.o
                  </span>
                </div>
                <div className='flex '>
                  <span className='w-[320px] font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    Name
                  </span>
                  <span className='w-[480px] font-[Catamaran]  font-medium text-[36px] leading-[59px]'>
                    {user.name.first} {user.name.last}
                  </span>
                </div>
                <div className='flex '>
                  <span className='w-[320px]  font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    username
                  </span>
                  <span className='w-[480px] font-[Catamaran]  font-medium text-[36px] leading-[59px]'>
                    {user.login.username}
                  </span>
                </div>
                <div className='flex '>
                  <span className='w-[320px]  font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    city
                  </span>
                  <span className='w-[480px] font-[Catamaran]  font-medium text-[36px] leading-[59px]'>
                    {user.location.city}
                  </span>
                </div>
                <div className='flex '>
                  <span className='w-[320px]  font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    country
                  </span>
                  <span className='w-[480px] font-[Catamaran]  font-medium text-[36px] leading-[59px]'>
                    {user.location.country}
                  </span>
                </div>
                <div className='flex '>
                  <span className='w-[320px]  font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    postcode
                  </span>
                  <span className='w-[480px] font-[Catamaran] font-medium text-[36px] leading-[59px]'>
                    {user.location.postcode}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          {oldUsers.map((user) => (
            <div
              key={user.cell}
              className='w-[900px] border h-[840px] p-[90px] rounded-[50px] flex flex-col bg-[#FFFFFF] mb-[40px]'
            >
              <div className='w-[800px] h-[216px] flex items-center'>
                <div className='w-[200px] h-[200px] mb-[60px] mr-[56px] rounded-[50%] overflow-hidden '>
                  <img
                    src={user.picture.large}
                    alt=''
                    className='w-[200px] h-[200px] object-contain'
                  />
                </div>
                <div>
                  <p className='font-[Catamaran] font-bold text-[50px] leading-[82px] '>
                    {user.name.first} {user.name.last}
                  </p>
                  <p className='font-[Catamaran] font-medium text-[35px] leading-[57px]'>
                    {user.dob.age}/{user.gender}
                  </p>
                </div>
              </div>
              <div className='w-[800px] h-[394px] '>
                <div className='flex '>
                  <span className='w-[320px] font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    Age
                  </span>
                  <span className='w-[480px] font-[Catamaran]  font-medium text-[36px] leading-[59px]'>
                    {user.dob.age}y.o
                  </span>
                </div>
                <div className='flex '>
                  <span className='w-[320px] font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    Name
                  </span>
                  <span className='w-[480px] font-[Catamaran]  font-medium text-[36px] leading-[59px]'>
                    {user.name.first} {user.name.last}
                  </span>
                </div>
                <div className='flex '>
                  <span className='w-[320px]  font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    username
                  </span>
                  <span className='w-[480px] font-[Catamaran]  font-medium text-[36px] leading-[59px]'>
                    {user.login.username}
                  </span>
                </div>
                <div className='flex '>
                  <span className='w-[320px]  font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    city
                  </span>
                  <span className='w-[480px] font-[Catamaran]  font-medium text-[36px] leading-[59px]'>
                    {user.location.city}
                  </span>
                </div>
                <div className='flex '>
                  <span className='w-[320px]  font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    country
                  </span>
                  <span className='w-[480px] font-[Catamaran]  font-medium text-[36px] leading-[59px]'>
                    {user.location.country}
                  </span>
                </div>
                <div className='flex '>
                  <span className='w-[320px]  font-[Catamaran] font-bold text-[36px] leading-[59px]'>
                    postcode
                  </span>
                  <span className='w-[480px] font-[Catamaran] font-medium text-[36px] leading-[59px]'>
                    {user.location.postcode}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
