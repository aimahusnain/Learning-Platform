"use client";

import Link from "next/link";
import Card from "./Card";
import { myselfData, ourselvesData, yourselvesData } from "./data";


export default function Home() {
  const cards = [
    {
        title:'Blog Post Title',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
        imageUrl:"/pic1.jpg",
            tag1:'alif',
            tag2:'baa',
            tag3:'taa',
    },
    {
        title:'Blog Post Title',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
        imageUrl:"/pic1.jpg",
            tag1:'tag1',
            tag2:'tag2',
            tag3:'tag3',
       
    },
    {
        title:'Blog Post Title',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
        imageUrl:"/pic1.jpg",     
            tag1:'tag1',
            tag2:'tag2',
            tag3:'tag3', 
    },
    {
        title:'Blog Post Title',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
        imageUrl:"/pic1.jpg", 
            tag1:'tag1',
            tag2:'tag2',
            tag3:'tag3',
     
    },
    {
        title:'Blog Post Title',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
        imageUrl:"/pic1.jpg",    
            tag1:'tag1',
            tag2:'tag2',
            tag3:'tag3',
      
    },
    {
        title:'Blog Post Title',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
        imageUrl:"/pic1.jpg",
            tag1:'tag1',
            tag2:'tag2',
            tag3:'tag3',
    
    },
    {
        title:'Blog Post Title',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
        imageUrl:"/pic1.jpg",  
            tag1:'tag1',
            tag2:'tag2',
            tag3:'tag3',
        
    },
    {
        title:'Blog Post Title',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
        imageUrl:"/pic1.jpg",
            tag1:'tag1',
            tag2:'tag2',
            tag3:'tag3',
       
    },
]

  return (
    <div className="bg-purple-100 py-6 flex flex-col justify-center sm:py-12">
      {/* Passing the full data object for each Card */}
      <Card learnAbout="MySelf" data={myselfData} generateQuestions={true} />
      <Card learnAbout="Ourselves" data={ourselvesData} generateQuestions={false} />
      <Card learnAbout="Yourselves" data={yourselvesData} generateQuestions={false} />
      {/* <Card learnAbout="Himselves" data={himselvesData} />
      <Card learnAbout="Herself" data={herselfData} />
      <Card learnAbout="Themselves" data={themselvesData} />
      <Card learnAbout="Those" data={thoseData} />
      <Card learnAbout="It" data={itData} /> */}

{cards.map((card, index) => (
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg " key={index}>
                <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={card.imageUrl} alt=""/>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <h1 className="text-xl font-semibold text-gray-900">Boost your conversion rate</h1>
                    <div className="flex gap-4 text-sm font-medium text-[#B09953] ">
                        <div>{card.tag1}</div>
                        <div>{card.tag2}</div>
                        <div>{card.tag3}</div>
                    </div>
                    <a href="#" className="mt-2 block">
                   
                    <p className="mt-3 text-base text-gray-500">{card.description}</p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">           
                    <p className="text-sm font-medium text-gray-900">
                        <Link href="#" className="hover:underline hover:text-[#B09953]">Read more</Link>
                    </p>
                </div>
                </div>
            </div>
          ))}
    </div>
  );
}
