"use client";

import { useState, useEffect } from "react";

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  description?: string;
  unit?: string;
  disabled?: boolean;
  showValue?: boolean;
}

export default function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  description,
  unit,
  disabled = false,
  showValue = true,
}: SliderProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setLocalValue(newValue);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) || 0;
    const clampedValue = Math.max(min, Math.min(max, newValue));
    setLocalValue(clampedValue);
    onChange(clampedValue);
  };

  const percentage = ((localValue - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
          {label}
        </label>
        {showValue && (
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={localValue}
              onChange={handleInputChange}
              min={min}
              max={max}
              step={step}
              disabled={disabled}
              className="w-20 px-2 py-1 text-sm border border-secondary-300 dark:border-secondary-600 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-secondary-100 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {unit && (
              <span className="text-sm text-secondary-500 dark:text-secondary-400">
                {unit}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue}
          onChange={handleSliderChange}
          disabled={disabled}
          className="w-full h-2 bg-secondary-200 dark:bg-secondary-600 rounded-lg appearance-none cursor-pointer slider disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: disabled
              ? undefined
              : `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`,
          }}
        />
        <div
          className={`absolute top-0 w-4 h-4 bg-primary-500 border-2 border-white dark:border-secondary-800 rounded-full shadow-sm transform -translate-y-1 -translate-x-2 pointer-events-none ${
            disabled ? "opacity-50" : ""
          }`}
          style={{ left: `${percentage}%` }}
        />
      </div>

      {description && (
        <p className="text-xs text-secondary-600 dark:text-secondary-400">
          {description}
        </p>
      )}
    </div>
  );
}
