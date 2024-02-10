"use client"

import Image from "next/image";
import { Button } from "./components/Button";

export default function Home() {

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl md:text-3xl font-bold">This is a basic site to test Microsoft Clarity</h1>
      <div className="flex gap-2 items-center">
        <Button label="Button1" logString="Button 1 clicked" bgColor="red-400"/>
        <Button label="Button2" logString="Button 2 clicked" bgColor="blue-400"/>
        <Button label="Button3" logString="Button 3 clicked" bgColor="green-400"/>
        <Button label="Button4" logString="Button 4 clicked" bgColor="purple-400"/>
      </div>
    </div>
  );
}
