import { Nav } from "./Nav";
import "./Introduction.css";


export default function MoreAboutMe() {
  return (
    <div>
      <Nav />
      <p className="more-about">More About Me:</p>
      <div className="intro-text">
        <p className="content">From player to developer.</p>
        <p className="content">Game playing has always been a part of my whole growing up experience. It was fascinating for me how the beautiful world was created and how the interesting systems were created just by typing some words. After finishing my Bachelor’s degree in Engineering, I still can’t put aside my yearn for the virtual world. Finally this made me meet Lighthouse Lab, where I definitely made my first step to the world of programming. The courses of the 12-week-long web development bootcamp for full stack developers were compact-designed, but it made me feel amused instead. </p>
        <p className="content">For me, the coding process is the same as a game. I get the quests, I am equipped with the skills I have learnt, and I need to explore the world to obtain new skills to meet the requirements more effectively. The feeling of fulfillment of finishing a quest (or let say a project) is awesome, and motivates me in further working.</p>
        <p className="content">I am also comfortable with working in a team, where every member knows what skills each one has, what they are good at, and how to divide and finish the tasks more efficiently. Just like we have raids in the game, which make the players assemble, work on their own part and finish the same quest together. </p>
        <p className="content">While I am away from my work, I am not away from coding. In my free time, I would make some small applications to make it more convenient in my life, like is shown in my projects. </p>
        <p className="content">I will keep on with the continuing game called coding in my life.</p>
      </div>
    </div>
  );
};