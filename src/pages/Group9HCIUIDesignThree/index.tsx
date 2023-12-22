import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Group9HCIUIDesignThreePage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img className="h-[26px] mt-0.5" src="images/img_grid.svg" alt="grid" />
      ),
      label: "Dashboard",
    },
    {
      icon: (
        <Img
          className="h-[22px]"
          src="images/img_thumbsup_white_a700.svg"
          alt="thumbsup"
        />
      ),
      label: "All  Courses",
    },
    {
      icon: (
        <Img
          className="h-[26px] mb-[17px] w-[26px]"
          src="images/img_settings_light_blue_600.svg"
          alt="settings"
        />
      ),
      label: "Students",
    },
    {
      icon: (
        <Img className="h-[26px] mb-3" src="images/img_file.svg" alt="file" />
      ),
      label: "Resources",
    },
    {
      icon: (
        <Img
          className="h-[22px] mt-[3px]"
          src="images/img_vector.svg"
          alt="vector"
        />
      ),
      label: "Discussions",
    },
    {
      icon: (
        <Img
          className="h-[26px] mb-2.5"
          src="images/img_search.svg"
          alt="search"
        />
      ),
      label: "Settings",
    },
    {
      icon: (
        <Img
          className="h-[26px] mb-[11px]"
          src="images/img_user.svg"
          alt="user"
        />
      ),
      label: "Logout",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-baloobhai items-center justify-start mx-auto p-[18px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mx-auto my-[5px] md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[202px] backdrop-opacity-[0.5] bg-black-900_99 blur-[60.00px] flex h-screen md:hidden justify-start overflow-auto rounded-[24px] top-[0]" />
          <div className="bg-gray-300 flex flex-1 flex-col items-center justify-start mb-[9px] ml-9 md:ml-[0] md:mt-0 mt-[23px] p-[11px] rounded-[14px] w-full">
            <div className="flex flex-col items-start justify-start mb-9 w-[92%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBalooBhaiRegular24"
                >
                  Students
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBalooBhaiRegular24"
                >
                  Active Now
                </Text>
              </div>
              <List
                className="flex flex-col gap-[27px] items-center mt-1.5 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-between w-full">
                  <div className="bg-white-A700 flex sm:flex-1 flex-col gap-[5px] items-center justify-start p-2.5 rounded-[14px] w-[49%] sm:w-full">
                    <div className="h-[100px] relative w-[100px]">
                      <Img
                        className="h-[100px] m-auto rounded-[50%] w-[100px]"
                        src="images/img_rectangle38.png"
                        alt="rectangleThirtyEight"
                      />
                      <Img
                        className="absolute bottom-[7%] h-[25px] left-[0] w-[25px]"
                        src="images/img_close_green_400.svg"
                        alt="close"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[15px] w-3/5 md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtBalooBhaiRegular24"
                      >
                        Frank Mokaya
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-roboto leading-[normal] min-w-[120px] md:ml-[0] ml-[5px] text-[13px] text-center"
                        shape="round"
                      >
                        Message Frank
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-start mb-[5px] p-[11px] rounded-[14px] w-[49%] sm:w-full">
                    <div className="font-baloobhai md:h-[100px] h-[138px] relative w-[70%]">
                      <div className="h-[138px] m-auto w-full">
                        <Img
                          className="h-[100px] mb-[-0.21px] mx-auto rounded-[50%] w-[100px] z-[1]"
                          src="images/img_rectangle39.png"
                          alt="rectangleThirtyNine"
                        />
                        <Text
                          className="mt-auto mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtBalooBhaiRegular24"
                        >
                          Emmanuel Kibet
                        </Text>
                      </div>
                      <div className="absolute bg-green-400 bottom-[33%] h-[25px] left-[19%] rounded-[12px] w-[25px]"></div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold font-roboto leading-[normal] mb-[13px] min-w-[146px] text-[13px] text-center"
                      shape="round"
                    >
                      Message Emmanuel
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-between w-full">
                  <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-start p-[9px] rounded-[14px] w-[49%] sm:w-full">
                    <div className="h-[98px] relative w-[39%]">
                      <Img
                        className="h-[98px] m-auto rounded-[50%] w-full"
                        src="images/img_rectangle41.png"
                        alt="rectangleFortyOne"
                      />
                      <Img
                        className="absolute bottom-[0] h-6 left-[0] w-[25px]"
                        src="images/img_close_green_400.svg"
                        alt="close"
                      />
                    </div>
                    <Text
                      className="mt-1 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtBalooBhaiRegular24"
                    >
                      Maureen Njihia
                    </Text>
                    <Button
                      className="cursor-pointer font-bold font-roboto leading-[normal] mb-3.5 min-w-[134px] text-[13px] text-center"
                      shape="round"
                    >
                      Message Maureen
                    </Button>
                  </div>
                  <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-start p-[15px] rounded-[14px] w-[49%] sm:w-full">
                    <div className="font-baloobhai h-[133px] relative w-[48%]">
                      <div className="h-[100px] md:h-[95px] mb-[-5.02px] mx-auto w-[100px] z-[1]">
                        <Img
                          className="h-[100px] m-auto rounded-[50%] w-[100px]"
                          src="images/img_rectangle41_100x100.png"
                          alt="rectangleFortyOne_One"
                        />
                        <div className="absolute bg-green-400 bottom-[0] h-[25px] left-[0] rounded-[12px] w-[25px]"></div>
                      </div>
                      <Text
                        className="mt-auto mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtBalooBhaiRegular24"
                      >
                        Joan Gitari
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold font-roboto leading-[normal] mb-2 min-w-[109px] text-[13px] text-center"
                      shape="round"
                    >
                      Message Joan
                    </Button>
                  </div>
                </div>
              </List>
              <div className="bg-white-A700 flex flex-col items-center justify-end mt-[37px] p-5 rounded-[14px] w-[49%] md:w-full">
                <div className="h-[100px] relative w-[100px]">
                  <Img
                    className="h-[100px] m-auto rounded-[50%] w-[100px]"
                    src="images/img_rectangle45.png"
                    alt="rectangleFortyFive"
                  />
                  <div className="absolute bg-green-400 bottom-[5%] h-[25px] left-[0] rounded-[12px] w-[25px]"></div>
                </div>
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBalooBhaiRegular24"
                >
                  Alex Sigei
                </Text>
                <Button
                  className="cursor-pointer font-bold font-roboto leading-[normal] min-w-[109px] text-[13px] text-center"
                  shape="round"
                >
                  Message Alex
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col font-roboto items-center justify-start ml-3.5 md:ml-[0] w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[96%] md:w-full">
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
              <div className="md:h-[26px] h-[33px] relative w-[7%] sm:w-full">
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
              <div className="flex flex-row gap-2 items-center justify-between w-[13%] sm:w-full">
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
              className="sm:flex-col flex-row gap-[23px] grid sm:grid-cols-1 grid-cols-2 justify-center mt-[29px] w-[96%]"
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
            <div className="flex flex-col font-baloobhai items-center justify-start mt-12">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtBalooBhaiRegular24"
              >
                Your tasks
              </Text>
            </div>
            <div className="bg-gray-300 flex flex-col items-start justify-start mt-3 p-[17px] rounded-[14px] w-[97%] md:w-full">
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
            <div className="flex flex-col gap-[15px] items-center justify-start mt-[15px] w-[97%] md:w-full">
              <div className="bg-gray-300 flex flex-col items-start justify-start p-[17px] rounded-[14px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start mb-1 w-[57%] md:w-full">
                  <Button
                    className="flex items-center justify-center rounded-[12px] w-[45px]"
                    color="white_A700"
                    size="xs"
                  >
                    <Img src="images/img_group65.png" alt="group371" />
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
                  <div className="bg-white-A700 flex flex-col items-center justify-start mt-[3px] p-1.5 rounded-[12px] w-[23%]">
                    <Img
                      className="h-[22px] md:h-auto mb-1 object-cover w-[91%]"
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
            <div className="bg-gray-300 flex flex-col items-start justify-end mt-9 p-[19px] rounded-[14px] w-[97%] md:w-full">
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
                                      alt="settings_Two"
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

export default Group9HCIUIDesignThreePage;
