import Link from "next/link";

const programs = [
  {
    day: "MONDAY",
    title: "Back + Triceps",
    exercises: [
      "Lat Pulldown - 4 x 10",
      "Seated Row - 4 x 10",
      "One Arm Dumbbell Row - 3 x 12",
      "Triceps Pushdown - 3 x 12",
      "Overhead Triceps Extension - 3 x 10",
    ],
  },
  {
    day: "TUESDAY",
    title: "Chest + Biceps",
    exercises: [
      "Bench Press - 4 x 8",
      "Incline Dumbbell Press - 3 x 10",
      "Cable Fly - 3 x 12",
      "Barbell Curl - 3 x 10",
      "Hammer Curl - 3 x 12",
    ],
  },
  {
    day: "THURSDAY",
    title: "Legs + Abs",
    exercises: [
      "Squat - 4 x 8",
      "Leg Press - 3 x 10",
      "Leg Curl - 3 x 12",
      "Calf Raise - 4 x 15",
      "Plank - 3 Sets",
    ],
  },
  {
    day: "FRIDAY",
    title: "Shoulders + Arms",
    exercises: [
      "Shoulder Press - 4 x 8",
      "Lateral Raise - 4 x 12",
      "Rear Delt Fly - 3 x 12",
      "Barbell Curl - 3 x 10",
      "Triceps Extension - 3 x 12",
    ],
  },
];


export default function Program() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#3B2A21] p-6">

      <Link href="/" className="text-[#A66A4C] font-bold">
        ← Home
      </Link>


      <h1 className="text-4xl font-bold mt-6">
        Workout Program
      </h1>

      <p className="text-[#7A6658] mt-2">
        Weekly training plan
      </p>


      <div className="space-y-6 mt-8">

        {programs.map((item) => (

          <div
            key={item.day}
            className="bg-[#E8D8C3] rounded-3xl p-6 shadow-sm"
          >

            <p className="text-[#A66A4C] font-bold">
              {item.day}
            </p>

            <h2 className="text-2xl font-bold mt-2">
              {item.title}
            </h2>


            <div className="mt-5 space-y-3">

              {item.exercises.map((exercise) => (

                <div
                  key={exercise}
                  className="bg-[#F5EFE6] rounded-xl p-3"
                >
                  💪 {exercise}
                </div>

              ))}

            </div>

          </div>

        ))}

      </div>


      <div className="h-20"></div>

    </main>
  );
}