'use client'

import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const applicationSchema = z.object({
    
    company: z.string().min(1, { message: 'Must enter a company name'}),
    position: z.string().min(1, { message: 'Must enter name of the position'}),
    url: z.string().url({ message: "Invalid url" }),
    applied: z.boolean(),
    reply: z.boolean(),
    replyType: z.enum(["none", "interview", "decline"]),
    interviewType: z.enum(["none", "inperson", "phone", "vidoecall"]),

})

const ApplicationEntry = () => {
    const form = useForm<z.infer<typeof applicationSchema>>({})
    const handleSubmit: Object = () => {
    }

    return (
        <>
            <Form {...form}>
                <form >
                    <FormField
                        control={form.control}
                        name='company'
                        render={({field, fieldState, formState}) => (
                            <FormItem>
                                <FormLabel>
                                    Company Name
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="company" {...field}></Input>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}

export default ApplicationEntry;