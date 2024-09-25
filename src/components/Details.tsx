'use client'
import React from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tilt_Neon } from "next/font/google"

export interface DetailsProps {
    title: String,
    company: String,
}

const Details: React.FunctionComponent<DetailsProps> = ({company,title}) => {

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                <Button
                    variant='link'
                    > 
                    {title}
                </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>{company}</DialogTitle>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default Details 