import './App.css';
import {BlurOnScroll, SlideOnScroll} from './animateOnScroll.tsx';
import { useEffect } from 'react';

export default function Jazz(){
  useEffect(() => {
    document.title = "JHilla: Jazz Bass";
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
          JAZZ BASS
        </p>
        <p>Jonathan Hilliard is studying jazz bass at Michigan State University with Professor Rodney Whitaker. The rest of the exceptional faculty that he has studied under includes Michael Dease, Xavier Davis, Randy Napoleon, Anthony Stanco, and Randle "Uncle G" Gelispie. From his time at MSU, he has had the opportuntiy to play with guest artists such as John Clayton, Vincent Chandler, Jazzmeia Horn, Ryan Keberle, and others. He has played with students and faculty at jazz clubs like Blue LLama Jazz Club, and Smalls.</p>

        <div className='w-fit text-left bg-orange-200'>
          <p className='font-bold'>Mentors (Chronological):</p>
          <p className='italic text-sm pb-2'>Italics for brief lesson(s)/guest artist residency</p>
          <p>Justin Sekelewski</p>
          <p className='italic'>John Swana</p>
          <p>Rodney Whitaker</p>
          <p>Anthony Stanco</p>
          <p>Xavier Davis</p>
          <p>Randy Napoleon</p>
          <p>Michael Dease</p>
          <p className='italic'>John Clayton</p>
        </div>
        <div className='w-fit text-left bg-orange-200'>
          <p className='font-bold'>Played alongside:</p>
          <p>Xavier Davis</p>
          <p>Randy Napoleon</p>
          <p>Toni Micelli</p>
          <p>Michael Dease</p>
          <p>Walter Blanding</p>
        </div>
        <p></p>
      </div>
    </header>
  );
}
