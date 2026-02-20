import { useForm } from "react-hook-form";
import { HelpdeskLogoPrimary } from "../../assets/icons/Logo";
import { PatternImg } from "../../assets/images/Images";

export default function Login() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-5">
      <div className="flex w-[70rem] max-h-[90vh] bg-white shadow-lg overflow-hidden">
        
        {/* LEFT SIDE: Content */}
        <div className="flex flex-col w-1/2 py-8 px-10 overflow-y-auto">
          
          {/* Tab Selection */}
          <div className="border-b border-gray-300 text-sm flex justify-between pb-3 mb-6">
            <div className="flex gap-5 ">
                <button className="font-semibold text-primary">Login</button>
            <button className="text-gray-500">Signup</button>
            </div>
            
            <HelpdeskLogoPrimary />
          </div>

          {/* LOGIN FORM - Visible */}
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <p className="text-sm text-gray-600">
                Enter to get unlimited access to data & information
              </p>
            </div>

            <form className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <button 
                type="submit"
                className="text-white bg-primary py-3 w-full rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-4"
              >
                Login
              </button>
            </form>
          </div>

          {/* SIGNUP FORM - Hidden */}
          <div className="flex flex-col gap-6 hidden">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Join us!</h1>
              <p className="text-sm text-gray-600">
                Register and get unlimited access to data & information
              </p>
            </div>

            <form className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Username</label>
                <input
                  type="text"
                  placeholder="Enter a username"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className=" font-semibold">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="p-3 border border-primary/50 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <button 
                type="submit"
                className="text-white bg-primary py-3 w-full rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-4"
              >
                Sign Up
              </button>
            </form>
          </div>

        </div>

        {/* RIGHT SIDE: Pattern */}
        <div className="w-1/2 bg-primary/5 flex items-center justify-center">
          <PatternImg />
        </div>
        
      </div>
    </div>
  );
}