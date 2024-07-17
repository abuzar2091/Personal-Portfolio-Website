"use client";
import { useState } from "react";
import { WavyBackground } from "./ui/wavy-background";
import axios from "axios";
import { formValidationSchema } from "@/app/form-validation/formValidationSchema";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: "",
    phone: "",
    isChecked: false,
  });
  const [msg,setMsg]=useState("");
  const [submitform,setSubmitForm]=useState(false);
  const [errors, setErrors] = useState({});
  const handleSubmit = async(e) => {
    e.preventDefault();
      try {
      setSubmitForm(true);
      formValidationSchema.parse(formData);
      console.log(formData);
      await axios.post("/api/contactme",formData)
      .then((res)=>{
        console.log("form successfully submitted");
        setMsg(res.data.message);
        setErrors({});
        setTimeout(() => {
          setMsg("");
         }, 5000);
      })
      .catch((err)=>{
        console.log("some error occcur ",err);
      })
      setSubmitForm(false);
      setFormData({
        name: "",
        email: "",
        enquiry: "",
        phone: "",
        isChecked: false,
      });
} catch (error) {
 setSubmitForm(false);
  if (error.errors) {
    const newErrors = {};
    error.errors.forEach((err) => {
      newErrors[err.path[0]] = err.message;
    });
    setErrors(newErrors);
  } else {
    console.log("Some error occur");
  }
  
}
  };
  return (
    <div id="contact-me" >
      <div className="relative h-[54rem] overflow-hidden flex flex-col items-center justify-center ">
        <WavyBackground className="w-full  mx-auto flex flex-col items-center justify-center sm:mb-48 sm:pb-24">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center my-4">
            Contact me
          </h2>
          <p className="text-base md:text-xl text-white text-center mb-4">
            Contact me for work/general Enquiries
          </p>
          <div className="sm:min-w-[500px] text-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  className="border-2 border-black text-black rounded-md py-2 px-8"
                  placeholder="Enter Your Name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
                {errors.name && <p className="text-red-400">{errors.name}</p>}
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  className="border-2 border-black text-black rounded-md px-8 py-2"
                  placeholder="Enter Your email"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
                {errors.email && <p className="text-red-400">{errors.email}</p>}
                <p className="text-sm ">We&apos;ll never share your email and phone with anyone else</p>
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="enquiry">Enquiry</label>
                <input
                  type="text"
                  name="enquiry"
                  id="enquiry"
                  value={formData.enquiry}
                  className="border-2 border-black text-black rounded-md px-8 py-2 "
                  placeholder="Enter Your Query"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
                {errors.enquiry && <p className="text-red-400"> {errors.enquiry}</p>}
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  className="border-2 border-black  text-black rounded-md px-8 py-2  pl-12"
                  placeholder="Enter Your Phone Number"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
                {errors.phone && <p className="text-red-400">{errors.phone}</p>}
              </div>
              <div className="flex justify-center items-center mt-4">
                <input
                  type="checkbox"
                  className="h-4"
                  name="isChecked"
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      [e.target.name]:
                        !prevFormData[e.target.name],
                    }))
                  }
                />
                <label className="text-base md:text-md text-white text-center ml-2">
                  I want you to work on a project with me
                </label>
              </div>
              <button className=" mt-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg py-2 px-6 hover:opacity-70 ">
               { !submitform?"Submit":"Submitting..."}
              </button>
            </form>
            <p className="text-md text-gradient-to-r from-teal-400 to-cyan-500">{msg}</p>
          </div>
        </WavyBackground>
      </div>
    </div>
  );
}

export default ContactMe;
