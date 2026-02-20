import { useForm } from "react-hook-form";

export default function LoginForm() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const onSubmit = (data) => {
    console.log("Login Data: ", data);
  };

  return (
    <>
     <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <p className="text-xs text-gray-600">
                Enter to get unlimited access to data & information
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Email</label>
                <input
                {...register("logEmail", {required: "Email is required"})}
                  type="email"
                  placeholder="Enter your email address"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
                {errors.logEmail && <span className="text-red-500">{errors.logEmail?.message}</span> }
              </div>

              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Password</label>
                <input
                {...register("logPassword", {required: "Password is required!"})}
                  type="password"
                  placeholder="Enter your password"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
                {errors.logPassword && <span className="text-red-500">{errors.logPassword?.message}</span> }
              </div>

              <button
                type="submit"
                className="text-white bg-primary py-3 w-full rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-4"
              >
                Login
              </button>
            </form>
    </>
  )
}
