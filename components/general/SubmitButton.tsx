"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full cursor-pointer rounded bg-black text-white py-2 hover:bg-black/90"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting" : "Submit Post"}
    </button>
  );
};

export default SubmitButton;
