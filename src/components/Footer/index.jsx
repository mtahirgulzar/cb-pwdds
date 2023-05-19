import React from "react";
import Link from "next/link";
import { imageResolver } from "../../../utils/helpers";

const Footer = ({ data }) => {
  return (
    <div>
      <footer className="flex xl:flex-row items-center xl:items-start xl:gap-0 gap-16 flex-col  mt-[50px] px-4 xl:0">
        <div className="flex xl:w-[70%] justify-center w-full  mx-auto bg-[#FFFFFF] bg-opacity-70 backdrop-blur-[45px] z-10 shadow-2xl rounded-[21px]">
          <div className="xl:max-w-[803px]  2xl:ml-[15%] xm:ml-auto mx-2    pt-[74px]    w-full  xl:pr-[84px]">
            <div className="w-full">
              <div className="flex md:flex-row flex-col items-center justify-center gap-14  md:gap-x-[37px] w-full">
                <div className="max-w-[398px] ">
                  <div>
                    <Link href={"/"}>
                      <a href="" className="" title="go to home">
                        <img
                          src={imageResolver(data?.Logo).path}
                          alt={data?.Logo?.data?.attributes?.alternativeText}
                          className="cursor-pointer"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>
                  <p className=" text-[#4E4B66] leading-[24px] font-[500] pt-[25px] text-[14px] mb-[25px]">
                    {data?.description}
                  </p>
                  {/* <Cards /> */}
                  {/* {data?.cards?.map((item, index) => (
                    <div
                    title={item.name}
                      key={index}
                      className="bg-gray-100 bg-opacity-40 backdrop-blur-2xl mb-[10px] rounded-[12px] w-full "
                    >
                      <div className="flex gap-[25px] items-center p-[15px]">
                        <div>
                          {index === 1 ? (
                            <a href={`tel:+${item.name}`}>
                              <img
                                src={imageResolver(item.img).path}
                                alt={
                                  item?.img?.data?.attributes?.alternativeText
                                }
                                loading="lazy"
                              />
                            </a>
                          ) : (
                            <Link href={`${item.link}`}>
                              <a >
                                <img
                                  src={imageResolver(item.img).path}
                                  alt={
                                    item?.img?.data?.attributes?.alternativeText
                                  }
                                  loading="lazy"
                                />
                              </a>
                            </Link>
                          )}
                        </div>
                        <div className="">
                          {index === 1 ? (
                            <a href={`tel:+${item.name}`}>{item.name}</a>
                          ) : (
                            <Link href={`${item.link}`}>
                              <h2>
                                <a href={`${item.link}`}>{item.name} </a>{" "}
                              </h2>
                            </Link>
                          )}
                          {index === 1 ? (
                            <h3 className="text-[14px] font-medium  leading-[24px] text-[#4E4B66]">
                              {item.link}{" "}
                            </h3>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  ))} */}
                      {data?.cards?.map((item, index) => (

                    <div
                  
                      key={index}
                      className="bg-gray-100 bg-opacity-40 backdrop-blur-2xl mb-[10px] rounded-[12px] w-full "
                    >
                      <div className="flex gap-[25px] items-center p-[15px]">
                        <div>
                          {index === 1 ? (
                            <a href={`tel:+${item.name}`}   title={item.name} className="flex gap-[25px] items-center p-[15px]">
                              <img
                                src={imageResolver(item.img).path}
                                alt="footer image"
                              />
                               <h2>{item.name}</h2>
                            </a>
                          ) : (
                            <Link href={`${item.link}`}>
                              <a className="flex gap-[25px] items-center p-[15px]"   title={item.name}>
                                <img
                                  src={imageResolver(item.img).path}
                                  alt="footer image"
                                />
                                 <h2>{item.name}</h2>
                              </a>
                            </Link>
                          )}
                        </div>
                        {/* <div className="">
                          {index === 1 ? (
                            <a href={`tel:+${item.name}`}>{item.name}</a>
                          ) : (
                            <Link href={`${item.link}`}>
                              <a>
                                <h2>{item.name}</h2>
                              </a>
                            </Link>
                          )}
                          {index === 1 ? (
                            <h3 className="text-[14px] font-medium  leading-[24px] text-[#4E4B66]">
                              {item.link}{" "}
                            </h3>
                          ) : (
                            ""
                          )}
                        </div> */}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="max-w-[284px] px-[25px] pt-[25px] pb-[5px] w-full bg-white bg-opacity-60  rounded-[12px] backdrop-blur-2xl shadow-md ">
                  <div className="flex items-center gap-x-[25px] w-full pb-[25px]">
                    <div>
                      <img
                        src={imageResolver(data?.hours?.image).path}
                        alt={
                          data?.hours?.image?.data?.attributes?.alternativeText
                        }
                        className="w-[44px]"
                      />
                    </div>
                    <div>
                      <h1 className="text-sm font-medium leading-6 text-[#4E4B66]">
                        {data?.hours?.title}
                      </h1>
                    </div>
                  </div>
                  {data?.hours?.timings?.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between pb-[10px] mb-[10px]"
                    >
                      <div className="">
                        <h2 className="text-[14px] leading-[24px] font-[600] text-[#14142B]">
                          {item.name}
                        </h2>
                      </div>
                      <div className="">
                        <p className="text-[14px] leading-[24px] font-[600] text-[#6E7191]">
                          {item.link}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center  justify-between mt-[50px] mb-[12px]">
              <div className="tracking-[0.5px] text-[13px] leading-[24px] text-center md:text-start">
                © 2022{" "}
                <a href="/" className="text-[#5f2eea]" title="go to home page">
                  {" "}
                  Procopio Towle Dental Office
                </a>{" "}
                | All rights reserved | Powered by:{" "}
                <a href="https://vigorant.com/" className="text-[#5f2eea]" title="go to vigorant.com">
                  Vigorant, Inc.
                </a>{" "}
              </div>
              <div className="  flex items-center justify-center gap-x-[10px] mt-[8px] md::mt-0">
                <div className="text-white flex items-center w-[26px] h-[26px] bg-[#5F2EEA] rounded-full p-2  cursor-pointer ">
                  <a title="Procopio Towle Dental Office" href="https://www.google.com/maps/place/Procopio+Towle+Dental+Office/@37.8853136,-122.0761545,15z/data=!4m5!3m4!1s0x0:0xe0edc4fcdd7c04e8!8m2!3d37.8853136!4d-122.0761545">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      class="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </a>
                </div>
                <div className="text-white flex items-center w-[26px] h-[26px] bg-[#5F2EEA] rounded-full p-2  cursor-pointer ">
                  <a title="procopio towle dental office walnut creek" href="https://www.yelp.com/biz/procopio-towle-dental-office-walnut-creek">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      class="bi bi-yelp"
                      viewBox="0 0 16 16"
                    >
                      <path d="m4.188 10.095.736-.17a.824.824 0 0 0 .073-.02.813.813 0 0 0 .453-1.255 1.025 1.025 0 0 0-.3-.258 2.782 2.782 0 0 0-.428-.198l-.808-.295a76.035 76.035 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.143 2.143 0 0 0-.606-.116.723.723 0 0 0-.572.245 1.625 1.625 0 0 0-.105.132 1.555 1.555 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.785.785 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566.003.001Zm8.219-3.911a4.185 4.185 0 0 0-.8-1.14 1.602 1.602 0 0 0-.275-.21 1.591 1.591 0 0 0-.15-.073.723.723 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575-.34.345-.677.691-1.01 1.042l-.598.62a2.79 2.79 0 0 0-.298.365 1 1 0 0 0-.157.364.813.813 0 0 0 .007.301c0 .005.002.009.003.013a.812.812 0 0 0 .945.616.774.774 0 0 0 .074-.014l3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.787.787 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308ZM6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05c-.185.025-.37.06-.553.104a7.589 7.589 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857.022.01.045.018.068.025.15.057.313.068.469.032l.028-.007a.809.809 0 0 0 .377-.226.732.732 0 0 0 .053-.055Zm-.276 3.161a.737.737 0 0 0-.923-.234.976.976 0 0 0-.145.09 1.909 1.909 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705c-.29.395-.577.791-.861 1.193-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.73.73 0 0 0-.03.314c.013.11.05.217.108.312.031.047.064.093.1.138a1.548 1.548 0 0 0 .257.237 4.482 4.482 0 0 0 2.196.76 1.593 1.593 0 0 0 .349-.027 1.57 1.57 0 0 0 .163-.048.797.797 0 0 0 .278-.178.731.731 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821.025-.49.044-.98.06-1.469l.033-.87a2.09 2.09 0 0 0-.055-.623.93.93 0 0 0-.117-.27Zm5.783 1.362a2.199 2.199 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398-.43-.236-.86-.466-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a1.908 1.908 0 0 0-.466-.166.993.993 0 0 0-.17-.018.738.738 0 0 0-.725.616.946.946 0 0 0 .01.293c.038.204.13.406.224.583l.41.768c.228.434.459.864.696 1.294.152.28.28.52.398.719.023.037.048.077.068.112.145.239.261.39.379.497a.73.73 0 0 0 .596.201 1.55 1.55 0 0 0 .168-.029 1.584 1.584 0 0 0 .325-.129 4.06 4.06 0 0 0 .855-.64c.306-.3.577-.63.788-1.006.03-.053.055-.109.076-.165a1.58 1.58 0 0 0 .051-.161c.013-.056.022-.111.029-.168a.792.792 0 0 0-.038-.327.73.73 0 0 0-.165-.27Z" />
                    </svg>
                  </a>
                </div>
                <div className="text-white flex items-center w-[26px] h-[26px] bg-[#5F2EEA] rounded-full p-2  cursor-pointer ">
                  <a title="TizianaProcopioDDS" href="https://www.facebook.com/TizianaProcopioDDS/">
                    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative xl:w-[30%] w-full xl:h-[545px] h-[460px]">
          <iframe
            loading="lazy"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?q=2229%20OLYMPIC%20BOULEVARD%20WALNUT%20CREEK%2C%20CA%2094595&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            title="2229 OLYMPIC BOULEVARD WALNUT CREEK, CA 94595"
            aria-label="2229 OLYMPIC BOULEVARD WALNUT CREEK, CA 94595"
            data-rocket-lazyload="fitvidscompatible"
            data-lazy-src="https://maps.google.com/maps?q=2229%20OLYMPIC%20BOULEVARD%20WALNUT%20CREEK%2C%20CA%2094595&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            data-ll-status="loaded"
            className="entered lazyloaded     absolute  xl:right-3 right-0 top-0 w-[100%] min-h-full"
          ></iframe>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
