"use client";

import Card from "./Card";
import data from "./data";

export default function Home() {
  return (
    <div className="bg-purple-100 py-6 flex flex-col justify-center sm:py-12">
      <Card learnAbout="I do/work/like etc. (present simple)" data={data} />
    </div>
  );
}
