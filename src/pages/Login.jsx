import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Login() {

  let [data, setData] = useState({ mobile: "" });

  let changedData = (event) => {
      setData((newData) => { return { ...newData, [event.target.name]: event.target.value } });
  }

  let handleSubmit = (event) => {
      event.preventDefault();
      console.log(data);
      setData({ mobile: "" })
  }

  return (
      <div class="LoginPage h-[75vh] w-[65%] bg-white flex flex-row shadow-lg shadow-gray-500 rounded-[35px] overflow-hidden my-[3rem] justify-between justify-self-center max-[450px]:flex-col max-[450px]:h-[85vh] max-[450px]:my-[1rem] max-[450px]:w-[80%]" >
          <div className='text-white bg-pink-400 flex flex-col justify-center items-center gap-[1.2rem] px-[5rem] rounded-r-[150px] max-[450px]:order-2 max-[450px]:rounded-br-[0px] max-[450px]:rounded-t-[50px] max-[450px]:gap-[1rem] max-[450px]:h-[45%] max-[450px]:px-[1rem]'>
              <h2 className='text-[2.5rem] leading-[2.5rem] max-[450px]:text-[2rem] text-center max-[450px]:leading-[2rem]'>Hello, Welcome!</h2>
              <p className="leading-[1rem] text-center">Don't have an account?</p>
              <Link to="/register" className='text-[1.2rem] font-[600] border-[2px] border-solid border-white rounded-[10px] leading-[2.7rem] px-[2.5rem] max-[450px]:text-[1rem] max-[450px]:leading-[2rem] max-[450px]:px-[2rem]'>Register</Link>
          </div>
          <div className='bg-white flex flex-col justify-center items-center gap-[3rem] px-[5rem] text-black max-[450px]:px-[1rem]'>
              <h2 className='text-[3rem] max-[450px]:text-[2rem]'>Login</h2>
              <form action="" className='flex flex-col gap-[1rem] max-[450px]:gap-[0.7rem]' onSubmit={handleSubmit}>
                  <label htmlFor="mobile" className='text-[18px] max-[450px]:text-[16px]'>Enter Mobile Number</label>
                  <input
                      type="number"
                      className='w-[20rem] h-[3rem] border-[2px] border-solid border-pink-400 rounded-[5px] bg-pink-100 text-black px-[1rem] max-[450px]:w-[12rem]' id='mobile'
                      placeholder='+91 **********'
                      onChange={changedData}
                      name='mobile'
                      value={data.mobile}
                      itemID='mobile'
                  />
                  <button className='text-[20px] text-white bg-pink-400 leading-[2.7rem] px-[2.5rem] rounded-[10px] mt-[2rem] self-center max-[450px]:text-[18px] max-[450px]:px-[1.5rem] max-[450px]:leading-[2.5rem] max-[450px]:mt-[1rem] max-[450px]:self-end'>Login</button>
              </form>
          </div>
      </div>
  );
};