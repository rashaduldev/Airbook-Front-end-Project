import fet1 from '../../../public/Thumbnail/Rectangle 181.png'
import fet2 from '../../../public/Thumbnail/Rectangle 18-11.png'
import fet3 from '../../../public/Thumbnail/Rectangle 18-22.png'
import off1 from '../../../public/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-1.png'
import off2 from '../../../public/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-2.png'
import off3 from '../../../public/Offer/sliderUp_to_14__discount_on_Domestic_flights 2.png'

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
            </div>
            
        </div>
    );
};

export default MainPart;