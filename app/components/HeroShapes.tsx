"use client";
import React, { useEffect, useRef, useState } from "react";

function getMatrix1(t: number) {
  // Yellow shape: gentle roll
  const angle = Math.sin(t / 2000) * 0.2;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  // base matrix: [0.9846, -0.1746, 0.1746, 0.9846, -441.3, 467.14]
  return `matrix(${0.9846 * cos},${-0.1746 * cos},${0.1746 * sin},${
    0.9846 * sin
  },-441.3,467.14)`;
}

function getMatrix2(t: number) {
  // Green shape: more pronounced roll
  const angle = Math.cos(t / 1800) * 0.3;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  // base matrix: [0.2617,0.9652,-0.9652,0.2617,3003.28,-147.50]
  return `matrix(${0.2617 * cos},${0.9652 * cos},${-0.9652 * sin},${
    0.2617 * sin
  },3003.28,-147.50)`;
}

function getMatrix3(t: number) {
  // Orange shape: slow, subtle roll
  const angle = Math.sin(t / 2500) * 0.15;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  // base matrix: [0.8886,0.4586,-0.4586,0.8886,381.87,-1364.99]
  return `matrix(${0.8886 * cos},${0.4586 * cos},${-0.4586 * sin},${
    0.8886 * sin
  },381.87,-1364.99)`;
}

const HeroShapes = () => {
  const [time, setTime] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    let start: number | null = null;
    const animate = (ts: number) => {
      if (start === null) start = ts;
      setTime(ts - start);
      frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2560 491"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <clipPath id="__lottie_element_151">
            <rect width="2560" height="491" x="0" y="0"></rect>
          </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_151)">
          <g
            transform={getMatrix1(time)}
            opacity="1"
            style={{ display: "block" }}
          >
            <path
              fill="rgb(255,228,0)"
              fillOpacity="1"
              d=" M869.0399780273438,102.87999725341797 C869.0399780273438,102.87999725341797 869.0399780273438,766.1599731445312 869.0399780273438,766.1599731445312 C869.0399780273438,822.9400024414062 822.9400024414062,869.0399780273438 766.1599731445312,869.0399780273438 C766.1599731445312,869.0399780273438 102.87999725341797,869.0399780273438 102.87999725341797,869.0399780273438 C46.099998474121094,869.0399780273438 0,822.9400024414062 0,766.1599731445312 C0,766.1599731445312 0,102.87999725341797 0,102.87999725341797 C0,46.099998474121094 46.099998474121094,0 102.87999725341797,0 C102.87999725341797,0 766.1599731445312,0 766.1599731445312,0 C822.9400024414062,0 869.0399780273438,46.099998474121094 869.0399780273438,102.87999725341797z"
            ></path>
          </g>
          <g
            transform={getMatrix2(time)}
            opacity="1"
            style={{ display: "block" }}
          >
            <path
              fill="rgb(4,217,140)"
              fillOpacity="1"
              d=" M745.75,123.16999816894531 C777.3499755859375,68.43000030517578 856.3599853515625,68.43000030517578 887.9600219726562,123.16999816894531 C887.9600219726562,123.16999816894531 1453.1600341796875,1102.1199951171875 1453.1600341796875,1102.1199951171875 C1484.77001953125,1156.8599853515625 1445.260009765625,1225.280029296875 1382.050048828125,1225.280029296875 C1382.050048828125,1225.280029296875 251.66000366210938,1225.280029296875 251.66000366210938,1225.280029296875 C188.4499969482422,1225.280029296875 148.9499969482422,1156.8599853515625 180.5500030517578,1102.1199951171875 C180.5500030517578,1102.1199951171875 745.75,123.16999816894531 745.75,123.16999816894531 C745.75,123.16999816894531 745.75,123.16999816894531 745.75,123.16999816894531z"
            ></path>
          </g>
          <g
            transform={getMatrix3(time)}
            opacity="1"
            style={{ display: "block" }}
          >
            <path
              fill="rgb(254,121,26)"
              fillOpacity="1"
              d=" M617.8300170898438,1234 C959.0499877929688,1234 1235.6700439453125,957.760009765625 1235.6700439453125,617 C1235.6700439453125,276.239990234375 959.0499877929688,0 617.8300170898438,0 C276.6099853515625,0 0,276.239990234375 0,617 C0,957.760009765625 276.6099853515625,1234 617.8300170898438,1234 C617.8300170898438,1234 617.8300170898438,1234 617.8300170898438,1234z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default HeroShapes;
