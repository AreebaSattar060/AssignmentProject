function Button(props) {
    const { text, onClick } = props;
    return (
      <button
        type="button"
        className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  
  export default Button;
  