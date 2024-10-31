import ProjectsPage from "@/components/Projects/AllProjects";
import { getCategories, getProjects } from "@/data";
import React from "react";

const page = async () => {
  const data = await getProjects();
  const allCategories = await getCategories();
  
  return (
    <>
      <ProjectsPage data={data} allCategories={allCategories} />
    </>
  );
};

export default page;
