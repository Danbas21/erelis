import React from "react";

const sizeClasses = {
  txtBeVietnamProRegular18Gray700: "font-bevietnampro font-normal",
  txtOpenSansRomanBold18Black90090: "font-bold font-opensans",
  txtBalooBhaiRegular36: "font-baloobhai font-normal",
  txtBeVietnamProRegular18Gray900: "font-bevietnampro font-normal",
  txtBalooBhaiRegular16: "font-baloobhai font-normal",
  txtBalooBhaiRegular16Black900: "font-baloobhai font-normal",
  txtBeVietnamProSemiBold24: "font-bevietnampro font-semibold",
  txtBeVietnamProSemiBold48: "font-bevietnampro font-semibold",
  txtBeVietnamProRegular18Gray70001: "font-bevietnampro font-normal",
  txtBeVietnamProSemiBold20: "font-bevietnampro font-semibold",
  txtRobotoRegular13Black900: "font-normal font-roboto",
  txtBalooBhaiRegular16WhiteA700: "font-baloobhai font-normal",
  txtOpenSansRomanRegular20: "font-normal font-opensans",
  txtOpenSansRomanBold18: "font-bold font-opensans",
  txtBalooBhaiRegular64Black900: "font-baloobhai font-normal",
  txtOutfitBold55: "font-bold font-outfit",
  txtOutfitBold40Deeporange400: "font-bold font-outfit",
  txtOutfitBold40Blue600: "font-bold font-outfit",
  txtBeVietnamProRegular18Gray700_1: "font-bevietnampro font-normal",
  txtOpenSansRomanBold20Blue600ab: "font-bold font-opensans",
  txtBalooBhaiRegular16Gray300: "font-baloobhai font-normal",
  txtOpenSansRomanBold20WhiteA700: "font-bold font-opensans",
  txtBeVietnamProRegular18: "font-bevietnampro font-normal",
  txtBalooBhaiRegular24: "font-baloobhai font-normal",
  txtBalooBhaiRegular16Black90075: "font-baloobhai font-normal",
  txtBeVietnamProBold80: "font-bevietnampro font-bold",
  txtOpenSansRomanBold20Black900: "font-bold font-opensans",
  txtBeVietnamProMedium20: "font-bevietnampro font-medium",
  txtRobotoRegular10WhiteA700: "font-normal font-roboto",
  txtRobotoRegular13: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtOutfitBold40: "font-bold font-outfit",
  txtOpenSansRomanBold20: "font-bold font-opensans",
  txtBalooBhaiRegular64: "font-baloobhai font-normal",
  txtBalooBhaiRegular24WhiteA700: "font-baloobhai font-normal",
  txtRobotoRegular10: "font-normal font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
