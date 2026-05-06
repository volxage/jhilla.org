import './App.css';
import DarkBass from './DarkBass.webp';
import { useEffect } from 'react';
import {BlurOnScroll} from './animateOnScroll.tsx';

export default function Jazz(){
  useEffect(() => {
    document.title = "JHilla: Jazz Bass";
  })
  return(
    <header className='App h-screen bg-blu-50'>
      <div className="bg-blu-500 p-10 grid place-items-center">
        <div className="grid place-items-center width-[100vw]">
          <img src={DarkBass} alt='Silhouette playing bass' className=""/>
          <div className="absolute inset-0">
            <a href="/">
              <p className="text-[4vw] font-black font-sans text-blu-100 italic underline">
                JHILLA
              </p>
            </a>
            <p className="text-[8vw] drop-shadow-2xl font-black font-sans text-blu-100 italic ">
              JAZZ BASS
            </p>
          </div>
        </div>
        <BlurOnScroll reappear={true}>
          <p className='text-blu-100 p-10'>Jonathan Hilliard studied jazz bass at Michigan State University with Professor Rodney Whitaker. The rest of the exceptional faculty that he has studied under includes Michael Dease, Xavier Davis, Randy Napoleon, Erena Terakubo, Anthony Stanco, Randle "Uncle G" Gelispie, and Carmen Bradford. From his time at MSU, he has had the opportuntiy to play with guest artists such as John Clayton, Vincent Chandler, Harvey Mason, Jazzmeia Horn, Ryan Keberle, and others. He has played with students and faculty at jazz clubs like Blue LLama Jazz Club, and Smalls. <a href='https://press.jazz.org/press/2026/01/jazz-at-lincoln-center-announces-2026-national-collegiate-jazz-championship-winning-bands/'>In 2026, he was awarded "Outstanding Bass" in the National Collegiate Jazz Champtionship</a> (formerly the Jack Rudin competition.)</p>
        </BlurOnScroll>

        <BlurOnScroll reappear={true}>
          <div className='w-fit text-left bg-blu-100 p-5'>
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
            <p>Erena Terakubo</p>
            <p className='italic'>Harvey Mason</p>
            <p className='font-bold'>Played alongside:</p>
            <p>Xavier Davis</p>
            <p>Randy Napoleon</p>
            <p>Toni Micelli</p>
            <p>Michael Dease</p>
            <p>Walter Blanding</p>
            <p>Arcoiris Sandoval</p>
            <p>Alvin Waddles</p>
            <p>Nate Wynn</p>
          </div>
          </BlurOnScroll>
      </div>
    </header>
  );
}
