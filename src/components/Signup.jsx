import React, { useRef } from "react";
import { Button, InputField } from "./index";
import { useForm } from "react-hook-form";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // User Registration Function
  const createUser = async (data) => {
    const user = await authService.register(
      data.email,
      data.password,
      data.fullname,
      data.username,
      data.avatar,
      data.converImage
    );
    if (user) {
      navigate("/auth/login");
    } else {
      alert("Error Creating User");
    }
    reset();
  };

return (
    <div>
        <form onSubmit={handleSubmit(createUser)} className="max-w-md mx-auto">
            <div className="mb-4">
                <InputField
                    label={`Full Name`}
                    placeholder={`Enter Full Name`}
                    ref={useRef()}
                    className="w-full"
                    {...register("fullname", { required: "This field is required" })}
                />
                {errors.fullname && <p>{errors.fullname.message}</p>}
            </div>
            <div className="mb-4">
                <InputField
                    label={`Username`}
                    placeholder={`Enter Username`}
                    ref={useRef()}
                    className="w-full"
                    {...register("username", { required: "This field is required" })}
                />
                {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className="mb-4">
                <InputField
                    label={`Email`}
                    placeholder={`Enter Email`}
                    type={`email`}
                    ref={useRef()}
                    className="w-full"
                    {...register("email", { required: "This field is required" })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="mb-4">
                <InputField
                    label={`Password`}
                    placeholder={`Enter Password`}
                    type={`password`}
                    ref={useRef()}
                    className="w-full"
                    {...register("password", { required: "This field is required" })}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="mb-4">
                <InputField
                    type={`file`}
                    label={`Avatar`}
                    ref={useRef()}
                    className="w-full"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("avatar", { required: "Avatar is required" })}
                />
                {errors.avatar && <p>{errors.avatar.message}</p>}
            </div>
            <div className="mb-4">
                <InputField
                    type={`file`}
                    label={`Cover Image`}
                    ref={useRef()}
                    className="w-full"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("converImage")}
                />
            </div>
            <Button type={`submit`} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
                Sign Up
            </Button>
        </form>
    </div>
);
};

export default Signup;
