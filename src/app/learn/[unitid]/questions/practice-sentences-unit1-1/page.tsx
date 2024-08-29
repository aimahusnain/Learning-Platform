"use client";

import Card from "./Card";
import { myselfData, ourselvesData, yourselvesData } from "./data";
import YourselvesCard from "./YourselvesCard";


export default function Home() {
  return (
    <div className="bg-purple-100 py-6 flex flex-col justify-center sm:py-12">
      {/* Passing the full data object for each Card */}
      <Card learnAbout="MySelf" data={myselfData} generateQuestions={true} />
      <Card learnAbout="Ourselves" data={ourselvesData} generateQuestions={false} />
      <YourselvesCard learnAbout="Yourselves" data={yourselvesData} generateQuestions={false} />
      {/* <Card learnAbout="Himselves" data={himselvesData} />
      <Card learnAbout="Herself" data={herselfData} />
      <Card learnAbout="Themselves" data={themselvesData} />
      <Card learnAbout="Those" data={thoseData} />
      <Card learnAbout="It" data={itData} /> */}
      
    </div>
  );
}
