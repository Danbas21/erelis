import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Group9HCIUIDesignOnePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-[26px] mt-1"
          src="images/img_grid_light_blue_600.svg"
          alt="grid"
        />
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
          className="h-[26px] mb-4 w-[26px]"
          src="images/img_lock.svg"
          alt="lock"
        />
      ),
      label: "Students",
    },
    {
      icon: (
        <Img
          className="h-[26px] mb-[9px]"
          src="images/img_file.svg"
          alt="file"
        />
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
      <div className="bg-white-A700 flex flex-col font-baloobhai items-center justify-start mx-auto pb-4 px-4 w-full">
        <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between mb-[7px] mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[202px] backdrop-opacity-[0.5] bg-black-900_99 blur-[60.00px] flex h-screen md:hidden justify-start md:mt-0 mt-[23px] overflow-auto rounded-[24px] top-[0]"
          >
            <div className="backdrop-opacity-[0.5] bg-black-900_99 blur-[60.00px] h-[804px] ml-[76px] mr-[29px] mt-[49px] rounded-[24px] w-[48%]"></div>
            <Text
              className="ml-[66px] mr-[86px] md:text-5xl text-[64px] text-white-A700"
              size="txtBalooBhaiRegular64"
            >
              F.
            </Text>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "20px 20px 20px 36px",
                  gap: "21px",
                  color: "#e5e5e5",
                  fontSize: "16px",
                  [`&:hover, &.ps-active`]: {
                    color: "#13a1da",
                    fontWeight: "400 !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-[296px] mt-12 pr-4 w-full"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col font-roboto gap-5 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between w-[99%] md:w-full">
              <div className="h-[191px] md:h-[203px] mb-3 relative shadow-bs w-[57%] md:w-full">
                <div className="absolute bg-gray-300 bottom-[0] flex flex-col inset-x-[0] items-start justify-center mx-auto p-[31px] sm:px-5 rounded-[14px] w-full">
                  <Text
                    className="mt-3 text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtBalooBhaiRegular36"
                  >
                    Hello Frank !
                  </Text>
                  <Text
                    className="mb-2.5 text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    It’s good to see you again.
                  </Text>
                </div>
                <Img
                  className="absolute h-[191px] inset-y-[0] my-auto right-[17%]"
                  src="images/img_illustration.svg"
                  alt="illustration"
                />
              </div>
              <div className="flex flex-col gap-[29px] items-center justify-start md:mt-0 mt-[30px] w-2/5 md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-10 items-start justify-end p-[9px]"
                    style={{
                      backgroundImage: "url('images/img_group416.svg')",
                    }}
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
                  <div className="flex sm:flex-1 flex-row gap-2 items-center justify-between w-[13%] sm:w-full">
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
                  className="sm:flex-col flex-row gap-[23px] grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
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
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[86%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-[65%] md:w-full">
                <div className="bg-gray-300 flex flex-col items-center justify-start p-2 rounded-[14px]">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[97%] md:w-full">
                    <Button
                      className="flex h-16 items-center justify-center rounded-[12px] w-16"
                      color="white_A700"
                      size="lg"
                    >
                      <Img
                        className="h-8"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start ml-6 sm:ml-[0]">
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
                        by Dr Ng’ang’a
                      </Text>
                    </div>
                    <div className="h-10 sm:ml-[0] ml-[51px] relative w-10">
                      <Text
                        className="m-auto text-[13px] text-black-900"
                        size="txtRobotoRegular13Black900"
                      >
                        83%
                      </Text>
                      <div className="absolute border-2 border-black-900 border-solid h-10 inset-[0] justify-center m-auto rounded-[50%] w-10"></div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[120px] sm:ml-[0] ml-[39px] sm:mt-0 my-[11px] text-[13px] text-center"
                      shape="round"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
                <Img
                  className="h-10"
                  src="images/img_clock_black_900.svg"
                  alt="clock_One"
                />
              </div>
              <div className="flex flex-col font-baloobhai items-center justify-start md:mt-0 mt-7">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBalooBhaiRegular24"
                >
                  Your tasks
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-baloobhai md:gap-[45px] items-center justify-between ml-2 md:ml-[0] w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[56%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtBalooBhaiRegular24"
                  >
                    Courses
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[15px] w-[70%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtBalooBhaiRegular16Black900"
                    >
                      My Courses
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[27px] text-base text-black-900_75"
                      size="txtBalooBhaiRegular16Black90075"
                    >
                      New Courses
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[22px] text-base text-black-900_75"
                      size="txtBalooBhaiRegular16Black90075"
                    >
                      Favorites
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[35px] text-base text-black-900_75"
                      size="txtBalooBhaiRegular16Black90075"
                    >
                      Most Popular
                    </Text>
                  </div>
                  <div className="bg-gray-300 flex flex-col font-roboto items-center justify-start mt-[9px] p-2 rounded-[14px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[98%] md:w-full">
                      <Button
                        className="flex h-16 items-center justify-center rounded-[12px] w-16"
                        color="white_A700"
                      >
                        <Img
                          className="h-8"
                          src="images/img_close_yellow_500.svg"
                          alt="close_One"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start ml-6 sm:ml-[0]">
                        <Text
                          className="text-base text-black-900"
                          size="txtBalooBhaiRegular16Black900"
                        >
                          HCI
                        </Text>
                        <Text
                          className="mt-0.5 text-[13px] text-black-900"
                          size="txtRobotoRegular13Black900"
                        >
                          by Dr. Ruhiu
                        </Text>
                      </div>
                      <Img
                        className="h-4 sm:ml-[0] ml-[121px] w-4"
                        src="images/img_clock_black_900_16x16.svg"
                        alt="clock_Two"
                      />
                      <Text
                        className="sm:ml-[0] ml-[7px] text-[13px] text-black-900"
                        size="txtRobotoRegular13Black900"
                      >
                        6h 30min
                      </Text>
                      <Img
                        className="h-4 sm:ml-[0] ml-[39px] w-[15px]"
                        src="images/img_flame1.svg"
                        alt="flameOne"
                      />
                      <Text
                        className="sm:ml-[0] ml-[7px] text-[13px] text-black-900"
                        size="txtRobotoRegular13Black900"
                      >
                        4,9
                      </Text>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[120px] ml-8 sm:ml-[0] sm:mt-0 my-[11px] text-[13px] text-center"
                        shape="round"
                      >
                        View course
                      </Button>
                    </div>
                  </div>
                  <div className="font-roboto md:h-60 h-[368px] sm:h-[639px] mt-4 relative w-full">
                    <div className="absolute bg-gray-300 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2 rounded-[14px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[98%] md:w-full">
                        <div className="bg-white-A700 h-16 rounded-[12px] w-16"></div>
                        <div className="flex flex-col items-start justify-start ml-6 sm:ml-[0]">
                          <Text
                            className="text-base text-black-900"
                            size="txtBalooBhaiRegular16Black900"
                          >
                            Probability
                          </Text>
                          <Text
                            className="text-[13px] text-black-900"
                            size="txtRobotoRegular13Black900"
                          >
                            by Dr. Bundi
                          </Text>
                        </div>
                        <Img
                          className="h-4 sm:ml-[0] ml-[106px] w-4"
                          src="images/img_clock_black_900_16x16.svg"
                          alt="clock_Three"
                        />
                        <Text
                          className="sm:ml-[0] ml-[7px] text-[13px] text-black-900"
                          size="txtRobotoRegular13Black900"
                        >
                          5h 35min
                        </Text>
                        <Img
                          className="h-4 sm:ml-[0] ml-[39px] w-[15px]"
                          src="images/img_flame1.svg"
                          alt="flameEight"
                        />
                        <Text
                          className="sm:ml-[0] ml-[7px] text-[13px] text-black-900"
                          size="txtRobotoRegular13Black900"
                        >
                          4,7
                        </Text>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[120px] sm:ml-[0] ml-[33px] sm:mt-0 my-3 text-[13px] text-center"
                          shape="round"
                        >
                          View course
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bg-gray-300 bottom-[26%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[7px] rounded-[14px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[97%] md:w-full">
                        <div className="bg-white-A700 h-16 rounded-[12px] w-16"></div>
                        <div className="flex flex-col items-start justify-start ml-6 sm:ml-[0]">
                          <Text
                            className="text-base text-black-900"
                            size="txtBalooBhaiRegular16Black900"
                          >
                            Machine Learning
                          </Text>
                          <Text
                            className="text-[13px] text-black-900"
                            size="txtRobotoRegular13Black900"
                          >
                            by Prof. Wagacha
                          </Text>
                        </div>
                        <Img
                          className="h-4 sm:ml-[0] ml-[58px] w-4"
                          src="images/img_clock_black_900_16x16.svg"
                          alt="clock_Four"
                        />
                        <Text
                          className="sm:ml-[0] ml-[7px] text-[13px] text-black-900"
                          size="txtRobotoRegular13Black900"
                        >
                          11h 30min
                        </Text>
                        <Img
                          className="h-4 sm:ml-[0] ml-[31px] w-[15px]"
                          src="images/img_flame1.svg"
                          alt="flameSeven"
                        />
                        <Text
                          className="sm:ml-[0] ml-[7px] text-[13px] text-black-900"
                          size="txtRobotoRegular13Black900"
                        >
                          4,8
                        </Text>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[120px] sm:ml-[0] ml-[33px] sm:mt-0 my-[11px] text-[13px] text-center"
                          shape="round"
                        >
                          View course
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gray-300 flex flex-col h-full items-center justify-end mt-24 mx-auto p-[7px] rounded-[14px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[97%] md:w-full">
                        <Button
                          className="flex h-16 items-center justify-center rounded-[12px] w-16"
                          color="white_A700"
                          size="lg"
                        >
                          <Img
                            className="h-8"
                            src="images/img_close_green_400.svg"
                            alt="close_Two"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-black-900"
                            size="txtBalooBhaiRegular16Black900"
                          >
                            Assembly Programming
                          </Text>
                          <Text
                            className="text-[13px] text-black-900"
                            size="txtRobotoRegular13Black900"
                          >
                            by Dr.Miriti
                          </Text>
                        </div>
                        <Img
                          className="h-4 w-4"
                          src="images/img_clock_black_900_16x16.svg"
                          alt="clock_Five"
                        />
                        <Text
                          className="text-[13px] text-black-900"
                          size="txtRobotoRegular13Black900"
                        >
                          7h 40min
                        </Text>
                        <Img
                          className="h-4 w-[15px]"
                          src="images/img_flame1.svg"
                          alt="flameSix"
                        />
                        <Text
                          className="text-[13px] text-black-900"
                          size="txtRobotoRegular13Black900"
                        >
                          4,6
                        </Text>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[120px] sm:mt-0 my-[11px] text-[13px] text-center"
                          shape="round"
                        >
                          View course
                        </Button>
                      </div>
                    </div>
                    <div className="absolute flex flex-col md:gap-10 gap-[135px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                      <div className="bg-gray-300 flex flex-col items-center justify-start p-2 rounded-[14px] w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[98%] md:w-full">
                          <Button
                            className="flex h-16 items-center justify-center rounded-[12px] w-16"
                            color="white_A700"
                            size="lg"
                          >
                            <Img
                              className="h-8"
                              src="images/img_play_red_400.svg"
                              alt="play"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start ml-6 sm:ml-[0]">
                            <Text
                              className="text-base text-black-900"
                              size="txtBalooBhaiRegular16Black900"
                            >
                              Web Prohramming
                            </Text>
                            <Text
                              className="text-[13px] text-black-900"
                              size="txtRobotoRegular13Black900"
                            >
                              by Dr. Mburu
                            </Text>
                          </div>
                          <Img
                            className="h-4 sm:ml-[0] ml-[53px] w-4"
                            src="images/img_clock_black_900_16x16.svg"
                            alt="clock_Six"
                          />
                          <Text
                            className="sm:ml-[0] ml-[7px] text-[13px] text-black-900"
                            size="txtRobotoRegular13Black900"
                          >
                            3h 15min
                          </Text>
                          <Img
                            className="h-4 sm:ml-[0] ml-[39px] w-[15px]"
                            src="images/img_flame1.svg"
                            alt="flameFive"
                          />
                          <Text
                            className="sm:ml-[0] ml-[7px] text-[13px] text-black-900"
                            size="txtRobotoRegular13Black900"
                          >
                            4,7
                          </Text>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[120px] ml-8 sm:ml-[0] sm:mt-0 my-3 text-[13px] text-center"
                            shape="round"
                          >
                            View course
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start ml-6 md:ml-[0] w-[6%] md:w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_close_purple_a200.svg"
                          alt="close_Three"
                        />
                        <Img
                          className="h-8 w-8"
                          src="images/img_close_orange_400.svg"
                          alt="close_Four"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start mb-2 w-[41%] md:w-full">
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
                <div className="flex flex-col gap-[15px] items-center justify-start mt-[15px] w-[99%] md:w-full">
                  <div className="bg-gray-300 flex flex-col items-start justify-start p-[17px] rounded-[14px] w-full">
                    <div className="flex flex-row gap-3 items-center justify-start mb-1 w-[57%] md:w-full">
                      <Button
                        className="flex items-center justify-center rounded-[12px] w-[45px]"
                        color="white_A700"
                        size="xs"
                      >
                        <Img src="images/img_group65.png" alt="group443" />
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
                <div className="bg-gray-300 flex flex-col items-start justify-end mt-9 p-[19px] rounded-[14px] w-[99%] md:w-full">
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
                                          alt="settings_One"
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
        </div>
      </div>
    </>
  );
};

export default Group9HCIUIDesignOnePage;
