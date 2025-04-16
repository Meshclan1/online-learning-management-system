import React from "react";

const LessonIdPage = async ({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) => {
  const { lessonId } = await params;

  return (
    <div className="flex h-screen items-center justify-center bg-grey-100">
      <h1 className="text-3xl p-4 border-4 text-orange-400 bg-white">
        This is a LessonID Page for {lessonId}
      </h1>
    </div>
  );
};

export default LessonIdPage;
