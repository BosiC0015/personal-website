import { Nav } from "./components/Nav";
import Introduction from "./components/Introduction";
import { Contact } from "./components/Contact";

export default function Homepage() {
  return (
    <main>
      <Nav />
      <Introduction />
      <Contact />
    </main>
  );
};