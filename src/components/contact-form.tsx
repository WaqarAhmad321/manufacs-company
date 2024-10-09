"use client";

import React, { useRef } from "react";
import Label from "./ui/label";
import Input from "./ui/input";
import { GridPattern } from "./ui/dot-pattern";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="relative rounded-2xl border-2 px-8 py-8 shadow-lg">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "absolute left-0 top-0 -z-10 size-[400px]",
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "skew-y-12",
        )}
      />

      <form
        ref={ref}
        className="flex flex-col gap-4"
        //   action={async (formData: FormData) => {
        //     const data = await sendEmail(formData);

        //     if (data?.error) {
        //       toast.error(getErrorMessage(data.error));
        //     } else {
        //       ref.current?.reset();
        //       toast.success("Message send successfully.", {
        //         style: {
        //           border: "1px solid #2C73F8",
        //           padding: "9px",
        //           color: "#2C73F8",
        //         },
        //         iconTheme: {
        //           primary: "#2C73F8",
        //           secondary: "#F7FAFC",
        //         },
        //       });
        //     }
        //   }}
      >
        <div className="grid gap-1">
          <Label htmlFor="senderName">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="senderName"
            required
            placeholder="What's your good name?"
            maxLength={50}
          />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="sendEmail">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            id="senderEmail"
            placeholder="Email, So We can get back to you"
            required
            maxLength={50}
          />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="senderCompany">
            Company <span className="text-sm">(optional)</span>
          </Label>
          <Input
            type="text"
            id="senderCompany"
            placeholder="Your company name"
            required
            maxLength={50}
          />
        </div>

        <div className="grid gap-1">
          <Label htmlFor="senderMessage">
            Message <span className="text-red-500">*</span>
          </Label>
          <textarea
            required
            id="senderMessage"
            placeholder="Type your message here."
            className="rounded-md border p-2 font-manrope text-base text-black outline-none"
            rows={5}
            maxLength={500}
          />
        </div>

        <button
          type="submit"
          className="w-max rounded-md bg-brand px-4 py-2 font-manrope font-bold text-white"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
