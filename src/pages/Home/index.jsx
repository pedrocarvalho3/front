import { Box, Container } from "@mui/material";
import Header from "../../components/Header";
import Products from "../../components/Products";
import Form from "../../components/Form";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Header title="Produtos" />
        <Products />
        <Header title="Dados do Cliente" />
        <Form />
      </Box>
    </Container>
  );
}
