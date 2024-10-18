"use client";

import React, { useRef } from "react";
import Label from "./ui/label";
import Input from "./ui/input";
import sendEmail from "@/actions/sendEmail";
import { getErrorMessage } from "@/lib/utils";
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  return (
    <div className="rounded-2xl border-2 bg-white px-8 py-8 shadow-lg">
      <form
        ref={ref}
        className="flex flex-col gap-4"
        action={async (formData: FormData) => {
          const data = await sendEmail(formData);
          console.log(data)
          if (data?.error) {
            toast.error(getErrorMessage(data.error));
          } else {
            // ref.current?.reset();
            toast.success("Message send successfully.", {
              style: {
                border: "1px solid #2C73F8",
                padding: "9px",
                color: "#2C73F8",
              },
              iconTheme: {
                primary: "#2C73F8",
                secondary: "#F7FAFC",
              },
            });
          }
        }}
      >
        <div className="grid gap-1">
          <Label htmlFor="senderName">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="senderName"
            name="senderName"
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
            name="senderEmail"
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
            name="senderCompany"
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
            name="senderMessage"
            placeholder="Type your message here."
            className="rounded-md border p-2 font-manrope text-base text-black outline-none"
            rows={5}
            maxLength={500}
          />
        </div>

        <button
          type="submit"
          className="w-max rounded-md bg-brand-dark/80 px-4 py-2 font-manrope font-bold text-white"
        >
          {pending ? (
            <div className="border-special h-7 w-7 animate-spin rounded-full border-b-2"></div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
