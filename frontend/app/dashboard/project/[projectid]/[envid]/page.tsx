import PageWrapper from "@/app/dashboard/_components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

type Props = {
     params: Promise<{ envid: string }>
}

/*------------------------------------
Feature-
1. env file name, 
2. downalod and copy button
3. text area + div to show content of env file
4. a edit button to convert div to text area 
5. convert edit button to save button or a timeout of saving feature
6. delete env file button
7. rename env file

buttons -> download, copy, edit , envfileName edit , delete



--------------------------------------*/
export default async function page({ params }: Props) {
     const { envid } = await params;

     return (
          <PageWrapper >

               <header className=" flex-row flex justify-between">
                    <span className=" text-xl text-black/80 font-medium">Frontend Env</span>
                    <div className="  flex items-center gap-3">

                         {/* All button should be a client , seprate component */}
                         <Button variant={'outline'}>Download</Button>
                         <Button variant={'outline'}>Copy</Button>
                         <Separator orientation="vertical" />
                         <Button variant={'secondary'}>Edit</Button>
                         <Button variant={"destructive"}>Delete</Button>
                    </div>
               </header>
               <Textarea  value={"Some text"} />
               <div className=" border px-3 py-2 mt-8 font-dm_mono text-lg  border-black/40 pb-16  border-dashed ">
                
                         JWT_SECRET = "hjdklsdfkjl"
                         <br />
                         JWT_SECRET = "hjdklsdfkjl"
                         <br />
                         JWT_SECRET = "hjdklsdfkjl"
                    
               </div>

          </PageWrapper>
     )
}