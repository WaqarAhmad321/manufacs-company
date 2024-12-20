"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ProjectType } from "@/lib/types";
import { getSortByTransactionDate } from "@/lib/utils";
import ProjectsList from "@/components/Projects/ProjectsList";
import { MotionDiv } from "../motion-tags";

type CatType = {
  categorySlug: string;
  subCategories: string[];
  tittle: string;
};

type AllCategoriesType = {
  Done_By: string;
  Image_URL: string;
  Record_State: number;
  categorySlug: string;
  featured: boolean;
  id: string;
  subCategories: string[];
  tittle: string;
  transaction_date: string;
};

const ProjectsPage: React.FC<{
  data: ProjectType;
  allCategories: AllCategoriesType[];
}> = ({ data, allCategories }) => {
  const { categorySlug, subCatId } = useParams<{
    categorySlug: string;
    subCatId: string;
  }>();
  const pathname = usePathname();

  const [allCats, setAllCats] = useState<CatType[]>([]);

  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);

  const [filteredProjects, setFiltered] = useState<ProjectType[]>([]);

  useEffect(() => {
    const categoriesData: AllCategoriesType[] = Object.values(
      allCategories || {},
    );
    setAllCats(categoriesData);

    const projectsData: ProjectType[] = (
      Object.values(data || []) as ProjectType[] | []
    )?.filter((val) => val?.featured === true);
    setAllProjects(projectsData);
  }, [data, allCategories]);

  useEffect(() => {
    const finds: ProjectType[] =
      allProjects?.filter(
        (item: ProjectType) => item.category === categorySlug,
      ) || [];
    setFiltered(finds);
  }, [categorySlug, subCatId, allProjects]);

  const projects = filteredProjects
    ?.filter((item) => item?.subCategory === decodeURIComponent(subCatId))
    .sort(getSortByTransactionDate);

  const checkNested = (catPath: string) => {
    return pathname?.includes(catPath);
  };

  return (
    <section className="container my-36">
      <h2 className="section-heading pb-3 text-2xl">Explore our</h2>
      <h2 className="section-heading pb-5 text-6xl">Projects</h2>

      {/* <div className="w-full">
        <div className="tabs-buttons-wrapper">
          {allCats.map((v, key) => {
            return (
              <Link
                href={`/projects/${v?.categorySlug}/${v?.subCategories[0]}`}
                key={key}
                className={`tab-btn font-lexend ${
                  checkNested(v?.categorySlug) ? "active-tab-btn" : ""
                }`}
                prefetch={false}
              >
                {v.tittle}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-full text-center">
        <div className="sub-categories-btn-wrapper">
          {allCats
            ?.find((v) => v.categorySlug === categorySlug)
            ?.subCategories?.map((subName) => {
              return (
                <Link
                  href={`/projects/${categorySlug}/${subName}`}
                  key={subName}
                  className={`tab-btn font-lexend ${
                    checkNested(subName.replaceAll(" ", "%20"))
                      ? "active-tab-btn"
                      : ""
                  }`}
                  prefetch={false}
                >
                  {subName}
                </Link>
              );
            })}
        </div>
      </div> */}

      <MotionDiv
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <ProjectsList projects={projects} firstLine={true} />
      </MotionDiv>
    </section>
  );
};

export default ProjectsPage;
