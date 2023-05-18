import { Box, Button, Typography } from "@mui/material";

import purchase from "../../assets/purchase.png";
import { useNavigate } from "react-router-dom";
import { Price } from "./styles";
import { connect } from "react-redux";
import { calcTotal, formatPrice } from "../../utils";

function FinalizedPage({ products, user }) {
  const navigate = useNavigate();

  const total = calcTotal(products);

  function goBack() {
    products.count = 0;
    return navigate("/");
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "white",
          padding: "4rem",
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {user.name},
        </Typography>
        <Typography variant="subtitle1" fontWeight={700}>
          Sua compra no valor de <Price>{formatPrice(total)}</Price>
          <br />
          foi finalizada com sucesso
        </Typography>
        <Box m={4} mr={2} alignItems="center">
          <img src={purchase} alt="" width="150rem" />
        </Box>
        <Button variant="contained" color="warning" onClick={goBack}>
          INICIAR NOVA COMPRA
        </Button>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user,
});

export default connect(mapStateToProps)(FinalizedPage);
