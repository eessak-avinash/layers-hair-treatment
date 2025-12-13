import { useForm } from "react-hook-form";
import "./BasicForm.scss";

export default function BasicForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form animate-on-scroll">

      <h3 className="form-title">Request a Call From Our Experts</h3>
      <p className="form-subtitle">
        Talk to our hair treatment expert today
      </p>

      <div className="field">
        <label>
          Name <span className="mandatory-field">*</span>
        </label>
        <input
          type="text"
          className="input"
          placeholder="Your full name"
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

      <div className="field">
        <label>
          Phone Number <span className="mandatory-field">*</span>
        </label>
        <input
          type="tel"
          className="input"
          placeholder="10-digit mobile number"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit number",
            },
          })}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>

      <div className="field">
        <label>Message</label>
        <textarea
          className="textbox"
          rows="3"
          placeholder="Your concern (optional)"
          {...register("message")}
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="submit-btn">
        {isSubmitting ? "Submitting..." : "Request a Callback"}
      </button>

      <p className="form-trust">🔒 Your information is 100% confidential</p>
    </form>
  );
}
