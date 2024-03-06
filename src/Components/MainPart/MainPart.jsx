import fet1 from '../../../public/Thumbnail/Rectangle 181.png'
import fet2 from '../../../public/Thumbnail/Rectangle 18-11.png'
import fet3 from '../../../public/Thumbnail/Rectangle 18-22.png'
import fets1 from '../../../public/Thumbnail/Rectangle 18.png'
import fets2 from '../../../public/Thumbnail/Rectangle 18-1.png'
import fets3 from '../../../public/Thumbnail/Rectangle 18-2.png'
import off1 from '../../../public/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-1.png'
import off2 from '../../../public/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-2.png'
import off3 from '../../../public/Offer/sliderUp_to_14__discount_on_Domestic_flights 2.png'
import news from '../../../public/News letter/Isolation_Mode.png'
import test1 from '../../../public/testimonial/Rectangle 30.png'
import test2 from '../../../public/testimonial/Rectangle 32.png'
import test3 from '../../../public/testimonial/Rectangle 33.png'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BiStar } from "react-icons/bi";
import air1 from '../../../public/Airlines Icon/american.png'
import air2 from '../../../public/Airlines Icon/BBA.png'
import air3 from '../../../public/Airlines Icon/Emirates.png'
import air4 from '../../../public/Airlines Icon/Malaysia-1.png'
import air5 from '../../../public/Airlines Icon/Malaysia.png'
import air6 from '../../../public/Airlines Icon/Singapore Airlines.png'
import air7 from '../../../public/Airlines Icon/Turkish Airlines.png'
import testi from '../../../public/testimonial/Rectangle 33.png'

const MainPart = () => {
    return (
        <div className="mx-20 mt-24">
            {/* Featured Dentinations part */}
            <div>
                <h1 className="text-black font-bold text-3xl my-3">Featured Dentinations</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="card bg-base-100 shadow-2xl">
                    <figure className="px-3 pt-10">
                        <img src={fet1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <p className='font-bold text-lg'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn bg-[#ffb700e8] hover:bg-[#FFB700] px-14">View More</button>
                        </div>
                    </div>
                    </div>
                    <div className="card bg-base-100 shadow-2xl">
                    <figure className="px-3 pt-10">
                        <img src={fet2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <p className='font-bold text-lg'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn bg-[#ffb700e8] hover:bg-[#FFB700] px-14">View More</button>
                        </div>
                    </div>
                    </div>
                    <div className="card bg-base-100 shadow-2xl">
                    <figure className="px-3 pt-10">
                        <img src={fet3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <p className='font-bold text-lg'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn bg-[#ffb700e8] hover:bg-[#FFB700] px-14">View More</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            {/* Deals And Offers part */}
            <div>
                <h2 className='my-14 text-black font-bold text-3xl'>Deals And Offers</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className='flex shadow-xl rounded-lg items-center gap-4 cursor-pointer'>
                        <img src={off3} alt="" />
                        <div>
                        <p className='font-bold my-3 text-[12px]'>With Bkash Payment Only</p>
                        <h4 className='text-[#016DE4] font-bold'>Up to 40% Discount on the basefare Of Domestic</h4>
                        </div>
                    </div>
                    <div className='flex shadow-xl rounded-lg items-center gap-4 cursor-pointer'>
                        <img src={off1} alt="" />
                        <div>
                        <p className='font-bold my-3 text-[12px]'>With Bkash Payment Only</p>
                        <h4 className='text-[#016DE4] font-bold'>Up to 40% Discount on the basefare Of Domestic</h4>
                        </div>
                    </div>
                    <div className='flex shadow-xl rounded-lg items-center gap-4 cursor-pointer'>
                        <img src={off2} alt="" />
                        <div>
                        <p className='font-bold my-3 text-[12px]'>With Bkash Payment Only</p>
                        <h4 className='text-[#016DE4] font-bold'>Up to 40% Discount on the basefare Of Domestic</h4>
                        </div>
                    </div>
                </div>
                <p className='text-7xl text-center '>.<span className='text-[#ffb700e8]'>.</span>.</p>
            </div>

            {/* Populer Airlines part */}
            <div>
                <h1 className='text-4xl font-bold my-8'>Popular Airlines</h1>
                <div className='grid grid-cols-4 gap-4'>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air1} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air1} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air1} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air2} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air3} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air4} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air5} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air6} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air7} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air1} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air1} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shadow-2xl rounded-lg p-3'>
                    <img src={air1} alt="" />
                    <div className=''>
                        <h1>Biman Bangladesh Airlines</h1>
                        <p className='flex items-center gap-2'><BiStar /> 4(783 Review)</p>
                    </div>
                </div>
                </div>
            </div>

            {/* Tastemonials  */}
            <div>
                <h1 className='text-4xl font-bold my-10'>Testimonials</h1>
                <div className='flex flex-col lg:flex-row w-[50%] mx-auto items-center gap-16'>
                    <img src={testi} alt="" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestias, adipisci quos illo temporibus officiis alias impedit laudantium perspiciatis iste.</p>
                        <h2>Emily</h2>
                        <p>Adventure Enthusiast</p>
                        <div className='flex flex-row items-center'>
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        </div>
                    </div>
                </div>
            </div>

            {/* Travel Blog */}
            <div className='my-10 relative'>
                <h1 className='text-4xl font-bold'>Travel Blog</h1>
                <div className='mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                 <div className="card card-compact bg-base-100 shadow-2xl">
                    <figure><img src={fets1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex flex-row gap-5'>
                            <p className='text-[#FFB700]'>Work and Travel</p>
                            <p>16 September 23</p>
                        </div>
                        <p className='font-bold'>Embracing The Digital Nomad Lifestyle The Digital Nomad</p>
                        <hr />
                        <div className='flex flex-row justify-between items-center my-3'>
                           <div className='flex flex-row items-center gap-2'>
                           <img className='h-7 w-7 rounded-full' src={test1} alt="" />
                            <p>Ys Sttafen</p>
                           </div>
                            <a className='flex items-center flex-row gap-1' href="">Read More <span className='mt-1 text-lg'><MdOutlineKeyboardDoubleArrowRight /></span></a>
                        </div>
                    </div>
                 </div>
                 <div className="card card-compact bg-base-100 shadow-2xl">
                    <figure><img src={fets2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex flex-row gap-5'>
                            <p className='text-[#FFB700]'>Work and Travel</p>
                            <p>16 September 23</p>
                        </div>
                        <p className='font-bold'>Embracing The Digital Nomad Lifestyle The Digital Nomad</p>
                        <hr />
                        <div className='flex flex-row justify-between items-center my-3'>
                           <div className='flex flex-row items-center gap-2'>
                           <img className='h-7 w-7 rounded-full' src={test2} alt="" />
                            <p>Ys Sttafen</p>
                           </div>
                           <a className='flex items-center flex-row gap-1' href="">Read More <span className='mt-1 text-lg'><MdOutlineKeyboardDoubleArrowRight /></span></a>
                        </div>
                    </div>
                 </div>
                 <div className="card card-compact bg-base-100 shadow-2xl">
                    <figure><img src={fets3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex flex-row gap-5'>
                            <p className='text-[#FFB700]'>Work and Travel</p>
                            <p>16 September 23</p>
                        </div>
                        <p className='font-bold'>Embracing The Digital Nomad Lifestyle The Digital Nomad</p>
                        <hr />
                        <div className='flex flex-row justify-between items-center my-3'>
                           <div className='flex flex-row items-center gap-2'>
                           <img className='h-7 w-7 rounded-full' src={test3} alt="" />
                            <p>Ys Sttafen</p>
                           </div>
                           <a className='flex items-center flex-row gap-1' href="">Read More <span className='mt-1 text-lg'><MdOutlineKeyboardDoubleArrowRight /></span></a>
                        </div>
                    </div>
                 </div>
                </div>
                <div className=''>
                <MdOutlineArrowBackIos className='bg-[#ffb700de] rounded-full w-8 h-8 text-white absolute top-[50%] left-5 cursor-pointer' />
                <MdOutlineArrowForwardIos className='bg-[#ffb700de] rounded-full w-8 h-8 text-white absolute top-[50%] right-5 cursor-pointer' />
                </div>
            </div>

            {/* Subscribe part */}
            <div className='flex items-center gap-4 my-10'>
                <div className='flex-1'>
                    <img src={news} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-5xl font-bold'>Subscribe To Our Newsletter!</h1>
                    <p className='my-4 text-[#70ADF0] font-bold text-lg'>Subscribe To Our Newsletter And Stay Updated</p>
                    <label className="form-control">
                    <input type="text" placeholder="Type here" className="input input-bordered w-[70%]" />
                    </label>
                    <button className='btn bg-[#ffb700de] hover:bg-[#FFB700] w-[70%] my-5 font-bold'>Subscribe</button>
                </div>
            </div>
            
        </div>
    );
};

export default MainPart;