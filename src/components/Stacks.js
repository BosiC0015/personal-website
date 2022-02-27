import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { IconContext } from "react-icons";
import { RiStackLine } from "react-icons/ri";
import "./Stacks.css";


export default function Stacks() {
  const title = () => {
    return (
      <>
        <IconContext.Provider value={{ size: '1.5em' }}>
          <RiStackLine />
        </IconContext.Provider>
        My Tech Stacks:
      </>
    );
  };

  return (
    <div>
      <DropdownButton className="stacks" id="dropdown-basic-button" title={title()}>
        <Dropdown.Item href="/#languages"><p className="explore">Languages</p></Dropdown.Item>
        <Dropdown.Item href="/#back-end"><p className="explore">Back End</p></Dropdown.Item>
        <Dropdown.Item href="/#front-end"><p className="explore">Front End</p></Dropdown.Item>
        <Dropdown.Item href="/#testing"><p className="explore">Testing</p></Dropdown.Item>
      </DropdownButton>
      <div className="stack-icons">
        <div id="languages">
          <a href="/projects">
            <img className="stack-img" alt="js" src="https://drive.google.com/uc?export=view&id=1MDMQaRCt7KvD6gbN-6Fe0Y_5rw-sdR_e" />
          </a>
          <img className="stack-img" alt="python" src="https://drive.google.com/uc?export=view&id=1LuC9FqQtI5apXHIPUmsXZ2R1ohMCeFMT" />
        </div>
        <div id="back-end">
          <img className="stack-img" alt="node" src="https://drive.google.com/uc?export=view&id=1MGvn5vfXONSYBkV4CXE4iSJkDO8EXiXc" />
          <a href="/projects#cafe">
            <img className="stack-img" alt="express" src="https://drive.google.com/uc?export=view&id=1MfxzExsy3gbt6xH3Y_CN6R63Hc4qyL49" />
          </a>
          <a href="/projects#journal">
            <img className="stack-img" alt="postgres" src="https://drive.google.com/uc?export=view&id=1MgnQXlUMqAxEeYOZ6bLoIUDs3c6xSw7P" />
          </a>
          <a href="/projects#tweeter">
            <img className="stack-img" alt="jquery" src="https://drive.google.com/uc?export=view&id=1MwIo42zeCy1DaGmhZlQZ9b6wWsuK5skU" />
          </a>
          <a href="/projects#cafe">
            <img className="stack-img" alt="ejs" src="https://drive.google.com/uc?export=view&id=1Mkx0xG7oTTOSn4CMSIeLgI3z-HD5BFIP" />
          </a>
          <a href="/projects#jungle">
            <img className="stack-img" alt="ruby" src="https://drive.google.com/uc?export=view&id=1MpX5EEe84wNTW4j56IdReOV_7lsfh500" />
            <img className="stack-img" alt="ruby on rails" src="https://drive.google.com/uc?export=view&id=1MtZphWX-BOVltJ9l0b1EmZOkoTt9BCHL" />
          </a>
        </div>
        <div id="front-end">
          <a href="/projects#portfolio">
            <img className="stack-img" alt="react" src="https://drive.google.com/uc?export=view&id=1MK4tg91CV7owfy8mwou-NSLpLJs_p68L" />
            <img className="stack-img" alt="html" src="https://drive.google.com/uc?export=view&id=1MS_vIXrac-LZlVOg4PTBZz9jAoc9Orfm" />
            <img className="stack-img" alt="css" src="https://drive.google.com/uc?export=view&id=1MdtSfROQsgumyXMHQx7HKhDmVRJ6igix" />
          </a>
          <a href="/projects#journal">
            <img className="stack-img" alt="scss" src="https://drive.google.com/uc?export=view&id=1ddZ7-57SOZaH4xQ6s7w29FhPw6WNNeUl" />
          </a>
          <a href="/projects#portfolio">
            <img className="stack-img" alt="bootstrap" src="https://drive.google.com/uc?export=view&id=1gGz2sCIVZfQWrcAcKjcZmdaiV8_Jmbqy" />
          </a>
        </div>
        <div id="testing">
          <a href="/projects#tinyapp">
            <img className="stack-img" alt="mocha chai" src="https://drive.google.com/uc?export=view&id=1RDkoGxbc6dWyYgObNdzzF-fDIEmr2wgk" />
          </a>
          <a href="/projects#scheduler">
            <img className="stack-img" alt="jest" src="https://drive.google.com/uc?export=view&id=1LsRHpBIiu_nnFiAnqHiBeqedCzp-Zriu" />
            <img className="stack-img" alt="storybook" src="https://drive.google.com/uc?export=view&id=13OrvusZmqDlgslrth5n8dWuoWFc4HVx3" />
            <img className="stack-img" alt="cypress" src="https://drive.google.com/uc?export=view&id=1GXivIWDULFKG2Sa5rbgy03CNuJoSdRfe" />
          </a>  
          <a href="/projects#jungle">
            <img className="stack-img" alt="rspec" src="https://drive.google.com/uc?export=view&id=1cPZq-8Q6CmLCOPzuuEDefGKdvCHBkICr" />
          </a>
        </div>
      </div>
    </div>
  );
};