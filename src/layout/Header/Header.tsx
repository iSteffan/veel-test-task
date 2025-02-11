import data from '@/data/common.json';

export const Header = () => {
  const { header } = data;

  return (
    <header>
      <div className="py-5 px-10 flex justify-between items-center text-white bg-darkBg ">
        <p className="headerTitle">{header.task}</p>
        <button
          type="button"
          className="p-2 btnText border-around-yellow hover:bg-white transition-colors"
        >
          {header.btnText}
        </button>
      </div>
    </header>
  );
};
