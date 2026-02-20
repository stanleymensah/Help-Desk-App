import { useForm } from "react-hook-form";

export default function RegisterForm() {

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
    console.log("Signup Data: ",data);
  };

  return (
    <>
    <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Join us!</h1>
              <p className="text-xs text-gray-600">
                Register and get unlimited access to data & information
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 text-xs"
            >
              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Username</label>
                <input
                  {...register("username", {
                    required: "Username is required!",
                    minLength: {
                      value: 3,
                      message: "Nig, your name ain't 2 letters",
                    },
                  })}
                  type="text"
                  placeholder="Enter a username"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
                {errors.username && (
                  <span className="text-red-500">
                    {errors.username.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Email</label>
                <input
                  {...register("email", {
                    required: "Email is required!",
                    minLength: {
                      value: 8,
                      message: "Nig, this email too short!",
                    },
                  })}
                  type="email"
                  placeholder="Enter your email address"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Password</label>
                <input
                  {...register("password", {
                    required: "Password is required!",
                    minLength: {
                      value: 8,
                      message: "Too short homie, giime more than 8",
                    },
                  })}
                  type="password"
                  placeholder="Enter your password"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Confirm Password</label>
                <input
                  {...register("confirmPassword", {
                    required: "Confirm Password!",
                    validate: (value, formValues) => {
                      return (
                        value === formValues.password ||
                        "Passwords do not match!"
                      );
                    },
                  })}
                  type="password"
                  placeholder="Confirm your password"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="text-white bg-primary py-3 w-full rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-4"
              >
                Sign Up
              </button>
            </form>
    </>
  )
}
