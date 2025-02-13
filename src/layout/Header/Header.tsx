'use client';

import { useState } from 'react';

import { ModalWindow } from '@/component/ModalWindow/ModalWindow';

import { useTodosApi } from '@/hook/useTodosApi';

import data from '@/data/common.json';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addTodo } = useTodosApi();

  const { header } = data;

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header>
        <div className="py-5 px-10 flex justify-between items-center text-white bg-darkBg ">
          <p className="headerTitle">{header.task}</p>

          <button
            type="button"
            onClick={() => handleToggleModal()}
            className="p-2 yellowText border-around-yellow hover:bg-white transition-colors"
          >
            {header.btnText}
          </button>
        </div>
      </header>

      <ModalWindow isOpen={isModalOpen} onClose={handleToggleModal} addTodo={addTodo} />
    </>
  );
};
