import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const ReviewTable = () => {
  const filteredReviews = useSelector((state) => state.reviews.filteredReviews);

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Платформа</th>
          <th>Рейтинг</th>
          <th>Время добавления</th>
          <th>Текст отзыва</th>
        </tr>
      </thead>
      <tbody>
        {filteredReviews.map(review => (
          <tr key={review.id}>
            <td>{review.platform}</td>
            <td>{review.rating}</td>
            <td>{new Date(review.date).toLocaleString()}</td>
            <td>{review.text}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReviewTable;
