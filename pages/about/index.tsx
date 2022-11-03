import Footer from "../../components/Footer";
import {BsGraphUp} from "react-icons/bs";
import {RiPercentFill} from "react-icons/ri";
import NavBar from "../../components/NavBar";
import MapaMundi from "../../components/MapaMundi";

function About() {
    return (
        <>
        <NavBar/>
        <section className="bg-white">
            <div className="md:mx-auto md:container px-4">
                <div className="pt-10 md:pt-40">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center pb-12">
                            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                <div className="py-2 text-color">
                                    <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">Boost adoption of product and services</h1>
                                    <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                    <button type="button" className="text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
                                        <span>Entre como universitario</span>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only"></span>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <img alt="" className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png" />
                                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                        <div className="flex items-center">
                                            <div className="p-4 bg-rose-500 rounded-md">
                                            <RiPercentFill color="white"/>
                                            </div>
                                            <div className="ml-6">
                                                <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">2,330</h3>
                                                <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Estudantes</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pl-3 text-green-400">
                                            <BsGraphUp />
                                                <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2%</p>
                                            </div>
                                            <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">Aumento</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-3">
                                        <hr className="h-1 rounded-sm bg-gray-200" />
                                        <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-rose-500" />
                                    </div>
                                    <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">Meta Anual</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color">
                                    <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">Easily manage sales through our invoicing system</h1>
                                    <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <span className="">Entre como Proprietario</span>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only"></span>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <img alt="" className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png" />
                                <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                                <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                        <div className="flex items-center">
                                            <div className="p-4 bg-sky-500 rounded-md">
                                            <RiPercentFill color="white"/>
                                            </div>
                                            <div className="ml-6">
                                                <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">1.330</h3>
                                                <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Proprietarios</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pl-3 text-green-400">
                                            <BsGraphUp />
                                                <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">5.2%</p>
                                            </div>
                                            <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">Aumento</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-3">
                                        <hr className="h-1 rounded-sm bg-gray-200" />
                                        <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-sky-500" />
                                    </div>
                                    <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">Meta Anual</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <MapaMundi/>
            <Footer/>
        </>
    );
}

export default About;
