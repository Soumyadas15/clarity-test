"use client"

import Image from "next/image";
import { Button } from "./components/Button";

export default function Home() {

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl md:text-3xl font-bold w-[70%] sm:w-full text-center">This is a basic site to test Microsoft Clarity</h1>
      <div className="flex gap-4 items-center flex-col md:flex-row">
        <Button 
            label="Button 1"
            bgColor="bg-violet-700"
            border="bg-violet-700"
        />
        <Button 
            label="Button 2"
            bgColor="bg-cyan-600"
            border="bg-cyan-600"
        />
        <Button 
            label="Button 3"
            bgColor="bg-rose-500"
            border="bg-rose-500"
        />
        <Button 
            label="Button 4"
            bgColor="bg-purple-700"
            border="bg-purple-700"
        />
      </div>
    </div>
  );
}
