import { Form, Row, Col, Alert } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCategories } from "../../hooks/useCategories";
import { useDrinks } from "../../hooks/useDrinks";

export default function SearchForm() {
  const { categories } = useCategories();
  const { getDrink, loading } = useDrinks();

  const initialValues = {
    name: "",
    category: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El campo es obligatorio"),
    category: Yup.string().required("Selecciona una categorias"),
  });

  const handleSubmit = (value) => {
    getDrink(value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          {formik.status && (
            <Alert variant="danger" className="text-danger">
              {formik.status}
            </Alert>
          )}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Nombre Bebida</Form.Label>

                <Field
                  id="name"
                  type="text"
                  placeholder="Ej: Tequila, Fernet"
                  name="name"
                  as={Form.Control}
                />

                <ErrorMessage
                  name="name"
                  component={Form.Text}
                  className="text-danger"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="category">Categoria Categoria</Form.Label>

                <Field
                  id="category"
                  name="category"
                  as={Form.Select}
                  placeholder="-Seleccione una categoria-"
                >
                  <option disabled>-Seleccione una categoria-</option>
                  {categories.map((category) => (
                    <option
                      key={category.strCategory}
                      value={category.strCategory}
                    >
                      {category.strCategory}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="category"
                  component={Form.Text}
                  className="text-danger"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col md={3}>
              <button
                className="btn btn-danger text-uppercase w-100"
                type="submit"
                disabled={loading}
              >
                {loading ? "Buscando..." : "Buscar Bebidas"}
              </button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
