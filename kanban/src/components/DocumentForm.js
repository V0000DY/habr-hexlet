'use client'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDocument } from '../redux/kanbanSlice';

const DocumentForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        const newDocument = {
            id: Date.now().toString(),
            title,
            status: 'in-progress',
        };

        dispatch(addDocument(newDocument));
        setTitle('');
    };

    return (
      <div className="row justify-content-start">
        <div className="col-4">
          <form className="text-end mb-3" onSubmit={handleSubmit}>
              <input
                  className="form-control mb-2"
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  placeholder="Название документа" 
                  required 
              />
              <button className="btn btn-outline-secondary" type="submit">Добавить документ</button>
          </form>
        </div>
      </div>
    );
};

export default DocumentForm;
