import { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import ICON_ARROW from "../../assets/icon_arrow.svg";
import css from "./Accordion.module.css";

export function Accordion({ description, maintenanceInfo }) {
  // NOTE: toggle visibility
  // const [descriptionVisilbe, setDescriptionVisilbe] = useState(true);
  // const [maintenanceInfoVisilbe, setMaintenanceInfoVisilbe] = useState(true);
  // const toggleState = (state) => {
  //   return (state = !state);
  // };

  //return (
  // <>
  //   <div>
  //     <Link
  //       onClick={() => setDescriptionVisilbe(toggleState)}
  //       className={css.accordionContainer}
  //     >
  //       <p className={css.accordionTitle}>Opis produktu</p>
  //       <img
  //         src={ICON_ARROW}
  //         alt="arrow"
  //         className={
  //           descriptionVisilbe ? css.accordionImg : css.accordionImgReverse
  //         }
  //       />
  //     </Link>
  //     {descriptionVisilbe && (
  //       <p className={css.accordionText}>{description}</p>
  //     )}
  //     <Link
  //       onClick={() => setMaintenanceInfoVisilbe(toggleState)}
  //       className={css.accordionContainer}
  //     >
  //       <p className={css.accordionTitle}>Wskazówki pielęgnacyjne</p>
  //       <img
  //         src={ICON_ARROW}
  //         alt="arrow"
  //         className={
  //           descriptionVisilbe ? css.accordionImg : css.accordionImgReverse
  //         }
  //       />
  //     </Link>
  //     {maintenanceInfoVisilbe && (
  //       <p className={css.accordionText}>{maintenanceInfo}</p>
  //     )}
  //   </div>
  // </>

  // NOTE: accordion mode
  const [accordionVisibleIndex, setAccordionVisibleIndex] = useState(0);

  const accordionContent = [
    { name: "Opis produktu", text: description },
    { name: "Wskazówki pielęgnacyjne", text: maintenanceInfo },
  ];

  return (
    <>
      <ul>
        {accordionContent.map((accordion, index) => {
          return (
            <li key={nanoid()}>
              <Link
                className={css.accordionContainer}
                onClick={() => setAccordionVisibleIndex(index)}
              >
                <p className={css.accordionTitle}>{accordion.name}</p>
                <img
                  src={ICON_ARROW}
                  alt="arrow"
                  className={
                    accordionVisibleIndex === index
                      ? css.accordionImg
                      : css.accordionImgReverse
                  }
                />
              </Link>
              {accordionVisibleIndex === index && (
                <p className={css.accordionText}>{accordion.text}</p>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
