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
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1MDMQaRCt7KvD6gbN-6Fe0Y_5rw-sdR_e" alt="js" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1LuC9FqQtI5apXHIPUmsXZ2R1ohMCeFMT" alt="python" />
        </div>
        <div id="back-end">
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1MGvn5vfXONSYBkV4CXE4iSJkDO8EXiXc" alt="node" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1MfxzExsy3gbt6xH3Y_CN6R63Hc4qyL49" alt="express" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1MgnQXlUMqAxEeYOZ6bLoIUDs3c6xSw7P" alt="postgres" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1MwIo42zeCy1DaGmhZlQZ9b6wWsuK5skU" alt="jquery" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1Mkx0xG7oTTOSn4CMSIeLgI3z-HD5BFIP" alt="ejs" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1MpX5EEe84wNTW4j56IdReOV_7lsfh500" alt="ruby" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1MtZphWX-BOVltJ9l0b1EmZOkoTt9BCHL" alt="ruby on rails" />
        </div>
        <div id="front-end">
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1MK4tg91CV7owfy8mwou-NSLpLJs_p68L" alt="react" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1MS_vIXrac-LZlVOg4PTBZz9jAoc9Orfm" alt="html" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1MdtSfROQsgumyXMHQx7HKhDmVRJ6igix" alt="css" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1ddZ7-57SOZaH4xQ6s7w29FhPw6WNNeUl" alt="scss" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1gGz2sCIVZfQWrcAcKjcZmdaiV8_Jmbqy" alt="bootstrap" />
        </div>
        <div id="testing">
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1RDkoGxbc6dWyYgObNdzzF-fDIEmr2wgk" alt="mocha chai" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1LsRHpBIiu_nnFiAnqHiBeqedCzp-Zriu" alt="jest" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=13OrvusZmqDlgslrth5n8dWuoWFc4HVx3" alt="storybook" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1GXivIWDULFKG2Sa5rbgy03CNuJoSdRfe" alt="cypress" />
          <img className="stack-img" src="https://drive.google.com/uc?export=view&id=1cPZq-8Q6CmLCOPzuuEDefGKdvCHBkICr" alt="rspec" />
        </div>
      </div>
    </div>
  );
};