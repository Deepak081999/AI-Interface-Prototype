"use client";

import { useState, useEffect } from "react";

export interface Parameters {
  temperature: number;
  maxTokens: number;
}

interface ParametersPanelProps {
  parameters: Parameters;
  onParametersChange: (parameters: Parameters) => void;
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  description: string;
  unit?: string;
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  description,
  unit,
}: SliderProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setLocalValue(newValue);
    onChange(newValue);
  };

  const percentage = ((localValue - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
          {label}
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={localValue}
            onChange={(e) => {
              const newValue = parseFloat(e.target.value) || 0;
              const clampedValue = Math.max(min, Math.min(max, newValue));
              setLocalValue(clampedValue);
              onChange(clampedValue);
            }}
            min={min}
            max={max}
            step={step}
            className="w-20 px-2 py-1 text-sm border border-secondary-300 dark:border-secondary-600 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-secondary-100"
          />
          {unit && (
            <span className="text-sm text-secondary-500 dark:text-secondary-400">
              {unit}
            </span>
          )}
        </div>
      </div>

      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue}
          onChange={handleChange}
          className="w-full h-2 bg-secondary-200 dark:bg-secondary-600 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`,
          }}
        />
        <div
          className="absolute top-0 w-4 h-4 bg-primary-500 border-2 border-white dark:border-secondary-800 rounded-full shadow-sm transform -translate-y-1 -translate-x-2 pointer-events-none"
          style={{ left: `${percentage}%` }}
        />
      </div>

      <p className="text-xs text-secondary-600 dark:text-secondary-400">
        {description}
      </p>
    </div>
  );
}

export default function ParametersPanel({
  parameters,
  onParametersChange,
}: ParametersPanelProps) {
  const [presets] = useState([
    { name: "Creative", temperature: 0.9, maxTokens: 2000 },
    { name: "Balanced", temperature: 0.7, maxTokens: 1500 },
    { name: "Precise", temperature: 0.3, maxTokens: 1000 },
    { name: "Code", temperature: 0.1, maxTokens: 2500 },
  ]);

  const handleTemperatureChange = (temperature: number) => {
    onParametersChange({ ...parameters, temperature });
  };

  const handleMaxTokensChange = (maxTokens: number) => {
    onParametersChange({ ...parameters, maxTokens });
  };

  const applyPreset = (preset: { temperature: number; maxTokens: number }) => {
    onParametersChange(preset);
  };

  const resetToDefaults = () => {
    onParametersChange({ temperature: 0.7, maxTokens: 1500 });
  };

  return (
    <div className="bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
          Parameters
        </h2>
        <button
          onClick={resetToDefaults}
          className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
        >
          Reset to defaults
        </button>
      </div>

      <div className="space-y-6">
        <Slider
          label="Temperature"
          value={parameters.temperature}
          min={0}
          max={1}
          step={0.1}
          onChange={handleTemperatureChange}
          description="Controls randomness. Higher values make output more creative and unpredictable."
        />

        <Slider
          label="Max Tokens"
          value={parameters.maxTokens}
          min={1}
          max={4000}
          step={50}
          onChange={handleMaxTokensChange}
          description="Maximum number of tokens to generate in the response."
          unit="tokens"
        />
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-medium text-secondary-900 dark:text-secondary-100 mb-4">
          Quick Presets
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className="px-3 py-2 text-sm border border-secondary-300 dark:border-secondary-600 rounded-md text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-secondary-50 dark:bg-secondary-700 rounded-lg">
        <h4 className="text-sm font-medium text-secondary-900 dark:text-secondary-100 mb-2">
          Current Settings
        </h4>
        <div className="space-y-1 text-sm text-secondary-600 dark:text-secondary-400">
          <div className="flex justify-between">
            <span>Temperature:</span>
            <span className="font-mono">
              {parameters.temperature.toFixed(1)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Max Tokens:</span>
            <span className="font-mono">
              {parameters.maxTokens.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 rounded-lg">
        <div className="flex items-start">
          <svg
            className="w-4 h-4 text-warning-600 dark:text-warning-400 mt-0.5 mr-2 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="text-sm text-warning-800 dark:text-warning-200 font-medium">
              Parameter Guidelines
            </p>
            <ul className="text-xs text-warning-700 dark:text-warning-300 mt-1 space-y-1">
              <li>• Higher temperature = more creative but less consistent</li>
              <li>• More tokens = longer responses but higher cost</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
