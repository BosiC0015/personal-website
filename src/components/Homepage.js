import { Nav } from "./Nav";
import Introduction from "./Introduction";
import { Contact } from "./Contact";
import Stacks from "./Stacks";

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