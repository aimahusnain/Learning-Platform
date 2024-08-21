import React from 'react';

interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  category: string;
}

const elements: Element[] = [
  { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, category: 'nonmetal' },
  { symbol: 'He', name: 'Helium', atomicNumber: 2, category: 'noble-gas' },
  { symbol: 'Li', name: 'Lithium', atomicNumber: 3, category: 'alkali-metal' },
  { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, category: 'alkaline-earth-metal' },
  { symbol: 'B', name: 'Boron', atomicNumber: 5, category: 'metalloid' },
  { symbol: 'C', name: 'Carbon', atomicNumber: 6, category: 'nonmetal' },
  { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, category: 'nonmetal' },
  { symbol: 'O', name: 'Oxygen', atomicNumber: 8, category: 'nonmetal' },
  { symbol: 'F', name: 'Fluorine', atomicNumber: 9, category: 'halogen' },
  { symbol: 'Ne', name: 'Neon', atomicNumber: 10, category: 'noble-gas' },
  // Add more elements as needed
];

const PeriodicTable: React.FC = () => {
  return (
    <div className="grid grid-cols-18 gap-1 p-4">
      {elements.map((element) => (
        <div
          key={element.symbol}
          className={`aspect-square flex flex-col items-center justify-center p-1 text-xs border rounded ${getCategoryColor(
            element.category
          )}`}
        >
          <div className="font-bold">{element.symbol}</div>
          <div className="text-[0.6rem]">{element.atomicNumber}</div>
        </div>
      ))}
    </div>
  );
};

const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'nonmetal':
      return 'bg-yellow-200';
    case 'noble-gas':
      return 'bg-purple-200';
    case 'alkali-metal':
      return 'bg-red-200';
    case 'alkaline-earth-metal':
      return 'bg-orange-200';
    case 'metalloid':
      return 'bg-green-200';
    case 'halogen':
      return 'bg-blue-200';
    default:
      return 'bg-gray-200';
  }
};

export default PeriodicTable;