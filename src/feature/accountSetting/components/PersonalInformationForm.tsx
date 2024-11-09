"use client";
import React from "react";
import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

type FormValues = {
  firstName: string;
  lastName: string;
  city: string;
  postalCode: string;
  address: string;
  email: string;
  phone: string;
  password: string;
};
// Define validation schema using zod
const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  postalCode: z.string().regex(/^\d{5}$/, "Postal code must be 5 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type PersonalInformationFormProps = {
  className?: string;
} & React.ComponentProps<"div">;

const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({
  className,
  ...props
}) => {
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      city: "",
      postalCode: "",
      address: "",
      email: "",
      phone: "",
      password: "",
    },
    mode: "all",
  });

  // Function to handle form submission
  const onSubmit = (data: FormValues) => {
    console.log(data); // Replace with actual form handling logic
  };

  const inputFields = [
    {
      name: "firstName",
      label: "First Name",
    },
    {
      name: "lastName",
      label: "Last Name",
    },
    {
      name: "city",
      label: "City",
    },
    {
      name: "postalCode",
      label: "Postal Code",
    },
    {
      name: "address",
      label: "Address",
      className: "md:col-span-2",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "phone",
      label: "Phone",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
  ];

  return (
    <div className={cn("", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <p className="text-2xl font-semibold text-heading mb-4">
          Personal Information
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputFields.map((item) => (
            <FloatingLabelInput
              key={item.name}
              label={item.label}
              {...register(item.name as keyof FormValues)}
              error={errors[item.name as keyof FormValues] as FieldError}
              classNameContainer={item.className}
              type={item.type}
            />
          ))}
        </div>

        <p className="py-4 font-medium">
          Use this email to log in to your{" "}
          <Link
            href={"https://resumedone.io"}
            target="_blank"
            className="text-blue-500"
          >
            resumedone.io
          </Link>{" "}
          account and receive notifications.
        </p>
        <button
          type="submit"
          className="mb-4 w-[170px] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-medium duration-200"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PersonalInformationForm;
