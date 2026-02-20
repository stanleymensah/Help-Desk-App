import { PrimaryButton, SecondaryButton } from "../../components/common/Button";
import { useForm } from "react-hook-form";



export default function CreateTicketForm() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Created Form: ", data);
  };
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
              <div className="flex gap-2 w-full">
                <div className="flex flex-col gap-2 w-1/2">
                  <label>Ticket title</label>
                  <input
                    {...register("ticketTitle", {
                      required: "Title is required",
                      minLength: {
                        value: 5,
                        message: "Should be more than 5 characters",
                      },
                    })}
                    type="text"
                    placeholder="Title"
                    className="border p-2 mb-4 focus:outline-none focus:border-primary"
                  />
                  {errors.ticketTitle && (
                    <span className="text-red-500">
                      {errors.ticketTitle?.message}
                    </span>
                  )}
                </div>
    
                <div className="flex flex-col gap-2 w-1/2">
                  <label>Ticket priority</label>
                  <select
                    name="priority"
                    className="border p-2 focus:outline-none focus:border-primary"
                    {...register("ticketPriority", {
                      required: "Select a priority",
                    })}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
    
                {errors.ticketPriority && (
                  <span className="text-red-500">
                    {errors.ticketPriority?.message}
                  </span>
                )}
              </div>
    
              <div className="flex flex-col gap-2">
                <label>Ticket description</label>
                <textarea
                  {...register("ticketDescription", {
                    required: "Description required!",
                    minLength: {
                      value: 10,
                      message: "Must not be less than 10 characters",
                    },
                  })}
                  placeholder="Description"
                  className="border focus:outline-none focus:border-primary w-full p-2 h-40 line-clamp-1"
                ></textarea>
                {errors.ticketDescription && (
                  <span className="text-red-500">
                    {errors.ticketDescription?.message}
                  </span>
                )}
              </div>
    
              <div className="buttons flex justify-end p-4 gap-3">
                <SecondaryButton name="Cancel" />
                <PrimaryButton name="Create" type="submit" />
              </div>
            </form>
    </>
  )
}
