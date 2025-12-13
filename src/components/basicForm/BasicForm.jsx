import { useForm } from "react-hook-form";
import "./BasicForm.scss"

export default function BasicForm() {
    const {register, reset, handleSubmit, formState: {isSubmitting, errors}} = useForm();
     const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form animate-on-scroll">

      <div className="field">
        <label>Name <span className="mandatory-field">*</span></label>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems:'flex-start', width: '100%'}}>
                    <input
          type="text"
          className="input"
          placeholder="Enter your name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
      </div>

      <div className="field">
        <label>Phone Number <span className="mandatory-field">*</span></label>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem',  alignItems:'flex-start', width: '100%'}}>
                    <input
          type="tel"
          placeholder="Enter phone number"
                   className="input"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit number",
            },
          })}
        />
        {errors.phone && (
          <span className="error">{errors.phone.message}</span>
        )}
        </div>
      </div>

      <div className="field">
        <label>Message</label>
        <textarea
          placeholder="Type your message..."
          className="textbox"
          rows="4"
          {...register("message")}
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="submit-btn">
        Submit
      </button>
    </form>
  );

}