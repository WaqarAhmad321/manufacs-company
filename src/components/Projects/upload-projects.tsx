"use client";

import React from "react";
import {
  ref as storageRef,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { child, ref, set } from "firebase/database";

const data = [
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/manufacs-company.appspot.com/o/projects%2Fimages%2FCambitas.png?alt=media&token=68ddd9cf-9520-4f0f-a8fb-701d51a005b1",
    category: "web-development",
    featured: true,
    projectDescription:
      "We developed the frontend for this project using Next.js. It’s a new trading platform on the Cardano blockchain, offering secure and transparent trading for options, forwards, and perpetual contracts.",
    title: "Cambitas",
    subCategory: "Frontend",
    link: "https://smashcode-cambitas.netlify.app",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/manufacs-company.appspot.com/o/projects%2Fimages%2FMarketgenius.png?alt=media&token=b533048b-0f8c-4117-8033-1e00ba78f410",
    category: "web-development",
    featured: true,
    projectDescription:
      "We developed the frontend for this project using Next.js. It’s a new trading platform on the Cardano blockchain, offering secure and transparent trading for options, forwards, and perpetual contracts.",
    title: "Market Genius",
    subCategory: "Frontend",
    link: "https://www.market-genius.ai",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/manufacs-company.appspot.com/o/projects%2Fimages%2FHoneycomb.png?alt=media&token=90f4613d-f98d-4dd6-abad-a14ebfb51e5f",
    category: "web-development",
    featured: true,
    projectDescription:
      "We developed the frontend for this project using Next.js. It’s a new trading platform on the Cardano blockchain, offering secure and transparent trading for options, forwards, and perpetual contracts.",
    title: "Honeycomb",
    subCategory: "Frontend",
    link: "https://smashcode-honey-comb.vercel.app",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/manufacs-company.appspot.com/o/projects%2Fimages%2FEdenLife.png?alt=media&token=ad34cea1-adaa-4ba1-835c-e5f8f279a518",
    category: "web-development",
    featured: true,
    projectDescription:
      "We developed the frontend for this project using Next.js. It’s a new trading platform on the Cardano blockchain, offering secure and transparent trading for options, forwards, and perpetual contracts.",
    title: "Eden Life",
    subCategory: "Frontend",
    link: "http://edenlife.ai",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fimages%2Fstrike%20finance.png?alt=media&token=2395a0d6-ab76-4489-96fe-b0948b6f0117",
    category: "web-development",
    featured: true,
    id: "-O8rm7H-3aQzOEFT8JuC",
    projectDescription:
      "We developed the frontend for this project using Next.js. It’s a new trading platform on the Cardano blockchain, offering secure and transparent trading for options, forwards, and perpetual contracts.",
    title: "Strike Finance",
    subCategory: "Frontend",
    link: "https://smashcode-strike-finance.vercel.app/",
  },
];

const UploadProjects = () => {
  const onUpload = async () => {
    const projectsRef = ref(db, "projects");
    data.forEach(async (item) => {
      await set(child(projectsRef, item.title), item);
    })
  };
  return <div>UploadProjects</div>;
};

export default UploadProjects;
