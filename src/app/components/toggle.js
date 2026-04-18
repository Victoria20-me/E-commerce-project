"use client";
import { useState, useEffect } from "react";
export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  // const toggleDark = () => {
  //   const newDark = !dark;
  //   setDark(newDark);
  //   document.documentElement.classList.toggle("dark", newDark);
  // };

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    console.log("HTML class:", html.className);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="px-3 py-1 border rounded">
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
