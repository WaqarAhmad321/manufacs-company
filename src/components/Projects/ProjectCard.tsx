import Image from "next/image";
import logoImg from "../../../public/logo/nav-logo.svg";
import Link from "next/link";
import { ProjectType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps extends ProjectType {
  bgColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  bgColor,
  proj_title: title,
  proj_desc: description,
  Image_URL: imageUrl,
  url: projectUrl,
  video_url: videoUrl,
}) => {
  return (
    <div
      className={cn(
        `box-item project-box-item fade-in-bottom flex-col rounded-3xl shadow-2xl bg-[${bgColor}]`,
      )}
    >
      <div className="group flex w-full flex-col pb-8 text-white">
        <div className="mb-auto">
          <h3 className="mb-2 font-lexend text-3xl font-bold">
            {title}
          </h3>
          <p className="mb-4 font-manrope text-xl">
            {description}
          </p>
        </div>
        {videoUrl ? (
          <video
            poster={
              typeof imageUrl === "string"
                ? imageUrl
                : typeof logoImg === "string"
                  ? logoImg
                  : undefined
            }
            muted
            playsInline
            controls
            src={videoUrl}
            className="w-full rounded-md object-contain"
          ></video>
        ) : (
          imageUrl && (
            <Image
              alt={`${title} project image`}
              src={
                imageUrl ||
                "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/others%2Fexpedo2.png?alt=media&token=847d3c3b-0376-4486-88f7-f40a6615cf60"
              }
              width={1280}
              height={800}
              className="rounded-full transition-transform duration-200 group-hover:scale-105 lg:pt-0"
            />
          )
        )}
      </div>
      <div className="mx-auto my-1">
        {projectUrl || videoUrl ? (
          <Link
            className="text-brand-dark font-lexend mx-auto flex items-center justify-center rounded-full px-4 py-1.5 text-center text-2xl font-semibold"
            href={projectUrl || videoUrl || "#"}
            target="_blank"
          >
            View Project
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
