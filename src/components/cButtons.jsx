import React from 'react'

function CButtons(props) {
    const {text, onClick, value} = props
  return (
    <div>
      <button
        type="button"
        className="text-grey p-2 rounded-lg hover:bg-slate-200 shadow-lg"
        onClick={onClick}
        value={text}
      >
        {text}
      </button>
    </div>
  )
}

export default CButtons
