"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Signup from "../page";
export default function Page() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "afgaagaga",
    displayName: "",
  });
  const router = useRouter();
  return (
    <Signup/>
  );
}
