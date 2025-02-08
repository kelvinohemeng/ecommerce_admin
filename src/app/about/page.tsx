"use client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <p>About</p>
      <button onClick={() => router.push("/")}>Go home</button>
    </div>
  );
};

export default page;
