import { Nav } from "./Nav";
import Introduction from "./Introduction";
import Stacks from "./Stacks";
import { Contact } from "./Contact";
import "./Homepage.css";

export default function Homepage() {
  return (
    <main>
      <Nav />
      <Introduction />
      <Stacks />
      <Contact />
    </main>
  );
};