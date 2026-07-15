export default function Program() {
  return (
    <main className="min-h-screen bg-black text-white p-6 pb-20">

      <h1 className="text-4xl font-bold">
        WORKOUT PROGRAM
      </h1>

      <p className="text-gray-400 mt-2">
        4 Day Strength Program
      </p>


      <Day
        day="MONDAY"
        title="Back + Rear Delt + Triceps"
        exercises={[
          ["Lat Pulldown", "4 x 8-12"],
          ["Seated Cable Row", "4 x 10-12"],
          ["Barbell Row", "3 x 8-10"],
          ["Face Pull", "3 x 15"],
          ["Rope Pushdown", "3 x 12"],
          ["Overhead Triceps Extension", "3 x 10-12"],
        ]}
      />


      <Day
        day="TUESDAY"
        title="Chest + Biceps"
        exercises={[
          ["Bench Press", "4 x 6-8"],
          ["Incline Dumbbell Press", "3 x 8-10"],
          ["Cable Fly", "3 x 12-15"],
          ["Chest Press Machine", "3 x 10-12"],
          ["EZ Bar Curl", "3 x 10"],
          ["Hammer Curl", "3 x 12"],
        ]}
      />


      <Day
        day="THURSDAY"
        title="Legs + Abs"
        exercises={[
          ["Squat", "4 x 6-10"],
          ["Leg Press", "3 x 10-12"],
          ["Romanian Deadlift", "3 x 8-10"],
          ["Leg Curl", "3 x 12"],
          ["Calf Raise", "4 x 15"],
          ["Cable Crunch", "3 x 15"],
        ]}
      />


      <Day
        day="FRIDAY"
        title="Shoulders + Upper Chest + Arms"
        exercises={[
          ["Shoulder Press", "4 x 8-10"],
          ["Lateral Raise", "4 x 12-15"],
          ["Incline Bench Press", "3 x 8-10"],
          ["Rear Delt Fly", "3 x 15"],
          ["Cable Curl", "3 x 12"],
          ["Triceps Pushdown", "3 x 12"],
        ]}
      />

    </main>
  );
}



function Day({
  day,
  title,
  exercises
}: {
  day:string;
  title:string;
  exercises:string[][];
}) {

  return (
    <section className="bg-zinc-900 rounded-3xl p-6 mt-6">

      <h2 className="text-2xl font-bold">
        {day}
      </h2>

      <p className="text-green-400 mt-1">
        {title}
      </p>


      <div className="mt-5 space-y-3">

        {exercises.map((item,index)=>(
          <div
            key={index}
            className="bg-zinc-800 rounded-xl p-4"
          >

            <h3 className="font-bold">
              {item[0]}
            </h3>

            <p className="text-gray-400 text-sm">
              {item[1]}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}