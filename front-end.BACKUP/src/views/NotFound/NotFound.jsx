import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { PageTitle } from "../../components/PageTitle/PageTitle";
// import { Button } from "../../components/Button/Button";
// import { useNavigate } from "react-router-dom";
import IMG_ERROR from "../../assets/error.png";
import css from "./NotFound.module.css";

export function NotFound() {
  // const navigate = useNavigate();
  // const handleButtonClick = () => {
  //   navigate("/");
  // };

  return (
    <>
      <CenteredContent>
        <div className={css.notFound}>
          <img src={IMG_ERROR} alt="błąd" />
          <PageTitle>Nie ma takiej strony :-{"("}</PageTitle>
          {/* <Button
            onClick={() => {
              return handleButtonClick();
            }}
          >
            Wróć do strony głównej
          </Button> */}
        </div>
      </CenteredContent>
    </>
  );
}
