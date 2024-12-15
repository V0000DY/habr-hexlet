'use client'

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveDocument } from '../redux/kanbanSlice';

const DocumentBoard = () => {
    const dispatch = useDispatch();
    const documents = useSelector((state) => state.kanban.documents);

    const [currentItem, setCurrentItem] = useState(null);

    const dragOverHandler = (e) => {
      e.preventDefault();
      if (e.target.className == 'item') {
        e.target.style.boxShadow = '0 4px 3px gray';
      }
    };
    
    const dragStartHandler = (e, column, doc) => {
      setCurrentItem(doc);
    };
    
    const dragLeaveHandler = (e) => {
      e.target.style.boxShadow = 'none';
    };

    const dragEndHandler = (e) => {
      e.target.style.boxShadow = 'none';
    };

    const dropHandler = (e, column, doc) => {
      e.preventDefault();
      e.target.style.boxShadow = 'none';
    }

    const dropTaskHandler = (e, column) => {
      dispatch(moveDocument({id: currentItem.id, status: column}));
    };

    const columns = {
        'in-progress': [],
        'under-review': [],
        'completed': [],
    };

    documents.forEach(doc => {
        const { status } = doc;
        columns[status].push(doc);
    });

    return (
      <div className="row">
        {Object.keys(columns).map((column) => (
          <div
            key={column}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropTaskHandler(e, column)}
            className="col m-1 board"
          >
            <div className="board_title">{column === 'in-progress' ? 'В работе' : column === 'under-review' ? 'На проверке' : 'Завершено'}</div>
            {columns[column].map((doc) => (
              <div
                key={doc.id}
                onDragStart={(e) => dragStartHandler(e, column, doc)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, column, doc)}
                draggable={true}
                className="item"
              >
                {doc.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
};

export default DocumentBoard;
