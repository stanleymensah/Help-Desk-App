export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  required = false,
  validation = {},
}) {
  return (
    <div className="flex flex-col">
      <label className="text-xs mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        {...register(name, validation)}
        type={type}
        placeholder={placeholder}
        className="border p-2 mb-4 focus:outline-none focus:border-primary"
      />
      {error && (
        <span className="text-red-500 text-xs -mt-3 mb-4">{error.message}</span>
      )}
    </div>
  );
}
