import React from "react";
import { connect } from "react-redux";
import { verPaises } from "../../redux/actions/pais";
import { Formik } from "formik";
import { Input } from "../input";
import { Button } from "../button";

const inputPaises = props => {
  const busquedaPaises = entrada => {
    props.verPaises(entrada);
  };
  return (
    <div>
      <Formik
        initialValues={{ pais: "" }}
        validate={values => {
          const errors = {};
          if (!values.pais) {
            errors.pais = "Requerido";
          } else if (!/^[A-Za-z]+$/i.test(values.pais)) {
            errors.pais = "Nombre de país inválido";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          busquedaPaises(values.pais);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="pais"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.pais}
            />
            {errors.pais && touched.pais && errors.pais}
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    verPaises: entrada => {
      dispatch(verPaises(entrada));
    }
  };
};

export default connect(null, mapDispatchToProps)(inputPaises);
