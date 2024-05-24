import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Home=()=> {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/"/>
      <p>jojo</p>
    </div>
  );
}

export default Home