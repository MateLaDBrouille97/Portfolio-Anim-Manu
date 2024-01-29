"use client";

import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Computer, ScreenShare, Share, Smile } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import Rounded from "@/common/RoundedButton";

const FormSchema = z.object({
  first_name: z.string(),
  // last_name: z.string(),
  email: z.string().email(),
  // job_title: z.string(),
  company_name: z.string(),
  // help: z.enum([
  //   "Evaluate Lloyd for my company",
  //   "Learn More",
  //   "Get a Quote",
  //   "How to use Lloyd",
  //   "Other",
  // ]),
  //   company_size: z.enum([
  //     "1-10",
  //     "11-50",
  //     "51-200",
  //     "201-500",
  //     "501-1000",
  //     "1000+",
  //   ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  // last_name: string;
  email: string;
  // job_title: string;
  company_name: string;
  // help:
  //   | "Evaluate Lloyd for my company"
  //   | "Learn More"
  //   | "Get a Quote"
  //   | "How to use Lloyd"
  //   | "Other";
  //   company_size: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+";
  info: string;
  // terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const [user, setUser] = useState<any>();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/author");
        const author = await response.json();
        setUser(author);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      // last_name: "",
      email: "",
      // job_title: "",
      company_name: "",
      // help: "Learn More",
      //   company_size: "1-10",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className="md:pb-6 flex flex-col justify-center h-full mb-30 "
    >
      <div className="md:text-[80px] text-[35px] pt-16 md:pt-6 leading-tight text-[#000000] mt-20 text-position text-center">
        Let&apos;s start a{" "}
        <span className="text-[#fa4a2f]">project together</span>
      </div>
      <div>
        <div className="md:flex flex-row justify-center items-start w-full mt-[60px]">
          {!submitted ? (
            <div className="md:w-1/3 flex flex-col justify-center m-[20px] text-[#000000] socials-contact  ">
              <span>
                <div className="imageContainer2">
                  {user && (
                    <Image fill={true} alt={"image"} src={user?.image} />
                  )}
                </div>
               
              </span>
              <h4 className="font-extrabold text-[#fa4a2f] details__titles">
                CONTACT DETAILS
              </h4>
              <ul className="links-wrap">
                <li className="btn btn-link btn-link-external">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mlab33972@gmail.com"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <div className="btn-text">
                      <div className="btn-text-inner">
                        {user?.firstName} {user?.lastName}
                      </div>
                    </div>
                  </a>
                </li>
                <li className="btn btn-link btn-link-external">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mlab33972@gmail.com"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <div className="btn-text">
                      <div className="btn-text-inner">{user?.email}</div>
                    </div>
                  </a>
                </li>
                <li className="btn btn-link btn-link-external">
                  <a
                    href="https://api.whatsapp.com/send?phone=15146490492&text=Hello"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner">+1 5## ### ##92</span>
                    </span>
                  </a>
                </li>
              </ul>

              <h4 className="font-extrabold text-[#fa4a2f] details__titles">
                SOCIALS
              </h4>
              <ul className="links-wrap">
                <li className="btn btn-link btn-link-external">
                  <a
                    href="https://www.instagram.com/oto.mata33/"
                    target="_blank"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner"> Instagram</span>
                    </span>
                  </a>
                </li>
                <li className="btn btn-link btn-link-external">
                  <a
                    href="https://github.com/LuckyMate97"
                    target="_blank"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner"> Github</span>
                    </span>
                  </a>
                </li>
                <li className="btn btn-link btn-link-external">
                  <a
                    href="https://www.linkedin.com/in/manuel-thomas-labridy-70220a3a"
                    target="_blank"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner">LinkedIn</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div
              className="
        text-4xl 
        md:text-6xl 
        my-40 
        text-[#eff0ff] 
        items-center 
        justify-center 
        text-center 
        px-10 
        mx-auto
        
        "
            >
              <div>
                {" "}
                Thank you for contacting me! I will get back to you soon.{" "}
              </div>
              <div className=" mx-auto items-center justify-center flex py-40">
                <Smile className=" text-[#4b42ad]" size={100} />
              </div>
            </div>
          )}
          <Form {...form}>
            {!submitted ? (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="md:w-2/3 space-y-6 p-20 md:p-20 md:rounded-[60px] bg-white sm:overflow-hidden right_side mt-[30px] mx-[100px] form_contact"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center space-y-4 w-full">
                      <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                        WORK EMAIL 
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center space-y-4 w-full">
                      <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                        FIRST NAME 
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center space-y-4 w-full">
                      <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                        LAST NAME *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                /> */}

                {/* <FormField
                  control={form.control}
                  name="job_title"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center space-y-4 w-full">
                      <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                        JOB TITLE 
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                /> */}

                {/* <FormField
                            control={form.control}
                            name='company_size'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        COMPANY SIZE *
                                    </FormLabel>
                                    <Select 
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <div className="flex gap-4">
                                                <SelectItem value="1-10">1-10</SelectItem>
                                            </div>
                                            <SelectItem value="11-50">11-50</SelectItem>
                                            <SelectItem value="51-200">51-200</SelectItem>
                                            <SelectItem value="501-1000">501-1000</SelectItem>
                                            <SelectItem value="1000+">1000+</SelectItem>
                                         

                                        </SelectContent>

                                    </Select>
                                  
                                </FormItem>
                            )}
                            /> */}

                <FormField
                  control={form.control}
                  name="company_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center space-y-4 w-full">
                      <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                        ORGANIZATION NAME
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* <FormField
              control={form.control}
              name="help"
              render={({ field }) => (
                <FormItem className="items-center justify-center space-y-4 w-full">
                  <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                    HOW CAN OUR TEAM HELP ? *
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <div className="flex gap-4">
                        <SelectItem value="Evaluate Bird for my company">
                          Evaluate Lloyd for my company
                        </SelectItem>
                      </div>
                      <SelectItem value="Learn More">Learn More</SelectItem>
                      <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                      <SelectItem value="How to use Bird">
                        How to use Lloyd
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            /> */}

                <FormField
                  control={form.control}
                  name="info"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center space-y-4 w-full">
                      <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                        YOUR MESSAGE
                      </FormLabel>
                      <FormControl>
                        <Textarea style={{ height: "200px" }} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* <div className="flex gap-4 items-center">
              <div>
                <Checkbox className="text-[#6c6684]" />
              </div>
              <div className="text-md font-light text-[#6c6684] md:w-3/4 mb-1">
                I agree to Terms of Service and Privacy Policy.
              </div>
            </div> */}

                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    className="
                            text-md
                            font-bold
                            rounded-[80px]
                            w-[100px]
                            h-[100px]
                            border-4
                            border-orange-400/90
                            p-6
                            bg-[#fa4a2f]
                            text-white
                            hover:scale-110
                            hover:bg-white-500
                            transition-all
                            duration-300
                            shadow-md
                        hover:shadow-orange-200
                            "
                    disabled={loading}
                    onClick={() => form.handleSubmit(onSubmit)}
                  >
                    <p>Submit</p>
                  </Button>
                </div>
              </form>
            ) : (
              <></>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}
