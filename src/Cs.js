import './App.css';
import {BlurOnScroll, SlideOnScroll} from './animateOnScroll.tsx';
import { useEffect } from 'react';

function TTButtons(){
  return (
    <BlurOnScroll reappear={true} threshold={0.5}>
      <div>
        <a href="https://tunetracker.jhilla.org" target="_blank" rel="noopener noreferrer">
          <button className="bg-brown-50 text-4xl font-light p-3 m-8 rounded">Web</button>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.tunetracker" target="_blank" rel="noopener noreferrer">
          <button className="bg-brown-50 text-4xl font-light p-3 m-8 rounded">Google Play</button>
        </a>
        <a href="https://apps.apple.com/us/app/tunetracker-songbook/id6743944173" target="_blank" rel="noopener noreferrer">
          <button className="bg-brown-50 text-4xl font-light p-3 m-8 rounded">iOS</button>
        </a>
        <a href="https://github.com/volxage/tunetracker" target="_blank" rel="noopener noreferrer">
          <button className="bg-brown-50 text-4xl font-light p-3 m-8 rounded">GitHub</button>
        </a>
      </div>
    </BlurOnScroll>
  );
}
export default function CompSci(){
  useEffect(() => {
    document.title = "JHilla: Code";
  })
  return(
    <header className='App'>
      <div className="bg-orange-100 p-10 grid place-items-center">
        <a href="/">
          <p className="text-[4vw] font-black font-sans text-brown-50 italic underline">
            JHILLA
          </p>
        </a>
        <p className="text-[8vw] drop-shadow-2xl font-black font-sans text-brown-50 italic">
          CODE
        </p>
        <p className="text-[4vw] drop-shadow-2xl font-black font-sans">
          TuneTracker
        </p>
        <p>TuneTracker is a tool to keep track of the songs you know, and how well you know them. You can be as thorough as you want to. You can keep a simple song list and mark your general confidence on each song. Or, you can go deeper and mark your confidence based on the melody/lyrics, you can mark when you last played a song with just a few presses, and you can sort through your list with all of these details to find which song you need to practice or which song is performance ready.</p>
        <TTButtons/>
        <p>Jonathan's work on TuneTracker sets him apart from most of his peers. The reason for this is the complexity of the project; it requires a web application, a mobile application, and a server with a database integration and a secure authentication system. Each piece of the puzzle was created using industry-standard tools, giving Jonathan a very comprehensive and well balanced skill set.</p>
        <div className='w-fit, p-8'>
          <div className="bg-orange-200 p-4">
            <p className='font-bold'>Mobile Application</p>
            <p>Cross platform mobile application for both iOS and Android.</p>
            <p className="italic">Typescript, React Native, Realm, StyledComponents, Github, etc.</p>
          </div>
          <div className="bg-orange-200 p-4">
            <p className="font-bold">Web Application</p>
            <p>(Beta) tools for users to edit song information for the database</p>
            <p className="italic">Javascript, React, Tailwind, etc.</p>
          </div>
          <div className="bg-orange-300 p-4">
            <p className='font-bold'>Server</p>
            <p>A server/REST API that handles user authentication and tune publishing/changes.</p>
            <p className='italic'>Node, Sequelize, MariaDB (fork of MySQL), Google auth, Apple auth, etc.</p>
          </div>
        </div>
        <p className='text-sm italic'>The code for TuneTracker is only publically available for the <a href='https://github.com/volxage/tunetracker' className='underline'>Mobile Application</a>. Code for the Web Application and Server may be sent to employers upon request for verification purposes.</p>

      </div>
    </header>
  );
}
