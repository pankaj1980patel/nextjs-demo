"use client";
import React from "react";
import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  postalCode: z.string().regex(/^\d{5}$/, "Invalid postal code"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  email: z.string().email("Invalid email address"),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data); // handle form submission here
  };

  return (
    <div className={cn("", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <p className="text-2xl font-semibold text-heading mb-4">
          Personal Information
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FloatingLabelInput
            label="First Name"
            {...register("firstName")}
            error={errors.firstName as FieldError}
            className={errors.firstName && "border-red-500"}
          />
          <FloatingLabelInput
            label="Last Name"
            {...register("lastName")}
            className={errors.lastName && "border-red-500"}
          />
          <FloatingLabelInput
            label="City"
            {...register("city")}
            className={errors.city && "border-red-500"}
          />
          <FloatingLabelInput
            label="Postal Code"
            {...register("postalCode")}
            className={errors.postalCode && "border-red-500"}
          />
          <div className="md:col-span-2">
            <FloatingLabelInput
              label="Address"
              {...register("address")}
              className={errors.address && "border-red-500"}
            />
          </div>
          <FloatingLabelInput
            label="Email"
            {...register("email")}
            className={errors.email && "border-red-500"}
          />
          <FloatingLabelInput
            label="Phone"
            {...register("phone")}
            className={errors.phone && "border-red-500"}
          />
          <FloatingLabelInput
            label="Password"
            type="password"
            {...register("password")}
            className={errors.password && "border-red-500"}
          />
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
          resumedone.io account and receive notifications.
        </p>
        <button
          type="submit"
          className="mb-4 w-[170px] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-medium duration-200"
        >
          Save
        </button>
        <div className="flex items-center gap-2">
          <Checkbox id="showProfile" className="border-gray-300 border-2" />
          <label
            htmlFor="showProfile"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show my profile to serious employers on{" "}
            <Link
              href={"https://hirethesbest.io"}
              target="_blank"
              className="text-blue-500"
            >
              hirethesbest.io
            </Link>{" "}
            for free
          </label>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformationForm;
