import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const CoursesOpenPageDesktopPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-bevietnampro sm:gap-10 md:gap-10 gap-[147px] items-center justify-end mx-auto pt-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1860px] mx-auto md:px-5 w-full">
          <header className="flex flex-col items-center justify-center w-full">
            <div className="bg-orange-A400 flex flex-1 sm:flex-col flex-row gap-[23px] items-center justify-center py-3.5 rounded-lg w-full">
              <Text
                className="text-lg text-white-A700 w-auto"
                size="txtBeVietnamProRegular18"
              >
                Free Courses 🌟 Sale Ends Soon, Get It Now
              </Text>
              <Img className="h-6 w-6" src="images/img_icon.svg" alt="icon" />
            </div>
            <div className="border-b border-blue_gray-50 border-solid flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between pb-6 pt-5 md:px-10 sm:px-5 px-[132px] w-full">
              <div className="flex sm:flex-1 flex-row gap-[50px] items-center justify-start w-auto sm:w-full">
                <Button
                  className="flex h-[54px] items-center justify-center w-[54px]"
                  shape="round"
                  color="orange_A400"
                  size="xs"
                >
                  <Img
                    className="h-10"
                    src="images/img_user_white_a700.svg"
                    alt="user"
                  />
                </Button>
                <ul className="flex sm:flex-col flex-row gap-[26px] sm:hidden items-center justify-start w-auto common-row-list">
                  <li>
                    <a className="text-gray-900 text-lg">
                      <Text
                        className="common-pointer"
                        size="txtBeVietnamProRegular18Gray900"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Button
                        className="common-pointer cursor-pointer text-center text-lg"
                        onClick={() => navigate("/group9hciuidesigntwo")}
                        shape="round"
                        color="blue_gray_50"
                        size="lg"
                      >
                        Clases
                      </Button>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-gray-900 text-lg">
                      <Text size="txtBeVietnamProRegular18Gray900">
                        About Us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-gray-900 text-lg">
                      <Text size="txtBeVietnamProRegular18Gray900">
                        Pricing
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-gray-900 text-lg">
                      <Text size="txtBeVietnamProRegular18Gray900">
                        Contact
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start w-auto">
                <a href="javascript:" className="text-gray-900 text-lg w-auto">
                  <Text size="txtBeVietnamProRegular18Gray900">Sign Up</Text>
                </a>
                <Button
                  className="cursor-pointer min-w-[117px] text-center text-lg"
                  shape="round"
                  color="orange_A400"
                  size="lg"
                >
                  Login
                </Button>
              </div>
            </div>
          </header>
          <div className="border-b border-gray-300_01 border-solid flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start max-w-[1860px] mt-[109px] pb-[50px] md:px-10 sm:px-5 px-[132px] w-full">
            <Text
              className="flex-1 text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
              size="txtBeVietnamProSemiBold48"
            >
              UI/UX Design Course
            </Text>
            <Text
              className="flex-1 leading-[150.00%] max-w-[748px] md:max-w-full text-gray-700 text-lg"
              size="txtBeVietnamProRegular18Gray700"
            >
              Welcome to our UI/UX Design course! This comprehensive program
              will equip you with the knowledge and skills to create exceptional
              user interfaces (UI) and enhance user experiences (UX). Dive into
              the world of design thinking, wireframing, prototyping, and
              usability testing. Below is an overview of the curriculum
            </Text>
          </div>
          <Img
            className="h-[790px] sm:h-auto max-w-[1596px] mt-[100px] object-cover rounded-[12px] w-[1596px] md:w-full"
            src="images/img_container.png"
            alt="container"
          />
          <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1596px] mt-[100px] w-full">
            <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 flex flex-1 flex-col gap-[50px] items-end justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="md:text-5xl text-[80px] text-gray-900 text-right w-full"
                  size="txtBeVietnamProBold80"
                >
                  01
                </Text>
                <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.14px] w-full"
                    size="txtBeVietnamProSemiBold24"
                  >
                    Introduction to UI/UX Design
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Understanding UI/UX Design Principles
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700"
                        >
                          Lesson 01
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[153px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          45 Minutes
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white-A700 border border-orange-A100 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg shadow-bs1 w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Importance of User-Centered Design
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 02
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[109px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="yellow_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          1 Hour
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="leading-[150.00%] max-w-[464px] md:max-w-full text-blue_gray-900 text-xl"
                          size="txtBeVietnamProMedium20"
                        >
                          The Role of UI/UX Design in Product Development
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 03
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[153px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          45 Minutes
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[50px] h-full items-end justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="md:text-5xl text-[80px] text-gray-900 text-right w-full"
                  size="txtBeVietnamProBold80"
                >
                  02
                </Text>
                <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.14px] w-full"
                    size="txtBeVietnamProSemiBold24"
                  >
                    User Research and Analysis
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Conducting User Research and Interviews
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 01
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[109px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          1 Hour
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Analyzing User Needs and Behavior
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 02
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[109px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          1 Hour
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Creating User Personas and Scenarios
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 03
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[153px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          45 Minutes
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[50px] items-end justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="md:text-5xl text-[80px] text-gray-900 text-right w-full"
                  size="txtBeVietnamProBold80"
                >
                  03
                </Text>
                <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.14px] w-full"
                    size="txtBeVietnamProSemiBold24"
                  >
                    Wireframing and Prototyping
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Introduction to Wireframing Tools and Techniques
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 01
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[109px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          1 Hour
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Creating Low-Fidelity Wireframes
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 02
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[109px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          1 Hour
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Prototyping and Interactive Mockups
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 03
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[109px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          1 Hour
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[50px] items-end justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="md:text-5xl text-[80px] text-gray-900 text-right w-full"
                  size="txtBeVietnamProBold80"
                >
                  04
                </Text>
                <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.14px] w-full"
                    size="txtBeVietnamProSemiBold24"
                  >
                    Visual Design and Branding
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Color Theory and Typography in UI Design
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 01
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[109px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          1 Hour
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Visual Hierarchy and Layout Design
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 02
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[109px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          1 Hour
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-50 border-solid flex md:flex-col flex-row gap-1.5 items-center justify-start sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Creating a Strong Brand Identity
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 03
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[153px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          45 Minutes
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[813px] w-full">
              <div className="bg-white-A700 flex flex-col gap-[50px] items-end justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="md:text-5xl text-[80px] text-gray-900 text-right w-full"
                  size="txtBeVietnamProBold80"
                >
                  05
                </Text>
                <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.14px] w-full"
                    size="txtBeVietnamProSemiBold24"
                  >
                    Usability Testing and Iteration
                  </Text>
                  <List
                    className="flex flex-col gap-5 items-start w-full"
                    orientation="vertical"
                  >
                    <div className="border border-blue_gray-50 border-solid flex flex-1 md:flex-col flex-row gap-1.5 items-center justify-start my-0 sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Usability Testing Methods and Techniques
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 01
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[109px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          1 Hour
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-50 border-solid flex flex-1 md:flex-col flex-row gap-1.5 items-center justify-start my-0 sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-start justify-center w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Analyzing Usability Test Results
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 02
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[153px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          45 Minutes
                        </div>
                      </Button>
                    </div>
                    <div className="border border-blue_gray-50 border-solid flex flex-1 md:flex-col flex-row gap-1.5 items-center justify-start my-0 sm:px-5 px-[30px] py-6 rounded-lg w-full">
                      <div className="flex flex-1 flex-col gap-1.5 items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-full"
                          size="txtBeVietnamProMedium20"
                        >
                          Iterating and Improving UX Designs
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-full"
                          size="txtBeVietnamProRegular18Gray700_1"
                        >
                          Lesson 03
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[153px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-6 mt-px mr-1"
                            src="images/img_icon_gray_800.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_100"
                      >
                        <div className="leading-[normal] text-left text-lg">
                          45 Minutes
                        </div>
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white-A700 flex items-center justify-center pb-[30px] pt-[100px] md:px-5 px-[162px] w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-auto sm:w-full">
                <Button
                  className="flex h-[54px] items-center justify-center w-[54px]"
                  shape="round"
                  color="orange_A400"
                  size="xs"
                >
                  <Img
                    className="h-10"
                    src="images/img_user_white_a700.svg"
                    alt="user_One"
                  />
                </Button>
                <ul className="flex flex-col gap-5 items-start justify-start w-[392px] md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-1.5 items-center justify-start">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icon_gray_900.svg"
                          alt="icon_One"
                        />
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtBeVietnamProRegular18Gray900"
                        >
                          hello@skillbridge.com
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-1.5 items-center justify-start">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icon_gray_900_24x24.svg"
                          alt="icon_Two"
                        />
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtBeVietnamProRegular18Gray900"
                        >
                          +91 91813 23 2309
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-1.5 items-center justify-start">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icon_24x24.svg"
                          alt="icon_Three"
                        />
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtBeVietnamProRegular18Gray900"
                        >
                          Somewhere in the World
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-start justify-start max-w-[807px] w-full">
                <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtBeVietnamProSemiBold20"
                  >
                    Home
                  </Text>
                  <ul className="flex flex-col gap-2 items-start justify-start w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-700 text-lg">
                        <Text size="txtBeVietnamProRegular18Gray700_1">
                          Benefits
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-700 text-lg">
                        <Text size="txtBeVietnamProRegular18Gray700_1">
                          Our Courses
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-700 text-lg">
                        <Text size="txtBeVietnamProRegular18Gray700_1">
                          Our Testimonials
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-700 text-lg">
                        <Text size="txtBeVietnamProRegular18Gray700_1">
                          Our FAQ
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtBeVietnamProSemiBold20"
                  >
                    About Us
                  </Text>
                  <ul className="flex flex-col gap-2 items-start justify-start w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-700 text-lg">
                        <Text size="txtBeVietnamProRegular18Gray700_1">
                          Company
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-700 text-lg">
                        <Text size="txtBeVietnamProRegular18Gray700_1">
                          Achievements
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-700 text-lg">
                        <Text size="txtBeVietnamProRegular18Gray700_1">
                          Our Goals
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtBeVietnamProSemiBold20"
                  >
                    Social Profiles
                  </Text>
                  <Img
                    className="h-[52px] w-[184px]"
                    src="images/img_buttonscontainer.svg"
                    alt="buttonscontaine"
                  />
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray-50 h-px mt-[50px] w-full" />
            <Text
              className="mt-[52px] text-center text-gray-700_01 text-lg w-full"
              size="txtBeVietnamProRegular18Gray70001"
            >
              © 2023 Skillbridge. All rights reserved.
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CoursesOpenPageDesktopPage;
