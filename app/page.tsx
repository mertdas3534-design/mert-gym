import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <p className="text-gray-400 text-lg">
        Welcome Guys 👋
      </p>

      <h1 className="text-1xl font-bold mt-5">
        ANDREY & MERT GYM PROGRAM
      </h1>

      <p className="text-gray-400 mt-3">
        Your personal workout tracker
      </p>


      <div className="bg-zinc-900 rounded-3xl p-6 mt-10">

        <h2 className="text-2xl font-bold">
          Ready to train?
        </h2>

        <p className="text-gray-400 mt-2">
          Follow your weekly workout program.
        </p>


        <Link href="/program">

          <button className="bg-green-400 text-black font-bold rounded-xl w-full py-4 mt-6">
            OPEN PROGRAM
          </button>

        </Link>

      </div>


      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 p-4 text-center">

        <Link href="/program">
          💪 Program
        </Link>

      </div>


    </main>
  );
}