import React from 'react'
import ProjectButton from './_sidebar/ProjectButton';

type Props = {}

export default function Sidebar({ }: Props) {
  return (
    <div className=' bg-gray-50 px-3 pt-5  flex flex-col space-y-1 border-r  h-full w-54'>
      <p className=' text-[12px] font-medium tracking-wide mb-3 text-black/50'>PROJECTS</p>
      <ProjectButton name={"View All"} href={"/dashboard"}  clx=''/>

      <p className=' text-[12px] font-medium tracking-wide mb-3 mt-6 text-black/50'>RECENTS</p>
      {
        tempData?.map((item, index) => (
          <ProjectButton key={index} name={item.name} href={item.href} />
        ))
      }
    </div>
  )
}


const tempData: {
  name: string;
  href: string;
}[] = [

    {
      name: "Projects",
      href: "/dashboard/project/abc951125",
    },
    {
      name: "Environments",
      href: "/dashboard/project/abc12885",
    },
    {
      name: "Settings",
      href: "/dashboard/project/abc17854225",
    },
  ];