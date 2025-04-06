'use client'
import React, { useState } from "react";

const ShippingAddressForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    shippingNote: "",
    city: "",
    postalCode: "",
    country: "",
    saveInfo: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, saveInfo: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="justify-center items-stretch border border-[color:var(--Button-color,#E8AF52)] shadow-[0px_1px_0px_0px_rgba(255,255,255,0.08)_inset] bg-[rgba(255,255,255,0.02)] flex w-full flex-col overflow-hidden text-sm text-[rgba(97,97,97,1)] font-light mx-auto px-[26px] py-[25px] rounded-2xl border-solid max-md:max-w-full max-md:mt-[22px] max-md:px-5">
      <div className="text-white text-xl font-medium leading-none tracking-[-0.9px]">
        Shipping Address
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-stretch gap-5 leading-[26px] flex-wrap mt-[19px] max-md:max-w-full">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-[rgba(255,255,255,0.02)] border grow shrink-0 basis-0 w-fit px-4 py-[7px] rounded-lg border-[rgba(137,137,137,1)] border-solid max-md:pr-5 text-white"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Second Name"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-[rgba(255,255,255,0.02)] border grow shrink-0 basis-0 w-fit px-[13px] py-[7px] rounded-lg border-[rgba(137,137,137,1)] border-solid max-md:pr-5 text-white"
            required
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address and number"
          value={formData.address}
          onChange={handleChange}
          className="bg-[rgba(255,255,255,0.02)] border leading-[26px] mt-3 px-[13px] py-[7px] rounded-lg border-[rgba(137,137,137,1)] border-solid max-md:max-w-full max-md:pr-5 w-full text-white"
          required
        />
        <textarea
          name="shippingNote"
          placeholder="Shipping note (optional)"
          value={formData.shippingNote}
          onChange={handleChange}
          className="bg-[rgba(255,255,255,0.02)] border leading-loose mt-3 pt-[7px] pb-[19px] px-3.5 rounded-lg border-[rgba(137,137,137,1)] border-solid max-md:max-w-full max-md:pr-5 w-full text-white"
        />
        <div className="flex items-stretch gap-[17px] leading-[26px] flex-wrap mt-3 max-md:max-w-full">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="bg-[rgba(255,255,255,0.02)] border whitespace-nowrap grow shrink-0 basis-0 w-fit px-7 py-[7px] rounded-lg border-[rgba(137,137,137,1)] border-solid max-md:px-5 text-white"
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            className="bg-[rgba(255,255,255,0.02)] border grow shrink-0 basis-0 w-fit px-4 py-[7px] rounded-lg border-[rgba(137,137,137,1)] border-solid max-md:pr-5 text-white"
            required
          />
        </div>
        <select
          name="country"
          value={formData.country}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, country: e.target.value }))
          }
          className="bg-[rgba(255,255,255,0.02)] border whitespace-nowrap mt-3 px-[26px] py-3 rounded-lg border-[rgba(137,137,137,1)] border-solid max-md:max-w-full max-md:px-5 w-full text-white"
          required
        >
          <option value="" disabled selected className="text-gray-400">
            Country/Region
          </option>
          <option value="india" className="text-black">
            India
          </option>
          <option value="usa" className="text-black">
            USA
          </option>
          <option value="uk" className="text-black">
            UK
          </option>
          <option value="canada" className="text-black">
            Canada
          </option>
          <option value="australia" className="text-black">
            Australia
          </option>
        </select>
        <div className="flex items-stretch gap-1.5 text-white leading-none ml-[18px] mt-3 max-md:ml-2.5">
          <input
            type="checkbox"
            id="saveInfo"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleCheckboxChange}
            className="bg-white w-4 shrink-0 h-4 border-white border-solid border-2"
          />
          <label
            htmlFor="saveInfo"
            className="basis-auto grow shrink cursor-pointer"
          >
            Save this informations for a future fast checkout
          </label>
        </div>
        <button
          type="submit"
          className="rounded border border-[color:var(--text-grd,#FFF)] bg-[rgba(255,255,255,0.02)] gap-2.5 text-base text-white font-normal mt-[25px] px-12 py-4 border-solid max-md:px-5 w-full hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default ShippingAddressForm;