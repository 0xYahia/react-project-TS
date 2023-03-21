import { useState, useRef } from "react";
import { object, string } from "yup";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const formSchema = object({
    email: string().email().required(),
    password: string().required(),
  });

  const handdleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const result = await formSchema.validate(
        { email, password },
        { abortEarly: false }
      );
    } catch (error: any) {
      const errors: any = {};
      error.inner.forEach((error: any) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
      emailRef.current?.focus();
    }
  };

  return (
    <form onSubmit={handdleSubmit}>
      <div className="form-control w-full max-w-xs">
        <label htmlFor="email" className="l abel">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          ref={emailRef}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            const newErros = { ...errors };
            delete newErros.email;
            setErrors(newErros);
          }}
          id="email"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {errors?.email && <span className="text-red-700">{errors.email}</span>}
        <label htmlFor="password" className="l abel mt-4">
          <span className="label-text">Password</span>
        </label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            const newErrors = { ...errors };
            delete newErrors.password;
            setErrors(newErrors);
          }}
          id="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {errors?.password && (
          <span className="text-red-700">{errors.password}</span>
        )}
      </div>
      <button type="submit" className="btn btn-primary btn-sm mt-4">
        Login
      </button>
    </form>
  );
};

export default Login;
