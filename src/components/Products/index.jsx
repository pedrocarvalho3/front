import { Box, CardContent, Grid } from "@mui/material";
import plusIcon from "../../assets/baseline-add-24px.svg";
import minusIcon from "../../assets/baseline-remove-24px.svg";
import { Button, Typography } from "@mui/material";
import { CardCustom, ContentHidden, ProductAction } from "./styles";

import * as ProductActions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useState } from "react";
import { formatPrice } from "../../utils";

function Products({ products, updateCount }) {
  const [updatedProducts, setUpdatedProducts] = useState(products);

  const updateProducts = (action, id) => {
    const newProducts = updatedProducts.map((p) => {
      if (p.id === id) {
        if (p.count === 0 && action === "minus") {
          return p;
        }
        return { ...p, count: action === "plus" ? p.count + 1 : p.count - 1 };
      }
      return p;
    });

    setUpdatedProducts(newProducts);
  };

  const updateCart = (id, count) => {
    updateCount(id, count);
  };
  return (
    <Box mt={8} mb={4}>
      <Grid container spacing={2}>
        {updatedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardCustom elevation={0} >
              <img src={product.image} alt={product.name} height={250} />
              <CardContent className="content">
                <Typography variant="subtitle2" color="gray">
                  {product.name}
                </Typography>
                <Typography variant="h6" fontWeight={700} color="GrayText">
                  {formatPrice(product.price)}
                </Typography>
                <Typography variant="caption" color="#b0b6bd">
                  Em até 12x de {formatPrice(product.price / 12)} <br />
                  {formatPrice(product.price - product.price / 10)} à vista (10%
                  de desconto)
                </Typography>
                <ContentHidden>
                  <ProductAction>
                    <button onClick={() => updateProducts("minus", product.id)}>
                      <img src={minusIcon} alt="" />
                    </button>
                    <input disabled min="0" value={product.count} />
                    <button onClick={() => updateProducts("plus", product.id)}>
                      <img src={plusIcon} alt="" />
                    </button>
                  </ProductAction>
                  <Button
                    variant="contained"
                    onClick={() => updateCart(product.id, product.count)}
                  >
                    ADICIONAR
                  </Button>
                </ContentHidden>
              </CardContent>
            </CardCustom>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ProductActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
