"use client"
import { Button } from "@/components/ui/button"
import {
     Dialog,
     DialogClose,
     DialogContent,
     DialogDescription,
     DialogFooter,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
} from "@/components/ui/dialog"
type Props = {
     envid: string
}

export default function DeleteHandler({ }: Props) {

     async function onDeleteHandler() {
          // other work
     }
     
     return (
          <> 
               <Dialog>
                    <form>
                         <DialogTrigger asChild>
                              <Button variant={"destructive"}>Delete</Button>
                         </DialogTrigger>
                         <DialogContent className="sm:max-w-106.25">
                              <DialogHeader>
                                   <DialogTitle>Are you absolutely sure?</DialogTitle>
                                   <DialogDescription>
                                        This action cannot be undone.
                                   </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4">
                              </div>
                              <DialogFooter>
                                   <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                   </DialogClose>
                                   <Button onClick={onDeleteHandler}  variant={"destructive"}>Confirm</Button>
                              </DialogFooter>
                         </DialogContent>
                    </form>
               </Dialog>


          </>
     )
}