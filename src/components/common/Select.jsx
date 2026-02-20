export default function Select({
  label,
  name,
  options,
  register,
  error,
  required = false,
  validation = {},
  placeholder = "Select an option",
}) {
  return (
    <>
      <label>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(name, validation)}
        className="border p-2 focus:outline-none focus:border-primary"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500">{error.message}</span>}
    </>
  );
}
