import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const Group9HCIUIDesignFivePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-baloobhai items-center justify-start mx-auto p-2.5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1412px] mb-3 mt-1.5 mx-auto md:px-5 w-full">
          <div className="md:h-[852px] h-[860px] relative w-[8%] md:w-full">
            <div className="absolute md:h-[852px] h-[853px] inset-[0] justify-center m-auto w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-black-900_99 blur-[60.00px] bottom-[0] h-[804px] right-[15%] rounded-[24px] w-[48%]"></div>
              <div className="absolute bg-black-900 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[22px] sm:px-5 rounded-[24px] w-full">
                <Img
                  className="common-pointer h-[26px] mt-[163px]"
                  src="images/img_grid.svg"
                  alt="grid"
                  onClick={() => navigate("/group9hciuidesignone")}
                />
                <Img
                  className="common-pointer h-[26px] mt-[30px]"
                  src="images/img_thumbsup_white_a700.svg"
                  alt="thumbsup"
                  onClick={() => navigate("/coursesopenpagedesktop")}
                />
                <Img
                  className="common-pointer h-[26px] ml-0.5 md:ml-[0] mt-[38px]"
                  src="images/img_lock.svg"
                  alt="lock"
                  onClick={() => navigate("/group9hciuidesignthree")}
                />
                <Img
                  className="common-pointer h-[26px] mt-[39px]"
                  src="images/img_file.svg"
                  alt="file"
                  onClick={() => navigate("/group9hciuidesignfour")}
                />
                <Img
                  className="h-[26px] mt-[38px]"
                  src="images/img_vector_light_blue_600.svg"
                  alt="vector"
                />
                <Img
                  className="h-[26px] mt-[21px]"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Img
                  className="h-[26px] mb-[258px] ml-0.5 md:ml-[0] mt-[39px]"
                  src="images/img_user.svg"
                  alt="user"
                />
              </div>
            </div>
            <Text
              className="common-pointer absolute left-[22%] md:text-5xl text-[64px] text-white-A700 top-[0]"
              size="txtBalooBhaiRegular64"
              onClick={() => navigate("/")}
            >
              F.
            </Text>
          </div>
          <div className="bg-gray-300 flex md:flex-1 flex-col gap-[7px] items-center justify-start mb-[9px] md:ml-[0] ml-[38px] md:mt-0 mt-[30px] p-3.5 rounded-[14px] w-[34%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtBalooBhaiRegular24"
            >
              Calendar
            </Text>
            <div className="h-64 md:h-[740px] mb-[489px] relative w-[93%] sm:w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[14px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBalooBhaiRegular24"
                >
                  SU MON TUE WED THUR FRI SAT
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBalooBhaiRegular24"
                >
                  <span className="text-gray-500 font-baloobhai text-left font-normal">
                    29
                  </span>
                  <span className="text-black-900 font-baloobhai text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-gray-500_01 font-baloobhai text-left font-normal">
                    30
                  </span>
                  <span className="text-black-900 font-baloobhai text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-gray-500_01 font-baloobhai text-left font-normal">
                    31
                  </span>
                  <span className="text-black-900 font-baloobhai text-left font-normal">
                    {" "}
                    1 2 3 4
                  </span>
                </Text>
                <Text
                  className="mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBalooBhaiRegular24"
                >
                  5 6 7 8 9 10 11
                </Text>
                <Text
                  className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBalooBhaiRegular24"
                >
                  12 13 14 15 16 17 18
                </Text>
                <Text
                  className="mb-[35px] mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBalooBhaiRegular24"
                >
                  19 20 21 22 23 24 25
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] left-[3%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtBalooBhaiRegular24"
              >
                26 27 28 29 30 31
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col font-roboto justify-start md:ml-[0] ml-[287px] w-[37%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[87%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-10 items-start justify-end p-[9px]"
                style={{ backgroundImage: "url('images/img_group416.svg')" }}
              >
                <Text
                  className="md:ml-[0] ml-[38px] mt-2 text-[10px] text-black-900"
                  size="txtRobotoRegular10"
                >
                  Search course....
                </Text>
              </div>
              <div className="md:h-[26px] h-[33px] sm:ml-[0] ml-[35px] relative w-[7%] sm:w-full">
                <Img
                  className="absolute bottom-[0] h-[26px] left-[0]"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <div className="absolute bg-white-A700 flex flex-col h-4 items-center justify-start right-[0] rounded-[50%] top-[0] w-4">
                  <div className="bg-red-400 flex flex-col h-3.5 items-start justify-start rounded-[50%] w-3.5">
                    <Text
                      className="ml-0.5 md:ml-[0] text-[10px] text-white-A700"
                      size="txtRobotoRegular10WhiteA700"
                    >
                      1
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-between sm:ml-[0] ml-[17px] w-[13%] sm:w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <Img
                    className="h-10 md:h-auto object-cover rounded-bl-lg rounded-br-lg w-10"
                    src="images/img_image13.png"
                    alt="imageThirteen"
                  />
                </div>
                <Img
                  className="h-[3px]"
                  src="images/img_vector_black_900.svg"
                  alt="vector_One"
                />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[23px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[53px] mt-[29px] w-[87%]"
              orientation="horizontal"
            >
              <div className="h-[103px] relative w-full">
                <div className="absolute bg-gray-300 h-24 inset-x-[0] mx-auto rounded-[14px] top-[0] w-full"></div>
                <div className="absolute flex flex-row gap-[11px] h-full inset-[0] items-center justify-center m-auto w-[67%]">
                  <Text
                    className="md:text-5xl text-[64px] text-black-900"
                    size="txtBalooBhaiRegular64Black900"
                  >
                    11
                  </Text>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    <>
                      Courses
                      <br />
                      completed
                    </>
                  </Text>
                </div>
              </div>
              <div className="h-[103px] relative w-full">
                <div className="absolute bg-gray-300 h-24 inset-x-[0] mx-auto rounded-[14px] top-[0] w-full"></div>
                <div className="absolute flex flex-row gap-[15px] h-full inset-[0] items-center justify-center m-auto w-[64%]">
                  <Text
                    className="md:text-5xl text-[64px] text-black-900"
                    size="txtBalooBhaiRegular64Black900"
                  >
                    5
                  </Text>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    <>
                      Courses
                      <br />
                      in progress
                    </>
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-col font-baloobhai items-center justify-start md:ml-[0] ml-[172px] mt-12">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtBalooBhaiRegular24"
              >
                Your tasks
              </Text>
            </div>
            <div className="flex flex-col gap-[21px] items-center justify-start ml-16 md:ml-[0] mt-2.5 w-[88%] md:w-full">
              <div className="bg-gray-300 flex flex-col items-start justify-start p-[17px] rounded-[14px] w-[99%] md:w-full">
                <div className="flex flex-row gap-3 items-center justify-start mb-1.5 w-[48%] md:w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-1.5 rounded-[12px] w-[24%]">
                    <Img
                      className="h-[22px] my-0.5"
                      src="images/img_vector_black_900_22x30.svg"
                      alt="vector_Two"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900"
                      size="txtBalooBhaiRegular16Black900"
                    >
                      HCI Discussion
                    </Text>
                    <Text
                      className="mt-0.5 text-[13px] text-black-900"
                      size="txtRobotoRegular13Black900"
                    >
                      23rd Apr 2022, Tuesday
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start w-[99%] md:w-full">
                <div className="bg-gray-300 flex flex-col items-start justify-start p-[17px] rounded-[14px] w-full">
                  <div className="flex flex-row gap-3 items-center justify-start mb-1 w-[57%] md:w-full">
                    <Button
                      className="flex items-center justify-center rounded-[12px] w-[45px]"
                      color="white_A700"
                      size="xs"
                    >
                      <Img src="images/img_group65.png" alt="group400" />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-black-900"
                        size="txtBalooBhaiRegular16Black900"
                      >
                        Assembly Programming
                      </Text>
                      <Text
                        className="mt-[3px] text-[13px] text-black-900"
                        size="txtRobotoRegular13Black900"
                      >
                        24th Apr 2022, Wednesday
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-300 flex flex-col items-start justify-end p-[19px] rounded-[14px] w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start mt-0.5 w-[49%] md:w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start mt-[3px] p-[5px] rounded-[12px] w-[23%]">
                      <Img
                        className="h-[22px] md:h-auto mb-1.5 mt-0.5 object-cover w-[86%]"
                        src="images/img_pencil.png"
                        alt="pencil"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mb-0.5">
                      <Text
                        className="text-base text-black-900"
                        size="txtBalooBhaiRegular16Black900"
                      >
                        Automata Theory
                      </Text>
                      <Text
                        className="text-[13px] text-black-900"
                        size="txtRobotoRegular13Black900"
                      >
                        25th Apr 2022, Thursday
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 flex flex-col items-start justify-end md:ml-[0] ml-[17px] mr-[52px] mt-8 p-[19px] rounded-[14px] w-[87%] md:w-full">
              <div className="flex flex-row gap-[55px] items-center justify-start md:ml-[0] ml-[3px] mt-2 w-[92%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[52%]">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtBalooBhaiRegular24"
                  >
                    Learn even more!
                  </Text>
                  <Text
                    className="leading-[24.00px] mt-3.5 text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    <>
                      Unlock premium features
                      <br />
                      for more resources.
                    </>
                  </Text>
                  <Button
                    className="cursor-pointer font-bold font-roboto leading-[normal] min-w-[120px] mt-[30px] text-[13px] text-center"
                    shape="round"
                    size="lg"
                  >
                    Go Premium
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-[34%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                          <div className="flex flex-row items-start justify-center w-[35%] md:w-full">
                            <Img
                              className="h-2.5 mt-0.5"
                              src="images/img_vector_black_900_10x4.svg"
                              alt="vector_Three"
                            />
                            <Img
                              className="h-[5px] ml-4"
                              src="images/img_vector_black_900_5x2.svg"
                              alt="vector_Four"
                            />
                            <Img
                              className="h-2.5 ml-4 mt-0.5"
                              src="images/img_vector_10x4.svg"
                              alt="vector_Five"
                            />
                          </div>
                          <div className="h-[139px] relative w-full">
                            <Img
                              className="h-[5px] mb-[-2.29px] ml-auto mr-6 w-1 z-[1]"
                              src="images/img_vector_black_900_5x4.svg"
                              alt="vector_Eight"
                            />
                            <Img
                              className="h-[5px] mb-[-2.24px] ml-6 w-1 z-[1]"
                              src="images/img_vector_5x4.svg"
                              alt="vector_Nine"
                            />
                            <div
                              className="bg-cover bg-no-repeat flex flex-row h-[136px] items-start justify-between m-auto p-0.5 w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group415.svg')",
                              }}
                            >
                              <Img
                                className="h-[5px] ml-[9px] mt-3.5"
                                src="images/img_vector_black_900_5x8.svg"
                                alt="vector_Six"
                              />
                              <div className="h-[111px] sm:h-[119px] md:h-[98px] mt-[19px] relative w-1/4">
                                <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-4/5">
                                  <div className="flex flex-col md:gap-10 gap-[61px] items-start justify-start w-full">
                                    <Img
                                      className="h-[22px] md:ml-[0] ml-[3px]"
                                      src="images/img_settings.svg"
                                      alt="settings"
                                    />
                                    <Img
                                      className="h-[17px]"
                                      src="images/img_user_black_900.svg"
                                      alt="user_One"
                                    />
                                  </div>
                                </div>
                                <Img
                                  className="absolute h-3 left-[0] top-[0]"
                                  src="images/img_contrast.svg"
                                  alt="contrast"
                                />
                              </div>
                              <Img
                                className="h-[5px] mr-[9px] mt-3.5"
                                src="images/img_vector_5x8.svg"
                                alt="vector_Seven"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Group9HCIUIDesignFivePage;
