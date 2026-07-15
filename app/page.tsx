"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const day = new Date().getDay();

  let today = "REST DAY";
  let workout = "Recovery & Mobility";

  if (day === 1) {
    today = "MONDAY";
    workout = "Back + Triceps";
  }

  if (day === 2) {
    today = "TUESDAY";
    workout = "Chest + Biceps";
  }

  if (day === 4) {
    today = "THURSDAY";
    workout = "Legs + Abs";
  }

  if (day === 5) {
    today = "FRIDAY";
    workout = "Shoulders + Arms";
  }


  function toggleRadio() {

    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://stream.zeno.fm/f3wvbbqmdg8uv"
      );
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }

  }


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

        <p className="text-[#A66A4C] font-bold">
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





      <div className="bg-[#E8D8C3] rounded-3xl p-6 mt-6">


        <p className="text-[#A66A4C] font-bold">
          🎧 GYM RADIO
        </p>


        <h3 className="text-2xl font-bold mt-2">
          Workout Mode 🔥
        </h3>


        <p className="text-[#7A6658] mt-2">
          Energy for your training session
        </p>


        <button
          onClick={toggleRadio}
          className="bg-[#A66A4C] text-white font-bold rounded-xl w-full py-4 mt-5"
        >
          {playing ? "⏸ PAUSE RADIO" : "▶ PLAY RADIO"}
        </button>


      </div>





      <div className="fixed bottom-0 left-0 right-0 bg-[#E8D8C3] p-4 text-center">

        <Link href="/program" className="font-bold">
          💪 Program
        </Link>

      </div>


    </main>
  );
}