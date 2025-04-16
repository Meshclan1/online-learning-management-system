import React from "react";

const CourseIdPage = async ({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) => {
  const { courseId } = await params;

  return (
    <div className="flex h-screen items-center justify-center bg-grey-100">
      <h1 className="text-3xl p-4 border-4 text-orange-400 bg-white">
        This is a COURSE ID Page for - {courseId}
      </h1>
    </div>
  );
};

export default CourseIdPage;
