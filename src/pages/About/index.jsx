import { Link } from "react-router-dom";
export function About() {
  return (
    <>
      <Link to="/">
        <span>{"<- Voltar para a home"}</span>
      </Link>
      <h1>Sobre mim</h1>
      <p>Sou isso ai q tu ta vendo. Ta ligado?</p>
    </>
  );
}
