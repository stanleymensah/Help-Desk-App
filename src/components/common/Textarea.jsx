export default function Textarea({
  label,
  name,
  placeholder,
  register,
  error,
  required = false,
  validation = {},
  rows = 4,
}) {
  return (
    <>
      <label>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        {...register(name, validation)}
        placeholder={placeholder}
        rows={rows}
        className="border focus:outline-none focus:border-primary w-full p-2 h-40 line-clamp-1"
      ></textarea>

      {error && <span className="text-red-500">{error.message}</span>}
    </>
  );
}
