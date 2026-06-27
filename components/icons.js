import React from 'react'

export const Icon = ({name, className}) => {
  switch(name){
    case 'bmi-calculator':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'loan-calculator':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'dday-calculator':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M16 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'unit-converter':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 12h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 18h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 8l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'qr-code-generator':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="1.6" />
          <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="1.6" />
          <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="1.6" />
          <rect x="11" y="11" width="2" height="2" fill="currentColor" />
        </svg>
      )
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
  }
}

export default Icon
