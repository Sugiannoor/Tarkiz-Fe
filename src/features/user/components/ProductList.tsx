import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div id="service" className="bg-[#161C2D] w-full rounded-xl flex justify-center items-center py-16 mt-5">
      <div className="w-4/5">
        <div className="font-raleway text-custom-primary-50 text-center lg:text-left  lg:text-xl font-extrabold mb-5">
          SERVICES
        </div>
        <div className="font-poppins text-center text-2xl lg:text-left lg:text-3xl font-bold text-custom-primary-50">
          Kami Siap Membantu Anda dengan Layanan Kami
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5 2xl:gap-14 mt-16">
          <div className="bg-[#005697] flex h-50 rounded-xl w-full justify-between p-6 lg:p-12">
            <div>
              <div className="font-raleway text-xl xl:text-2xl font-medium text-custom-primary-50">
                Web Development
              </div>
              <div className="font-raleway font-normal text-custom-primary-50 mt-2">47 Jobs</div>
            </div>
              <Link to={"/product/web"} aria-label="product web">
            <div className="bg-custom-blue-900 rounded-full flex items-center hover:bg-custom-blue-800 transition-colors duration-300 ease-in-out">
              <IoIosArrowRoundForward className="text-white" size={65}/>
            </div>
              </Link>
          </div>
          <div className="bg-[#CFD4D8] flex h-50 rounded-xl w-full justify-between p-6 lg:p-12">
            <div>
              <div className="font-raleway text-xl xl:text-2xl font-medium text-black">
                Android Development
              </div>
              <div className="font-raleway font-normal text-black mt-2">47 Jobs</div>
            </div>
              <Link to={"/product/android"} aria-label="product android">
            <div className="bg-custom-dark-100 rounded-full flex items-center hover:bg-custom-gray-600 transition-colors duration-300 ease-in-out">
              <IoIosArrowRoundForward className="text-white" size={65}/>
            </div>
              </Link>
          </div>
          <div className="bg-[#CFD4D8] flex h-50 rounded-xl w-full justify-between p-6 lg:p-12">
            <div>
              <div className="font-raleway text-xl xl:text-2xl font-medium text-black">
                IT Consultant
              </div>
              <div className="font-raleway font-normal text-black mt-2">47 Jobs</div>
            </div>
              <Link to={"/product/consultant"} aria-label="product consultant">
            <div className="bg-custom-dark-100 rounded-full flex items-center hover:bg-custom-gray-600 transition-colors duration-300 ease-in-out">
              <IoIosArrowRoundForward className="text-white" size={65}/>
            </div>
              </Link>
          </div>
          <div className="bg-[#CFD4D8] flex h-50 rounded-xl w-full justify-between p-6 lg:p-12">
            <div>
              <div className="font-raleway text-xl xl:text-2xl font-medium text-black">
                Maintance
              </div>
              <div className="font-raleway font-normal text-black mt-2">47 Jobs</div>
            </div>
              <Link to={"/product/maintance"} aria-label="product maintance">
            <div className="bg-custom-dark-100 rounded-full flex items-center hover:bg-custom-gray-600 transition-colors duration-300 ease-in-out">
              <IoIosArrowRoundForward className="text-white" size={65}/>
            </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
