"use client"
 
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
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
export function ContactBlock() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
        },
      })
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-[#282C4B] rounded-xl p-6 py-10 grid grid-cols-2 place-items-center my-10">
        <div className="">
           <h1 className="text-white text-3xl font-semibold mb-2">Restons en contact</h1>
           <h2 className="text-gray-300 text-xl font-semibold">dnivdsvisd</h2>
        </div>
        <FormField 
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
                <div className="flex gap-3">
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <Button variant={"outline"} type="submit">Submit</Button>
              </div>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}


function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
