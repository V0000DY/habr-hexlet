import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  documents: [
    { id: '1', title: 'Пойти в магазин', status: 'in-progress' },
    { id: '2', title: 'Выкинуть мусор', status: 'in-progress' },
    { id: '3', title: 'Покушать', status: 'under-review' },
    { id: '4', title: 'Код ревью', status: 'in-progress' },
    { id: '5', title: 'Задача на факториал', status: 'in-progress' },
    { id: '6', title: 'Задачи на фибоначчи', status: 'under-review' },
    { id: '7', title: 'Снять видео', status: 'in-progress' },
    { id: '8', title: 'Смонтировать', status: 'in-progress' },
    { id: '9', title: 'Отрендерить', status: 'under-review' },
  ],
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState, 
  reducers: {
    addDocument: (state, { payload }) => {
      state.documents.push(payload);
    },
    moveDocument: (state, { payload }) => {
      const { id, status } = payload;
      const movingDocument = state.documents.find((doc) => doc.id === id);
      movingDocument.status = status;
    },
  },
});

export const { addDocument, moveDocument } = kanbanSlice.actions;
export default kanbanSlice.reducer;
