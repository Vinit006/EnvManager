import PageWrapper from "../../_components/PageWrapper";
import EnvCard from "./_component/EnvCard";
import { EnvFileType } from "@/lib/types/types";

type Props = {
     params: Promise<{ projectid: string }>
}

export default async function page({ params }: Props) {
     const { projectid } = await params;
     
     return (
          <PageWrapper heading={"Project - " + projectid} >
               <div className="  font-medium top-2 right-5 text-sm">
                    3  <span className=" opacity-40  font-normal">Env Files</span>
               </div>
               <div className=" mt-5 grid grid-cols-2 gap-5">
                    {
                         envData.map((item: EnvFileType, index) => (
                              <EnvCard key={index} data={item} projectid={projectid} />
                         ))
                    }
               </div>
          </PageWrapper>
     )
}

const envData: EnvFileType[] = [
     {
          _id: "abc87565",
          name: "Frontend Env",
          content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dicta incidunt tempore doloribus voluptatem fugiat dolore quisquam molestias officia beatae!"
     },
     {
          _id: "abc85215",
          name: "Backend Env",
          content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dicta incidunt tempore doloribus voluptatem fugiat dolore quisquam molestias officia beatae!"
     },
     {
          _id: "abc235325",
          name: "Example Env",
          content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dicta incidunt tempore doloribus voluptatem fugiat dolore quisquam molestias officia beatae!"
     },
]