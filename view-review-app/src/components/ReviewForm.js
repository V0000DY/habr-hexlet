import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addReview } from '../redux/reviewsSlice';

const ReviewForm = () => {
  const dispatch = useDispatch();

  const [platform, setPlatform] = useState('');
  const [rating, setRating] = useState(1);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      platform,
      rating: Number(rating),
      date: new Date().toISOString(),
      text,
    };

    dispatch(addReview(newReview));

    setPlatform('');
    setRating(1);
    setText('');
  };

  return (
    <Form className="mb-4 text-end" onSubmit={handleSubmit}>
      <Form.Group className="mb-2 text-start">
        <Form.Label>Выберите платформу</Form.Label>
        <Form.Control as="select" value={platform} onChange={(e) => setPlatform(e.target.value)} required>
          <option value="">Выберите платформу</option>
          <option value="Google">Google</option>
          <option value="Яндекс">Яндекс</option>
          <option value="2ГИС">2ГИС</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-2 text-start">
        <Form.Label>Рейтинг</Form.Label>
        <Form.Control type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required />
      </Form.Group>
      <Form.Group className="mb-2 text-start">
        <Form.Label>Текст отзыва</Form.Label>
        <Form.Control as="textarea" rows={8} value={text} onChange={(e) => setText(e.target.value)} required />
      </Form.Group>
      <Button variant="outline-primary" type="submit">Добавить отзыв</Button>
    </Form>
  );
};

export default ReviewForm;
