import { Box, Button, Typography } from "@mui/material";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { resetCount } from "../../store/actions";
import { calcTotal, formatPrice } from "../../utils";
import { Price, StyledWrapper, StyledContentWrapper } from "./styles";
import purchase from "../../assets/purchase.png";

function FinalizedPage({ products, user, resetCount }) {
  const navigate = useNavigate();

  const total = calcTotal(products);

  function goBack() {
    resetCount();
    return navigate("/");
  }

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <Typography variant="h4" fontWeight={700}>
          {user.name},
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          Sua compra no valor de <Price>{formatPrice(total)}</Price>
          <br />
          foi finalizada com sucesso
        </Typography>
        <Box m={4} mr={2} alignItems="center">
          <img src={purchase} alt="" />
        </Box>
        <Button
          size="large"
          variant="contained"
          color="warning"
          onClick={goBack}
        >
          INICIAR NOVA COMPRA
        </Button>
      </StyledContentWrapper>
    </StyledWrapper>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ resetCount }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FinalizedPage);
