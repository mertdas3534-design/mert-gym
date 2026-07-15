"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [today, setToday] = useState("");
  const [workout, setWorkout] = useState("");

  useEffect(() => {
    const day = new Date().getDay();

    if (day === 1) {
      setToday("MONDAY");
      setWorkout("Back + Triceps");
    } 
    else if (day === 2) {
      setToday("TUESDAY");
      setWorkout("Chest + Biceps");
    } 
    else if (day === 4) {
      setToday("THURSDAY");
      setWorkout("Legs + Abs");
    } 
    else if (day === 5) {
      setToday("FRIDAY");
      setWorkout("Shoulders + Arms");
    } 
    else {
      setToday("REST DAY");
      setWorkout("Recovery & Mobility");
    }

  }, []);


  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#3B2A21] p-6">

      <p className="text-[#7A6658] text-lg">
        Welcome Mert 👋
      </p>

      <h1 className="text-5xl font-bold mt-4">
        MERT GYM
      </h1>

      <p className="text-[#7A6658] mt-3">
        Your personal workout tracker
      </p>


      <div className="bg-[#E8D8C3] rounded-3xl p-6 mt-10 shadow-sm">

        <p className="text-[#7A6658] font-semibold">
          TODAY'S WORKOUT
        </p>

        <h2 className="text-3xl font-bold mt-3">
          {today}
        </h2>

        <p className="text-xl mt-2">
          {workout}
        </p>

        <Link href="/program">
          <button className="bg-[#A66A4C] text-white font-bold rounded-xl w-full py-4 mt-6">
            START WORKOUT
          </button>
        </Link>

      </div>


      <div className="bg-[#E8D8C3] rounded-3xl p-6 mt-6">

        <h3 className="text-xl font-bold">
          Weekly Schedule
        </h3>

        <div className="mt-4 space-y-2 text-[#7A6658]">

          <p>✓ Monday - Back + Triceps</p>
          <p>✓ Tuesday - Chest + Biceps</p>
          <p>○ Thursday - Legs + Abs</p>
          <p>○ Friday - Shoulders + Arms</p>

        </div>

      </div>


      <div className="fixed bottom-0 left-0 right-0 bg-[#E8D8C3] p-4 text-center">

        <Link href="/program" className="font-bold">
          💪 Program
        </Link>

      </div>


    </main>
  );
}