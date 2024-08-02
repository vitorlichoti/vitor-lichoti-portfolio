'use client'
import { Settings } from "lucide-react";

export default function SetupMenu() {
  return (
    <button
      className="p-2 rounded-full text-white hover:bg-gray-700 active:bg-gray-800"
      onClick={() => console.log("Settings")}
    >
      <Settings size={22} className="opacity-60"/>
    </button>
  );
}