import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LandingPagePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-opensans h-[982px] mx-auto py-[19px] relative w-full">
        <div className="absolute bg-gray-50 flex flex-col h-max inset-[0] items-end justify-center m-auto p-1 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-start justify-end mb-3.5 mt-[97px] md:px-5 w-[95%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5 w-[38%] md:w-full">
              <div className="font-outfit h-[231px] relative w-[94%] sm:w-full">
                <Text
                  className="leading-[140.00%] m-auto sm:text-[41px] md:text-[47px] text-[55px] text-black-900"
                  size="txtOutfitBold55"
                >
                  <>
                    Learn a New Skill
                    <br />
                    Everyday, Anytime, and Anywhere.
                  </>
                </Text>
                <Img
                  className="absolute h-4 right-[16%] top-[29%]"
                  src="images/img_vector6.svg"
                  alt="vectorSix"
                />
              </div>
              <Text
                className="leading-[130.00%] mt-3.5 text-black-900_90 text-xl w-[94%] sm:w-full"
                size="txtOpenSansRomanRegular20"
              >
                <span className="text-black-900 font-opensans text-left font-bold">
                  1000+
                </span>
                <span className="text-black-900 font-opensans text-left font-normal">
                  {" "}
                  Courses covering all tech domains for you to learn and explore
                  new oppurtunities. Learn from Industry Experts and land your
                  Dream Job.
                </span>
              </Text>
              <div className="flex sm:flex-col flex-row font-opensans gap-[30px] items-center justify-start mt-10 w-4/5 md:w-full">
                <Button
                  className="cursor-pointer font-bold min-w-[200px] rounded-[30px] text-center text-xl"
                  color="blue_600"
                  size="lg"
                >
                  Start Trial
                </Button>
                <div className="h-[60px] relative w-[47%] sm:w-full">
                  <Text
                    className="m-auto text-blue-600 text-xl"
                    size="txtOpenSansRomanBold20"
                  >
                    How it Works
                  </Text>
                  <div className="absolute border-2 border-blue-600 border-solid h-[60px] inset-[0] justify-center m-auto rounded-[30px] w-full"></div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-outfit sm:gap-5 items-center justify-start mt-20 w-[96%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-yellow-700"
                  size="txtOutfitBold40"
                >
                  1000+
                </Text>
                <Text
                  className="sm:ml-[0] ml-[91px] sm:text-4xl md:text-[38px] text-[40px] text-blue-600"
                  size="txtOutfitBold40Blue600"
                >
                  5000+
                </Text>
                <Text
                  className="ml-20 sm:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-deep_orange-400"
                  size="txtOutfitBold40Deeporange400"
                >
                  200+
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-opensans sm:gap-5 items-center justify-start mt-[3px] w-full">
                <Text
                  className="leading-[140.00%] text-black-900 text-xl"
                  size="txtOpenSansRomanBold20Black900"
                >
                  <>
                    Courses to <br />
                    choose from
                  </>
                </Text>
                <Text
                  className="leading-[140.00%] sm:ml-[0] ml-[85px] text-black-900 text-xl"
                  size="txtOpenSansRomanBold20Black900"
                >
                  <>
                    Students <br />
                    Trained
                  </>
                </Text>
                <Text
                  className="leading-[140.00%] sm:ml-[0] ml-[109px] text-black-900 text-xl"
                  size="txtOpenSansRomanBold20Black900"
                >
                  <>
                    Professional
                    <br />
                    Trainers
                  </>
                </Text>
              </div>
            </div>
            <div className="md:h-[480px] h-[721px] relative w-[52%] md:w-full">
              <div className="absolute md:h-[480px] h-[718px] inset-[0] justify-center m-auto w-full">
                <div className="md:h-[480px] h-[718px] m-auto w-full">
                  <div className="md:h-[480px] h-[718px] m-auto w-full">
                    <div className="absolute md:h-[480px] h-[543px] inset-x-[0] mx-auto top-[4%] w-[76%] sm:w-full">
                      <div className="absolute bottom-[0] h-[480px] left-[0] w-[480px] sm:w-full">
                        <div className="absolute border border-black-900_b2 border-solid h-[480px] inset-[0] justify-center m-auto rounded-[50%] w-[480px]"></div>
                        <div className="absolute bg-deep_orange-400 flex flex-col sm:h-auto h-max inset-[0] items-center justify-center m-auto pl-[15px] rounded-[50%] w-[470px]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[470px] md:h-auto object-cover rounded-bl-[235px] rounded-br-[235px] w-full"
                              src="images/img_happyyoungwom.png"
                              alt="happyyoungwom"
                            />
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[436px] inset-x-[0] mx-auto object-cover top-[0] w-[98%]"
                        src="images/img_happyyoungwom_436x539.png"
                        alt="happyyoungwom_One"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[332px] object-cover right-[0] w-[332px]"
                      src="images/img_5143494removebgpreview.png"
                      alt="5143494removebg"
                    />
                    <Img
                      className="absolute h-[146px] right-[16%] top-[0]"
                      src="images/img_ellipse4.svg"
                      alt="ellipseFour"
                    />
                    <Img
                      className="absolute bottom-[6%] h-[170px] left-[0] w-[169px]"
                      src="images/img_ellipse8.svg"
                      alt="ellipseEight"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[27%] h-[83px] left-[2%] w-[82px]"
                    src="images/img_ellipse10.svg"
                    alt="ellipseTen"
                  />
                </div>
                <Img
                  className="absolute h-[83px] right-[7%] top-[16%] w-[82px]"
                  src="images/img_play.svg"
                  alt="play"
                />
              </div>
              <Img
                className="absolute h-[146px] right-[14%] top-[0]"
                src="images/img_ellipse7.svg"
                alt="ellipseSeven"
              />
              <Img
                className="absolute bottom-[7%] h-[157px] left-[2%]"
                src="images/img_ellipse9.svg"
                alt="ellipseNine_One"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-row gap-3.5 items-center justify-center left-[5%] md:px-5 top-[2%] w-[10%]">
          <Text
            className="bg-blue-600 flex h-10 items-center justify-center rounded-[50%] text-center text-white-A700 text-xl w-10"
            size="txtOpenSansRomanBold20WhiteA700"
          >
            Pr
          </Text>
          <Text
            className="text-blue-600_ab text-xl"
            size="txtOpenSansRomanBold20Blue600ab"
          >
            Pro-Skills
          </Text>
        </div>
        <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-center mx-auto md:px-5 top-[2%] w-[29%]">
          <Text className="text-blue-600 text-lg" size="txtOpenSansRomanBold18">
            Home
          </Text>
          <Text
            className="common-pointer sm:ml-[0] ml-[61px] text-black-900_90 text-lg"
            size="txtOpenSansRomanBold18Black90090"
            onClick={() => navigate("/group9hciuidesigntwo")}
          >
            Classes
          </Text>
          <Text
            className="common-pointer sm:ml-[0] ml-[49px] text-black-900_90 text-lg"
            size="txtOpenSansRomanBold18Black90090"
            onClick={() => navigate("/coursesopenpagedesktop")}
          >
            Courses
          </Text>
          <Text
            className="sm:ml-[0] ml-[43px] text-black-900_90 text-lg"
            size="txtOpenSansRomanBold18Black90090"
          >
            About Us
          </Text>
        </div>
        <div className="absolute flex flex-row gap-5 items-center justify-center md:px-5 right-[9%] top-[2%] w-[17%]">
          <Button
            className="cursor-pointer font-bold min-w-[115px] rounded-[19px] text-base text-center"
            color="blue_600"
            size="xs"
            variant="outline"
          >
            Login
          </Button>
          <Button
            className="cursor-pointer font-bold min-w-[115px] rounded-[19px] text-base text-center"
            color="blue_600"
            size="xs"
          >
            Sign In
          </Button>
        </div>
        <Img
          className="absolute h-[499px] object-cover right-[29%] top-[5%] w-[499px]"
          src="images/img_5143537removebgpreview.png"
          alt="5143537removebg"
        />
      </div>
    </>
  );
};

export default LandingPagePage;
