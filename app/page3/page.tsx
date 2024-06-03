"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

function page2({}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40px", "end end"],
  });

  const left = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6666%"]);
  const right = useTransform(scrollYProgress, [0, 1], ["0%", "66.6666%"]);

  return (
    <>
      <div className="bg-green-300 z-50 relative">
        <span>announcement</span>
      </div>
      <div className="h-10 bg-red-400 sticky top-0 z-20">
        {" "}
        <p>Header</p>
      </div>
      <div className="h-[calc(300vh-120px)] relative" ref={ref}>
        <div className="w-full sticky top-10 h-[calc(100vh-40px)] ">
          <div className="relative inset-0">
            <div className="bg-gray-500 h-[calc(300vh-120px)] left-0 w-[50%] top-0 relative">
              <motion.div
                // style={{ y: left }}
                style={{ y: left }}
                className="absolute inset-0 bg-green-700"
              >
                <div className="flex flex-col h-full">
                  <div className="bg-yellow-100 grow">
                    <h1>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Facere officia in similique iusto ipsam earum inventore
                      possimus ex, officiis laudantium sapiente, fuga sed
                      deleniti, nesciunt nam tempora impedit sit at. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Possimus nam
                      animi asperiores enim dicta recusandae, quaerat
                      aspernatur, impedit aperiam sunt iusto. Consequatur
                      deserunt perspiciatis veritatis natus rem sed ipsa est!
                    </h1>
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
            <div className="bg-cyan-500 h-[calc(300vh-120px)] left-[50%] top-0 right-0 absolute ">
              <motion.div
                style={{
                  y: right,
                }}
                className="absolute left-0 right-0 bottom-[calc((300vh-120px)/3*2)] -top-[calc((300vh-120px)/3*2)]  bg-green-400"
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
      <div className="h-10 bg-red-400 sticky top-0 z-20">Footer</div>
    </>
  );
}

export default page2;
