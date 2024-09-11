import React from 'react'
import javascript from '../assets/technologies/javascript.png'
import angular from '../assets/technologies/angular.png'
import css from '../assets/technologies/css.png'
import github from '../assets/technologies/github.png'
import html from '../assets/technologies/html.png'
import mongo from '../assets/technologies/mongo.png'
import node from '../assets/technologies/nodejs.png'
import react from '../assets/technologies/reactjs.png'

const Experience = () => {

const techExperienceList = [
{
    name: "javascript",
    imageSrc: javascript,
},
{
    name: "angular",
    imageSrc: angular,
},
{
    name: "css",
    imageSrc: css,
},
{
    name: "github",
    imageSrc: github,
},
{
    name: "html",
    imageSrc: html,
},
{
    name: "mongo",
    imageSrc: mongo,
},
{
    name: "node",
    imageSrc: node,
},
{
    name: "react",
    imageSrc: react,
},
]

  return (
    <div name="Experience" className=' flex flex-col justify-center items-center w-screen h-screen mt-40'>
        <h2 className=" font-semibold text-[40px]"> Technologies</h2>
        <div className="grid grid-cols-4 w-screen gap-8 mt-[5%] pt-[5%] pb-[5%] bg-[#2B2B29] pl-[3.5rem] place-content-center ">
            {techExperienceList.map(techExp =>(
                <div key={techExp.name} className=' w-[100px] h-[100px]'>
                <img src={techExp.imageSrc} alt={techExp.name} className=' flex justify-center items-center'/>
            </div>
            ))}
        </div>
      
    </div>
  )
}

export default Experience
