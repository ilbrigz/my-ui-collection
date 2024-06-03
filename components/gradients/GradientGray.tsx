"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

type Props = {};

declare global {
  interface Window {
    clipboardData: any;
  }
}

function gradientGary({}: Props) {
  const GradientCode = "bg-[linear-gradient(60deg,_#29323c_0%,_#485563_100%)]";
  return (
    <div className={clsx(GradientCode, "size-40")}>
      <span
        onClick={() => {
          navigator.clipboard.writeText(GradientCode);
        }}
        className="cursor-pointer "
      >
        Copy tw class
      </span>
    </div>
  );
}

export default gradientGary;
