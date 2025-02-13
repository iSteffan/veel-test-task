import { Dialog, DialogPanel } from '@headlessui/react';
import { Form } from '../Form/Form';

export interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
  addTodo: (todo: { title: string; completed: boolean; userId: number }) => void;
}

export const ModalWindow = ({ isOpen, onClose, addTodo }: ModalProp) => {
  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
      <div
        className={`fixed inset-0 z-10 w-screen overflow-y-auto ${
          isOpen ? 'backdrop-blur-[2px]' : ''
        }`}
      >
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="p-4 mx-auto flex flex-col justify-between max-w-[400px] h-auto border-around-yellow bg-darkBg 
            backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <Form addTodo={addTodo} onClose={onClose} />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
