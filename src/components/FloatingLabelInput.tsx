"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";

export type FloatingLabelInputProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    classNameContainer?: string;
    error?: FieldError;
  };

export default function FloatingLabelInput({
  label,
  className,
  classNameContainer,
  error,
  ...props
}: FloatingLabelInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={classNameContainer}>
      <div
        className={cn(
          "relative border rounded-md px-3 py-2 focus-within:ring-1",
          error
            ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-500"
            : "border-gray-300 focus-within:border-blue-500 focus-within:ring-blue-500"
        )}
        onClick={focusInput}
      >
        <input
          {...props}
          ref={inputRef}
          className={cn(
            "peer w-full bg-transparent py-1 text-gray-900 placeholder-transparent focus:outline-none",
            className
          )}
          placeholder=" "
        />
        <label
          onClick={focusInput}
          className={cn(
            "absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 transition-all duration-200 ease-in-out",
            "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600",
            "peer-focus:-top-2 peer-focus:text-xs peer-focus:translate-y-0 peer-focus:text-blue-500 bg-white px-1",
            "peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:translate-y-0 bg-white px-1",
            { "!text-red-500 peer-focus:text-red-500": error }
          )}
        >
          {label}
        </label>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
