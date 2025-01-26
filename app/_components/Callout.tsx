import React from 'react'

type CalloutProps = {
  title: string
  type: 'info' | 'error' | 'success'
  description: string
}

const Callout = ({ type = 'info', title, description }: CalloutProps) => {
  // Define Tailwind classes based on the `type` prop
  const calloutStyles = {
    info: 'bg-blue-50 border-l-4 border-blue-500 text-blue-900',
    error: 'bg-red-50 border-1 border-red-500 text-red-900',
    success: 'bg-green-50 border-l-4 border-green-500 text-green-900',
  }

  return (
    <div
      className={`absolute top-[10%] left-1/2 transform -translate-x-1/2 rounded-lg py-1 px-5 my-4 shadow-md animate-fadeIn ${calloutStyles[type]}`}
    >
      <div className="flex justify-between items-center text-medium font-semibold">
        <strong>{title}</strong>
      </div>
      <div className="text-base mt-2">{description}</div>
    </div>
  )
}

export default Callout
