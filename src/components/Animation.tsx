"use client";
import React from "react";
import styles from "./styles/Animation.module.css";
import Image from "next/image";
import { CSSProperties } from "react";
import { courses } from "@/constants";
import Link from "next/link";

// Extend CSSProperties interface to include custom properties
interface CustomCSSProperties extends CSSProperties {
  "--v"?: number;
}
const Animation: React.FC = () => {
  return (
    <div className='flex justify-center h-screen bg-black items-center'>
      <div
        className={`w-20 h-20 bg-blue-500 rounded-full ${styles["animated-bounce"]}`}
      ></div>
      <div className={`h-screen bg-slate-200 ${styles["box"]}`}>
        {courses.map((course) => (
          <div key={course.text} style={course.style as CustomCSSProperties}>
            <Link href={course.route} className={`${styles["link"]}`}>
              {" "}
              <Image fill src={course.img} alt={course.text} />
            </Link>
          </div>
        ))}
        <h1>welc0me to my ade training</h1>
      </div>

      <div className='h-52 w-52 bg-yellow-400'>
        <div className={`h-14 w-14 bg-red-400 ${styles["conrotate"]}`}></div>
      </div>
    </div>
  );
};

export default Animation;
