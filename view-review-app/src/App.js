import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { fetchReviews } from "./redux/actions";
import { fetchReviews } from "./redux/reviewsSlice";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import ReviewTable from "./components/ReviewTable";
import ReviewFilters from "./components/ReviewFilters";
import ReviewForm from "./components/ReviewForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return(
    <Container>
      <div className="container-fluid">
        <h1 className="display-4">Отзывы</h1>
        <p className="lead">Добавляйте, фильтруйте и сортируйте отзывы по вашим критериям</p>
      </div>
      <Row>
        <Col sm={6}>
          <ReviewForm />
        </Col>
        <Col sm={6}>
          <ReviewFilters />
        </Col>
      </Row>
      <Row>
        <Col>
        <ReviewTable />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
