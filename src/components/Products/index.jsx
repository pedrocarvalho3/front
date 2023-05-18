import { Box, CardContent, Grid, Button, Typography } from "@mui/material";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useState } from "react";

import plusIcon from "../../assets/baseline-add-24px.svg";
import minusIcon from "../../assets/baseline-remove-24px.svg";
import {updateCount} from "../../store/actions";
import { CardCustom, ContentHidden, ProductAction } from "./styles";
import { formatPrice } from "../../utils";

function Products({ products: initialProducts, updateCount }) {
  const [products, setProducts] = useState(initialProducts);

  const updateProductCount = (action, id) => {
    const updatedProducts = [...products];
    const idx = updatedProducts.findIndex((item) => item.id === id);

    if(updatedProducts[idx].count === 0 && action === "minus") return

    const updatedItem = {
      ...updatedProducts[idx],
      count:
        action === "plus"
          ? updatedProducts[idx].count + 1
          : updatedProducts[idx].count - 1,
    };
    
    updatedProducts[idx] = updatedItem;
    setProducts(updatedProducts);
  };

  const updateCart = (id, count) => {
    updateCount(id, count);
  };
  return (
    <Box mt={8} mb={4}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <CardCustom elevation={0}>
              <img src={product.image} alt={product.name} height={250} />
              <CardContent className="content">
                <Typography variant="subtitle2" color="#808080">
                  {product.name}
                </Typography>
                <Typography variant="h6" fontWeight={700} lineHeight={2} color="#696969">
                  {formatPrice(product.price)}
                </Typography>
                <Typography variant="caption" color="#C0C0C0">
                  Em até 12x de {formatPrice(product.price / 12)} <br />
                  {formatPrice(product.price - product.price / 10)} à vista (10%
                  de desconto)
                </Typography>
                <ContentHidden>
                  <ProductAction>
                    <button onClick={() => updateProductCount("minus", product.id)}>
                      <img src={minusIcon} alt="" />
                    </button>
                    <input disabled min="0" value={product.count} />
                    <button onClick={() => updateProductCount("plus", product.id)}>
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
  bindActionCreators(updateCount, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
