"use client";

import { StickyScroll } from "@/Components/UI/Sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
];
const StickyScrollProduct = ({ image_path }: any) => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 p-4 lg:p-11 gap-5">
      <img
        loading="lazy"
        className="w-full h-[30rem] rounded-md object-cover"
        src={`${image_path}`}
        alt=""
      />
      <StickyScroll content={content} />
    </div>
  );
};
export default StickyScrollProduct;
