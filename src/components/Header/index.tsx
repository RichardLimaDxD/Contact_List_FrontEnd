/* eslint-disable no-unsafe-optional-chaining */
import { useState, useRef } from "react";
import { SlLogout } from "react-icons/sl";
import { BiSolidUserDetail } from "react-icons/bi";
import { AiFillFilePdf } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth, useContactAuth } from "../../hooks";
import styles from "./styles.module.scss";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Icontacts } from "../../interfaces/contacts.interfaces";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Header = () => {
  const [menu, setMenu] = useState<boolean>(true);
  const { setUserModal } = useAuth();

  const { setCreateModal, contact } = useContactAuth();

  const { userLogout } = useAuth();

  const renderRef = useRef<HTMLUListElement>(null);

  const showMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const handleGeneratePDF = () => {
    const docDefinition = {
      content: [
        { text: "Lista de Contatos", style: "header" },
        ...contact?.map((contacts: Icontacts) => ({
          columns: [
            {
              width: "*",
              stack: [
                { text: `Nome completo: ${contacts.fullname}` },
                { text: `Email: ${contacts.email}` },
                { text: `Telefone: ${contacts.telephone}` },
              ],
              style: "cardContent",
            },
          ],
          marginBottom: 10,
        })),
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          marginBottom: 20,
        },
        cardName: {
          fontSize: 16,
          bold: true,
        },
        cardContent: {
          fontSize: 14,
        },
      },
    };

    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.download("contatos.pdf");
  };

  return (
    <header ref={renderRef} className={styles.container__headerDashboard}>
      <div>
        <button onClick={() => setCreateModal(true)}>New contact +</button>
        <nav className={styles.container__navMobile}>
          {menu ? (
            <GiHamburgerMenu cursor="pointer" onClick={showMenu} />
          ) : (
            <ul>
              <li>
                <GiHamburgerMenu cursor="pointer" onClick={showMenu} />
              </li>
              <li>
                <AiFillFilePdf onClick={handleGeneratePDF} cursor="pointer" />
              </li>
              <li>
                <BiSolidUserDetail
                  onClick={() => setUserModal(true)}
                  cursor="pointer"
                />
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
