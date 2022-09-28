import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MyBtnRedBg from "../../../../UI/myBtn/MyBtnRedBg";

type Inputs = {
  email: string;
};
const FooterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="block bg-gray-600 w-full h-10 border-none rounded-lg pl-4 mb-4 text-slate-50 focus:outline-none lg:h-8 lg:text-xs md:h-6 sm:h-5"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
        })}
      />
      {errors.email && (
        <p className="text-red-500 mb-2"> Is not available Email</p>
      )}
      <button
        className="w-[151px] h-[46px] text-xl rounded-2xl bg-red-500 text-slate-50 border-[2.5px] border-red-500 hover:bg-slate-50 hover:text-red-500 transition-colors lg:w-[120px] lg:h-[40px]
        lg:text-base md:w-[90px] md:h-[34px] md:text-sm  sm:block  sm:w-[80px] sm:h-[28px] sm:text-xs dark:hover:text-red-500 dark:hover:bg-slate-50 vsm:h-[20px]"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FooterForm;
