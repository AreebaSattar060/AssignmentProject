function Fields(props) {
  const { label, type, placeholder, onChange, error,value } = props;
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={label} className="mb-2 font-semibold">
          {label}
        </label>
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`border p-2 rounded-lg ${
            error ? "border-red-400" : "border-gray-300"
          }`}
        />
        <p className="text-red-500">{error}</p>
      </div>
    </>
  );
}
export default Fields;
