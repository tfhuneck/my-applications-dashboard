'use client'

import axios from 'axios'
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
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

// define form schema 
const applicationSchema = z.object({
    company: z.string().min(1, { message: 'Must enter a company name'}),
    position: z.string().min(1, { message: 'Must enter name of the position'}),
    url: z.string().url({ message: "Invalid url" }),
    // applied: z.boolean(),
    // reply: z.boolean(),
    // replyType: z.enum(["none", "interview", "decline"]),
    // interviewType: z.enum(["none", "inperson", "phone", "vidoecall"]),
})

const ApplicationEntry = () => {
  
    const form = useForm<z.infer<typeof applicationSchema>>({
        resolver: zodResolver(applicationSchema)
    }) // TypeScript-first schema validation with static type inference
    
    const onSubmit: SubmitHandler<Object> = async (data) => {
        axios.post('api/entry',{
            data
        }, {
            headers: {}
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='company'
                        render={({field, fieldState, formState}) => (
                            <FormItem className="mb-2">
                                <FormLabel>
                                    Company Name
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="company" {...field}></Input>
                                </FormControl>
                                
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='position'
                        render={({field, fieldState, formState}) => (
                            <FormItem className="mb-2">
                                <FormLabel>
                                    Position
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="position" {...field}></Input>
                                </FormControl>
                                
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='url'
                        render={({field, fieldState, formState}) => (
                            <FormItem className="mb-2">
                                <FormLabel>
                                    Job Posting Link 
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="position url" {...field}></Input>
                                </FormControl>
                                
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="place-content-center flex mx-auto w-28">
                        Submit
                    </Button>
                </form>
            </Form>
        </>
    )
}

export default ApplicationEntry;