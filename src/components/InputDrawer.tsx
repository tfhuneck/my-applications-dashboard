import { Button } from "./ui/button"
import ApplicationEntry from "./Entry"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

  
const InputDrawer = () => {

    return (
        <>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline">New Job</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="container mx-auto max-w-md my-10">
                        <DrawerHeader>
                            <DrawerTitle>Job Application Input</DrawerTitle>
                            <DrawerDescription>Enter New Job Posting</DrawerDescription>
                        </DrawerHeader>
                            <ApplicationEntry />
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default InputDrawer;