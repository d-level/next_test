import {Satisfy} from "next/font/google";
import localFont from "next/font/local";

export const louisGeorgeCafe = localFont({
  src: [
    {
      path: "../public/fonts/Louis George Cafe Light.ttf",
      style: "normal",
      weight: "200",
    },
    {
      path: "../public/fonts/Louis George Cafe.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/Louis George Cafe Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../public/fonts/Louis George Cafe Light Italic.ttf",
      style: "italic",
      weight: "200",
    },
    {
      path: "../public/fonts/Louis George Cafe Italic.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "../public/fonts/Louis George Cafe Bold Italic.ttf",
      style: "italic",
      weight: "700",
    },
  ],
});

export const satisfy = Satisfy({
  weight: "400",
});