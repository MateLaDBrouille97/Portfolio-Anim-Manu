"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
// import { usePortfolioContext } from "@/contexts/PortfolioContext";
import Image from "next/image";
import SlidingCards2 from "@/components/SlidingCards2";
import Link from "next/link";
import { projectImages } from "@/public/WorkData";

function WorkItem({work,portfolio2}) {
  const params = useParams();
  const router = useRouter();

  // const { data } = usePortfolioContext();

  // const [work, setWork] = useState();
  const [imageWork, setImageWork] = useState();
  const [imageWork2, setImageWork2] = useState();
  const [workNextWork, setNextWork] = useState();
  const [workPreviousIndex, setWorkPreviousIndex] = useState();

  useEffect(() => {
    if (!params.workId) {
      return;
    }

    // const fetchedWork = portfolio2?.filter((work) => {
    //   return work?.id === params.workId;
    // });
    // setWork(fetchedWork[0]);
    const image = getImageName(work?.title);
    setImageWork(image);

    const currentWorkIndex = portfolio2?.findIndex(
      (item) => item.id === params.workId
    );

    const previousWorkIndex = (currentWorkIndex + 1) % portfolio2?.length;
    const nextWorkIndex = (currentWorkIndex - 1) % portfolio2?.length;
    // setNextWork(portfolio2[nextWorkIndex]);
    // setWorkPreviousIndex(portfolio2[previousWorkIndex]);
    // const image2 = getImageName(workNextWork?.title);
    // setImageWork2(image2);

   
  }, [portfolio2, params.workId, work?.title]);



  const getImageName = (projectName) => {
    const project = projectImages.filter((p) => p.name === projectName);

    return project ? project?.[0]?.image : null;
  };

  return (
    <>
      <div className="container12">
        <div className="image__workItem-container">
          <div className="title-workItem">{work?.title}</div>
          <div className="credit-workItem">
            <dv className="">
              <div className="stripe12" />
              <div className="credit-workItem-creator">Manuel</div>
            </dv>
            <div className="">
              <div className="stripe12" />
              <div className="credit-workItem-year">{work?.year}</div>
            </div>
          </div>

          <div className="image-workItem">
            <Image src={imageWork} height={800} width={900} alt="" />
          </div>
          {work?.addressPost?<Link href={work?.addressPost} legacyBehavior >
            <div className="button-view-project">
              <div className="">Live Project</div>
            </div>
          </Link>: <div className="button-view-project2 opacity-55">
              <div className="">Live Project</div>
            </div>}

          <div className="stripe16" />
        </div>
        <div className="description__workItem-container">
          <div className="description-workItem">{work?.description}</div>
        </div>
        <div className="solution__workItem-container">
          <div className="solution-workItem">{work?.solution}</div>
        </div>
        <div className="stripe17" />

        <div className="technologies-container">
          <SlidingCards2 data={work?.technologies} title="Technologies" />
        </div>

        <div className="next-project">
          <div className="next-work-project">Next Case </div>
          <div className="stripe18" />
        </div>

        {workNextWork ? (
          <div className="next-work-container">
            <div className="next-work-container-group">
              <Link href={`/work/${workNextWork?.id}`}>
                <div className="next-work-image  overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80">
                  <Image src={imageWork2} height={800} width={800} alt="" />
                </div>
              </Link>
              <div className="next-work-container-group2 overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-70">
                <div className="next-work-container-title">
                  {workNextWork?.title}
                </div>
                <div className="next-work-container-year">
                  {workNextWork?.year}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="button-container ">
          <Link href="/works">
            <div className="button-BackToWork">
              <span>Back to All Works</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WorkItem;
