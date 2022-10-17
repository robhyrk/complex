import React, { useEffect } from "react"

const FlashMessages = ({ messages }) => {
  return (
    <div className="floating-alerts">
      {messages.map((msg, index) => {
        return (
          <div key={index} className="alert alert-success floating-alert text-center shadow-sm">
            {msg}
          </div>
        )
      })}
    </div>
  )
}

export default FlashMessages
