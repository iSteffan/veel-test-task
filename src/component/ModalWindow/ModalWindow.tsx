import { Button, Dialog, DialogPanel } from '@headlessui/react';

export interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWindow = ({ isOpen, onClose }: ModalProp) => {
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
            className="p-4 mx-auto flex flex-col justify-between max-w-[400px] h-[100px] border-around-yellow bg-darkBg 
            md:h-[110px] backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
              onClick={onClose}
            >
              Got it, thanks!
            </Button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
