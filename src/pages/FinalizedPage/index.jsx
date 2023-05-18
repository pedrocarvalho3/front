import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { resetCount } from "../../store/actions";
import { calcTotal, formatPrice } from "../../utils";
import { Price } from "./styles";
import purchase from "../../assets/purchase.png";

function FinalizedPage({ products, user, resetCount }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isWidthMd = useMediaQuery(theme.breakpoints.down("md"));
  const isWidthSm = useMediaQuery(theme.breakpoints.down("sm"));

  const total = calcTotal(products);

  function goBack() {
    resetCount();
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
        padding: isWidthMd ? "2rem" : 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "white",
          padding: isWidthSm ? "100%" : "4rem",
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          {user.name},
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          Sua compra no valor de <Price>{formatPrice(total)}</Price>
          <br />
          foi finalizada com sucesso
        </Typography>
        <Box m={4} mr={2} alignItems="center">
          <img src={purchase} alt="" width={180} />
        </Box>
        <Button
          size="large"
          variant="contained"
          color="warning"
          onClick={goBack}
        >
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ resetCount }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FinalizedPage);
