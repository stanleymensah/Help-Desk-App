import { PrimaryButton, SecondaryButton } from "../../components/common/Button";
import { useForm } from "react-hook-form";
import Input from "../../components/common/InputField";
import Textarea from "../../components/common/Textarea";
import Select from "../../components/common/Select";

export default function CreateTicketForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const priorityOptions = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
    { value: "critical", label: "Critical" },
  ];

  const onSubmit = (data) => {
    console.log("Created Form: ", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="flex gap-2 w-full">
          <div className="flex flex-col gap-2 w-1/2">
            <Input
              label="Ticket Title"
              name="ticketTitle"
              type="text"
              placeholder="Title"
              register={register}
              error={errors.ticketTitle}
              required
              validation={{
                required: "Title is required",
                minLength: {
                  value: 5,
                  message: "Should be more than 5 characters",
                },
              }}
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <Input
              label="User Email"
              name="userEmail"
              type="text"
              placeholder="Email"
              register={register}
              error={errors.ticketTitle}
              required
              validation={{
                required: "Email is required",
                minLength: {
                  value: 5,
                  message: "Should be more than 5 characters",
                },
              }}
            />
          </div>
        </div>

        <div className="my-2">
          <div className="flex flex-col gap-2 w-1/2">
            <Select
              label="Ticket Priority"
              name="ticketPriority"
              options={priorityOptions}
              register={register}
              error={errors.ticketPriority}
              required
              placeholder="Select priority level"
              validation={{
                required: "Select a Priority",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Textarea
            label="Ticket description"
            name="ticketDescription"
            placeholder="Description"
            register={register}
            error={errors.ticketDescription}
            required
            validation={{
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Must not be less than 10 characters",
              },
            }}
          />
        </div>

        <div className="buttons flex justify-end p-4 gap-3">
          <SecondaryButton name="Cancel" />
          <PrimaryButton name="Create" type="submit" />
        </div>
      </form>
    </>
  );
}
