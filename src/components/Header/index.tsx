import { SlLogout } from "react-icons/sl";
import { BiSolidUserDetail } from "react-icons/bi";
import { AiFillFilePdf } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useAuth, useContactAuth } from "../../hooks";
import styles from "./styles.module.scss";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const { setCreateModal } = useContactAuth();
  const { userLogout } = useAuth();

  const showMenu = () => {
    menu === false ? setMenu(true) : setMenu(false);
  };

  return (
    <header className={styles.container__headerDashboard}>
      <div>
        <button onClick={() => setCreateModal(true)}>New contact +</button>
        <nav className={styles.container__navMobile}>
          {menu ? (
            <GiHamburgerMenu cursor="pointer" onClick={() => showMenu()} />
          ) : (
            <ul>
              <li>
                <GiHamburgerMenu cursor="pointer" onClick={() => showMenu()} />
              </li>
              <li>
                <AiFillFilePdf cursor="pointer" />
              </li>
              <li>
                <BiSolidUserDetail cursor="pointer" />
              </li>
              <li>
                <SlLogout cursor="pointer" onClick={() => userLogout()} />
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export { Header };
