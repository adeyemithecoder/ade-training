import React from "react";
interface paramsProps {
  params: { courseId: string };
}
const EachCourses = ({ params: { courseId } }: paramsProps) => {
  return (
    <div>
      EachCourses
      <h1>{courseId} </h1>
    </div>
  );
};

export default EachCourses;
