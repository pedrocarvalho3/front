import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { reduxForm, Field } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import {saveUserData} from "../../store/actions";
import { calcTotal, formatPrice } from "../../utils";

const options = ["F", "M", "Outro"];

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <TextField
      label={label}
      error={touched && error}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  </div>
);

const renderAutocomplete = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <Autocomplete
      {...input}
      {...custom}
      disablePortal
      options={options}
      onChange={(event, value) => input.onChange(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={touched && error}
          helperText={touched && error}
        />
      )}
    />
  </div>
);

function Form({ products, saveUserData, handleSubmit }) {
  const navigate = useNavigate();
  const total = calcTotal(products);

  function handlePurchase(data) {
    if (total === 0) {
      alert("Nenhum produto adicionado!");
    } else {
      saveUserData(data);
      navigate("/finalized");
    }
  }

  return (
    <Box mt={4}>
      <form onSubmit={handleSubmit(handlePurchase)}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={5}>
            <Field
              name="name"
              component={renderTextField}
              variant="outlined"
              label="Nome"
              placeholder="Nome do cliente aqui"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <Field
              name="email"
              component={renderTextField}
              variant="outlined"
              label="Email"
              placeholder="Email do cliente aqui"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Field
              name="gender"
              component={renderAutocomplete}
              variant="outlined"
              label="Sexo"
              placeholder="Selecione"
            />
          </Grid>
        </Grid>
        <Box my={6} textAlign="end">
          <Typography variant="h5" fontWeight={700} mb={1}>
            Total: {formatPrice(total)}
          </Typography>
          <Button type="submit" variant="contained" color="warning">
            FINALIZAR COMPRA
          </Button>
        </Box>
      </form>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(saveUserData, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "form",
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Campo obrigatório!";
      }

      if (!values.email) {
        errors.email = "Campo obrigatório!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Formato de e-mail inválido!";
      }

      if (!values.gender) {
        errors.gender = "Campo obrigatório!";
      }

      return errors;
    },
  })(Form)
);
