import { Container } from "../../styles/Container";
import { GlobalStyle } from "../../styles/global";
import { Dashboard } from "../Dashboard";

export function HomePage() {
  return (
    <>
      <Container>
        <Dashboard />

        <GlobalStyle />
      </Container>
    </>
  );
}
