import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

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
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="backdrop-opacity-[0.5] bg-black-900_99 blur-[60.00px] h-[804px] ml-[76px] mr-[29px] mt-[49px] rounded-[24px] w-[48%]"></div>
        <Text
          className="common-pointer ml-[66px] mr-[86px] md:text-5xl text-[64px] text-white-A700"
          size="txtBalooBhaiRegular64"
          onClick={() => navigate("/")}
        >
          F.
        </Text>
        <Menu
          menuItemStyles={{
            button: {
              padding: "21px 21px 21px 39px",
              gap: "23px",
              color: "#e5e5e5",
              fontSize: "16px",
              fontFamily: "Baloo Bhai",
              [`&:hover, &.ps-active`]: {
                color: "#13a1da",
                fontWeight: "400 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[296px] mt-12 pr-[18px] w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
