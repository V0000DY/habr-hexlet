import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { filterReviews, sortReviews } from '../redux/reviewsSlice';

const ReviewFilters = () => {
  const dispatch = useDispatch();

  const [platform, setPlatform] = useState(useSelector((state) => state.reviews.platform));
  const [minRating, setMinRating] = useState(useSelector((state) => state.reviews.minRating));
  const [maxRating, setMaxRating] = useState(useSelector((state) => state.reviews.maxRating));
  const [sortParam, setSortParam] = useState(useSelector((state) => state.reviews.sortParam));
  const [sortOrder, setSortOrder] = useState(useSelector((state) => state.reviews.sortOrder));

  const handleFilterChange = () => {
    dispatch(filterReviews({
      platform,
      minRating,
      maxRating,
    }));
    dispatch(sortReviews({ sortParam, sortOrder }));
  };

  const handleSortChange = () => {
    dispatch(sortReviews({ sortParam, sortOrder }));
  };

  return (
    <div>
      <Form className="text-end">
        <Form.Group className="text-start" controlId="platformSelect">
          <Form.Label>Выберите платформу</Form.Label>
          <Form.Control as="select" onChange={(e) => setPlatform(e.target.value)}>
            <option value="">Все платформы</option>
            <option value="Google">Google</option>
            <option value="Яндекс">Яндекс</option>
            <option value="2ГИС">2ГИС</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="text-start" controlId="minRating">
          <Form.Label>Минимальный рейтинг</Form.Label>
          <Form.Control type="number" value={minRating} onChange={(e) => setMinRating(Number(e.target.value))} min="1" max="5" placeholder="Мин. рейтинг" />
        </Form.Group>
        <Form.Group className="mb-2 text-start" controlId="maxRating">
          <Form.Label>Максимальный рейтинг</Form.Label>
          <Form.Control type="number" value={maxRating} onChange={(e) => setMaxRating(Number(e.target.value))} min="1" max="5" placeholder="Макс. рейтинг" />
        </Form.Group>
        <Button variant="outline-secondary" onClick={handleFilterChange}>Применить фильтры</Button>
      </Form>
      <Form className="mb-4 text-end">
        <Form.Group className="text-start" controlId="sortParam">
          <Form.Label>Сортировать по</Form.Label>
          <Form.Control as="select" onChange={(e) => setSortParam(e.target.value)}>
            <option value="date">Дате</option>
            <option value="rating">Рейтингу</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-2 text-start" controlId="sortOrder">
          <Form.Label>Направление сортировки</Form.Label>
          <Form.Control as="select" onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </Form.Control>
        </Form.Group>
        <Button variant="outline-secondary" onClick={handleSortChange}>Сортировать</Button>
      </Form>
    </div>
  );
};

export default ReviewFilters;
