import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuAsterisk } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineSubject } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

const ContactFormAndMap = () => {
  return (
    <div className="w-full my-32">
      <div className="w-full h-[50rem] md:h-[25rem] flex flex-col md:flex-row items-center">
        <div className="bg-[#202441] w-full md:w-[50%] h-full flex items-center justify-center">
          <div className="z-20 w-full md:w-[80%] lg:w-[50%] rounded-lg h-[36rem] bg-[#f7f7f7] px-8 py-8 shadow-md ">
            <h3 className="text-2xl font-semibold">Leave us a message</h3>
            <p className="text-sm leading-relaxed mt-2">
              Have any inquiries, kindly drop a message and we will respond
            </p>

            <form className="flex flex-col gap-4 mt-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm flex items-center">
                  <span>Your Name</span>
                  <LuAsterisk color="#D22B2B" />
                </label>
                <div className="border flex items-center border-solid border-[#d9d9d980] h-10 px-2 py-2 gap-2 rounded-md outline-none">
                  <FaRegUser color="#979797" />
                  <input
                    required
                    className="bg-[#f7f7f7] text-sm border-none outline-none h-8 w-full"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm flex items-center">
                  <span>Your Email</span>
                  <LuAsterisk color="#D22B2B" />
                </label>
                <div className="border flex items-center border-solid border-[#d9d9d980] h-10 px-2 py-2 gap-2 rounded-md outline-none">
                  <MdOutlineEmail color="#979797" />
                  <input
                    required
                    className="bg-[#f7f7f7] text-sm border-none outline-none h-8 w-full"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm flex items-center">
                  <span>Subject</span>
                </label>
                <div className="border flex items-center border-solid border-[#d9d9d980] h-10 px-2 py-2 gap-2 rounded-md outline-none">
                  <MdOutlineSubject color="#979797" />
                  <input
                    required
                    className="bg-[#f7f7f7] text-sm border-none outline-none h-8 w-full"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm flex items-center">
                  <span>Your Message</span>
                  <LuAsterisk color="#D22B2B" />
                </label>
                <div className="border flex items-center border-solid border-[#d9d9d980] h-24 px-2 py-2 gap-2 rounded-md outline-none">
                  <FaRegMessage color="#979797" />
                  <textarea
                    style={{
                      resize: "none",
                    }}
                    required
                    className="text-sm border-none outline-none h-[4rem] bg-[#f7f7f7] w-full"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end mt-3">
                <button className="flex items-center gap-3 px-4 py-2 shadow-md bg-[#505ca4] text-[#f7f7f7] rounded-md text-base md:text-lg hover:bg-[#282e52] transition-all duration-100">
                  <FiSend />

                  <span className="text-sm">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-[50%]  h-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47150.72755345543!2d77.51612104731502!3d28.55478110389664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb4e4770e023%3A0x3d9b9e01106cf495!2sDadri%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sng!4v1705046984181!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactFormAndMap;
