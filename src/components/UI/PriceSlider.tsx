"use client"
import { useState } from "react"
import type React from "react"

interface PriceSliderProps {
  min?: number
  max?: number
  value: number
  onChange: (value: number) => void
  currency?: string
  label?: string
}

export const PriceSlider = ({
  min = 0,
  max = 100,
  value,
  onChange,
  currency = "$",
  label = "Price Range",
}: PriceSliderProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const percentage = ((value - min) / (max - min)) * 100

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value))
  }

  return (
    <div className=" rounded-xl p-6 border border-indigo-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <p className="text-lg font-semibold text-gray-800">{label}</p>
        <div className="bg-white px-4 py-2 rounded-full border border-indigo-200 shadow-sm">
          <span className="text-indigo-600 font-bold text-sm">
            {currency}{min} - {currency}{value}
          </span>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="flex justify-between text-xs text-gray-500 mb-3 font-medium">
          <span>{currency}{min}</span>
          <span className="text-indigo-600 font-semibold">
            Current: {currency}{value}
          </span>
          <span>{currency}{max}</span>
        </div>

        <div className="relative h-3 mb-4">
          {/* Track background */}
          <div className="absolute inset-0 h-2 bg-gray-200 rounded-full"></div>

          {/* Active track */}
          <div
            className="absolute h-2 rounded-full transition-all duration-300 shadow-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            style={{ width: `${percentage}%` }}
          ></div>

          {/* Slider input */}
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className={
              `absolute inset-0 w-full h-3 appearance-none bg-transparent cursor-pointer ` +
              `thumb:appearance-none thumb:w-6 thumb:h-6 thumb:rounded-full ` +
              `thumb:bg-gradient-to-br thumb:from-indigo-500 thumb:via-purple-500 thumb:to-pink-500 ` +
              `thumb:border-4 thumb:border-white thumb:shadow-lg thumb:transition-all thumb:duration-200 ` +
              (isDragging ? 'thumb:scale-110' : '')
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/70 backdrop-blur-sm px-4 py-3 rounded-lg border border-indigo-100">
          <div className="text-xs text-gray-500 mb-1">Minimum</div>
          <div className="text-lg font-bold text-gray-700">{currency}{min}</div>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-3 rounded-lg text-white shadow-lg">
          <div className="text-xs text-indigo-100 mb-1">Selected</div>
          <div className="text-lg font-bold">{currency}{value}</div>
        </div>
      </div>

      <div className="flex justify-between mt-4 px-1">
        {[0, 25, 50, 75, 100].map((mark) => (
          <div key={mark} className="flex flex-col items-center">
            <div
              className={
                `w-2 h-2 rounded-full transition-all duration-200 ` +
                (percentage >= mark ?
                  `bg-gradient-to-r from-indigo-500 to-purple-500 shadow-sm` :
                  `bg-gray-300`)
              }
            ></div>
            <span className="text-xs text-gray-400 mt-1">
              {currency}{Math.round((mark / 100) * (max - min) + min)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}