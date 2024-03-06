import img1 from '../../../public/Logo/LOGO.png'
import banner from '../../../public/Hero Image/Rectangle 2.png'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
    return (
        <div>
          <div className="navbar bg-base-100 px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a className='font-bold'>Blog</a></li>
        <li><a className='font-bold'>Offer</a></li>
        <li><a className='font-bold'>Airlines</a></li>
        <li><a className='font-bold '>About</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={img1} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a className='font-bold '>Blog</a></li>
        <li><a className='font-bold '>Offer</a></li>
        <li><a className='font-bold '>Airlines</a></li>
        <li><a className='font-bold'>About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary">Sign in</a>
  </div>
</div>  
<div className='relative'>
        <img src={banner} alt="" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[80%]'>
          <h2 className='font-bold text-4xl text-left my-4 mx-7'>Welcome to <span className='text-[#026DE5]'>Airbook</span></h2>
        <div className='bg-white p-10 rounded-lg'>
        <div className='flex flex-row justify-between '>
            <div className='flex items-center gap-3'>
              <p className='btn'>One Way</p>
              <p className='btn btn-primary'>Round Trip</p>
            </div>
            <div className='flex items-center gap-5'>
              <select className='btn' name="" id="">
                <option value="">Traveller</option>
                <option value="">New</option>
              </select>
              <select className='btn' name="" id="">
                <option value="">Economy</option>
                <option value="">New</option>
              </select>
            </div>
          </div>
            <div className='flex flex-row gap-3 mt-6'>
            <div style={{border:'1px solid black'}} className='flex items-center text-left gap-5 w-64 rounded-lg p-2   '>
                <h2 className='border-r-2'>DAC</h2>
                <div>
                    <p>Dhaka</p>
                    <p>Hazrat Shahajalal</p>
                </div>
            </div>
            <div style={{border:'1px solid black'}} className='flex items-center text-left gap-5 w-64 rounded-lg p-2   '>
                <h2 className='border-r-2'>DAC</h2>
                <div>
                    <p>Dhaka</p>
                    <p>Hazrat Shahajalal</p>
                </div>
            </div>
            <div style={{border:'1px solid black'}} className='flex items-center text-left gap-5 w-64 rounded-lg p-2   '>
                <h2 className='border-r-2'>DAC</h2>
                <div>
                    <p>Dhaka</p>
                    <p>Hazrat Shahajalal</p>
                </div>
            </div>
            <div style={{border:'1px solid black'}} className='flex items-center text-left gap-5 w-64 rounded-lg p-2   '>
                <h2 className='border-r-2'>DAC</h2>
                <div>
                    <p>Dhaka</p>
                    <p>Hazrat Shahajalal</p>
                </div>
            </div>
            <div>
           <p className='bg-[#FFB700] p-3 text-white rounded-lg mt-1 cursor-pointer'> <IoIosSearch className=' text-4xl' /></p>
            </div>
            </div>
        </div>
        </div>
      </div>
        </div>
    );
};

export default Header;