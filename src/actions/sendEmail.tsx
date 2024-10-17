"use server";

import { getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend("re_YZ4iqPca_3zv1LaHZazz4cU1pyeRtVRfg");

const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const message = formData.get("senderMessage");
  const senderEmail = formData.get("senderEmail");
  
  if (!senderName || typeof senderName !== "string") {
    return {
      error: "Invalid sender name",
    };
  }

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  if (!senderEmail || typeof senderEmail !== "string") {
    return {
      error: "Invalid sender email",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "contact@manufacs.com",
      subject: `New Message by ${senderName.toUpperCase()} from Portfolio`,
      replyTo: senderEmail,
      // react: <EmailContactForm message={message} senderEmail={senderEmail} />,
      text: message,
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};

export default sendEmail;