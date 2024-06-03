"use client";
import { useElementSize, useWindowScroll } from "@mantine/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

type Props = {};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function page2({}: Props) {
  const { ref, width, height } = useElementSize();
  const [scroll, scrollTo] = useWindowScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40px", "end end"],
  });
  const containerHeight = height / 3;
  const left = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(containerHeight * 2)]
  );
  const right = useTransform(
    scrollYProgress,
    [0, 1],
    [-(containerHeight * 2), 0]
  );

  return (
    <>
      <div className="bg-green-300">
        <span>announcement</span>
      </div>
      <div className="h-10 bg-red-400 sticky top-0 z-20">
        {" "}
        <span onClick={() => scrollTo({ y: containerHeight * 2 + 24 })}>
          scroll{" "}
        </span>
      </div>
      <div className="h-[calc(300vh-120px)] relative" ref={ref}>
        <div className="w-full sticky top-10 h-[calc(100vh-40px)] overflow-clip">
          <div className="absolute inset-0">
            <div className="flex">
              <div className="bg-blue-500 h-[calc(300vh-120px)] grow relative">
                <motion.div
                  style={{ y: left }}
                  className="absolute inset-0  bg-green-700"
                >
                  <div className="flex flex-col h-full">
                    <div className="bg-yellow-100 grow">
                      <h1>1</h1>
                    </div>
                    <div className="grow">
                      <h1>2</h1>
                    </div>
                    <div className="grow bg-gray-200">
                      <h1>3</h1>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="bg-blue-500 h-[calc(300vh-120px)] grow relative">
                <motion.div
                  // style={{
                  //   y: right,
                  // }}

                  className="absolute bottom-0 top-0 left-0 right-0 bg-green-400"
                >
                  <div className="flex flex-col h-full">
                    <div className="bg-slate-400-100 grow">
                      <h1>1</h1>
                    </div>
                    <div className="bg-lime-600 grow">
                      <h1>2</h1>
                    </div>
                    <div className="bg-orange-200 grow">
                      <h1>3</h1>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 bg-red-400 sticky top-0 z-20">Footer</div>
    </>
  );
}

export default page2;
