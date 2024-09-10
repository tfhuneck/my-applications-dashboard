'use client'

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
    const api = async () => {

        const res = await fetch('http://localhost:3000/entry', {
            method: 'GET', 
            // body: 'blank',
        }) 
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            console.log(data); // this will be a string
          });
    }

    return (
        <>
            <Button variant="outline" onClick={() => api()}>test api</Button>
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