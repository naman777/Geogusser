"use client";

import { addUser } from "@/services/userActions";
import { useState } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/navigation";
import { Sign } from "crypto";
import Signup from "../components/Signup";
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
