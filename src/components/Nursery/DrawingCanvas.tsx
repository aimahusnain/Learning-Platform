'use client'

import React, { useRef, useState, useEffect } from 'react';

const DrawingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [currentLetter, setCurrentLetter] = useState('A');
  const [currentColor, setCurrentColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [lastPoint, setLastPoint] = useState<{ x: number; y: number } | null>(null);

  const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.lineCap = 'round';
        context.lineJoin = 'round';
        setCtx(context);
        drawLetterBackground(context, currentLetter);
      }
    }
  }, [currentLetter]);

  const drawLetterBackground = (context: CanvasRenderingContext2D, letter: string) => {
    context.font = '500px Arial';
    context.fillStyle = 'rgba(200, 200, 200, 0.2)';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(letter, 400, 300);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const point = getPoint(e);
    setLastPoint(point);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setLastPoint(null);
  };

  const getPoint = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
    return null;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx || !lastPoint) return;

    const newPoint = getPoint(e);
    if (newPoint) {
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = brushSize;

      ctx.beginPath();
      ctx.moveTo(lastPoint.x, lastPoint.y);

      // Curve interpolation for smoother lines
      const midPoint = midPointBtw(lastPoint, newPoint);
      ctx.quadraticCurveTo(lastPoint.x, lastPoint.y, midPoint.x, midPoint.y);

      ctx.stroke();
      setLastPoint(newPoint);
    }
  };

  const midPointBtw = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    return {
      x: p1.x + (p2.x - p1.x) / 2,
      y: p1.y + (p2.y - p1.y) / 2
    };
  };

  const clearCanvas = () => {
    if (ctx && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      drawLetterBackground(ctx, currentLetter);
    }
  };

  const nextLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const currentIndex = alphabet.indexOf(currentLetter);
    const nextIndex = (currentIndex + 1) % alphabet.length;
    setCurrentLetter(alphabet[nextIndex]);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold mr-4">Trace the letter:</h2>
        <span className="text-6xl font-bold">{currentLetter}</span>
      </div>
      <canvas
        ref={canvasRef}
        className="border border-gray-300 rounded-lg"
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onMouseMove={draw}
      />
      <div className="mt-4 space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={clearCanvas}
        >
          Clear Canvas
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={nextLetter}
        >
          Next Letter
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Select Color:</h3>
        <div className="flex space-x-2">
          {colors.map((color) => (
            <button
              key={color}
              className="w-8 h-8 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
              onClick={() => setCurrentColor(color)}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Brush Size: {brushSize}</h3>
        <input
          type="range"
          min="1"
          max="20"
          value={brushSize}
          onChange={(e) => setBrushSize(Number(e.target.value))}
          className="w-64"
        />
      </div>
    </div>
  );
};

export default DrawingCanvas;