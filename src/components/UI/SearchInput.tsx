// components/SearchInput.tsx
"use client"
import React, { useEffect, useState } from "react"
import { useDebounced } from "@/redux/hook"

interface SearchInputProps {
  value: string
  onChange: (v: string) => void
  placeholder: string
  onDebounce?: (debounced: string) => void
}

export default function SearchInput({
  value,
  onChange,
  placeholder,
  onDebounce,
}: SearchInputProps) {
  const [isTyping, setIsTyping] = useState(false)
  const debouncedValue = useDebounced({ searchQuery: value, delay: 500 })

  // fire parent callback once debounced
  useEffect(() => {
    onDebounce?.(debouncedValue)
  }, [debouncedValue, onDebounce])

  // show pulse while typing
  useEffect(() => {
    if (!value) {
      setIsTyping(false)
      return
    }
    setIsTyping(true)
    const t = setTimeout(() => setIsTyping(false), 500)
    return () => clearTimeout(t)
  }, [value])

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-700
                   focus:outline-none focus:border-blue-500 focus:shadow-outline
                   transition duration-300 ease-in-out"
      />
      {isTyping && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        </div>
      )}
    </div>
  )
}
