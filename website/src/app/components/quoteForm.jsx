// frontend: /components/QuoteForm.jsx
'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Submitted successfully!');
      } else {
        setStatus('Something went wrong.');
      }
    } catch (err) {
      setStatus('Error submitting form.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Request a Glass Service Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select name="serviceType" className="select select-bordered w-full" required onChange={handleChange}>
          <option disabled selected>--Select--</option>
          <option>Auto Glass</option>
          <option>Residential Glass</option>
          <option>Commercial Glass</option>
        </select>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="firstName" onChange={handleChange} type="text" placeholder="First Name*" className="input input-bordered w-full" required />
          <input name="lastName" onChange={handleChange} type="text" placeholder="Last Name*" className="input input-bordered w-full" required />
        </div>

        <input name="companyName" onChange={handleChange} type="text" placeholder="Company Name" className="input input-bordered w-full" />
        <input name="email" onChange={handleChange} type="email" placeholder="Email*" className="input input-bordered w-full" required />
        <input name="primaryPhone" onChange={handleChange} type="tel" placeholder="Primary Phone*" className="input input-bordered w-full" required />
        <input name="secondaryPhone" onChange={handleChange} type="tel" placeholder="Secondary Phone" className="input input-bordered w-full" />
        <input name="address" onChange={handleChange} type="text" placeholder="Street Address*" className="input input-bordered w-full" required />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="city" onChange={handleChange} type="text" placeholder="City" className="input input-bordered w-full" />
          <input name="zip" onChange={handleChange} type="text" placeholder="Zip Code" className="input input-bordered w-full" />
        </div>

        <select name="contactMethod" onChange={handleChange} className="select select-bordered w-full" required>
          <option>Primary Phone</option>
          <option>Secondary Phone</option>
          <option>Email</option>
        </select>

        <textarea name="description" onChange={handleChange} placeholder="Describe your needs*" className="textarea textarea-bordered w-full" required />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="carYear" onChange={handleChange} type="text" placeholder="Car Year" className="input input-bordered w-full" />
          <input name="carMake" onChange={handleChange} type="text" placeholder="Car Make" className="input input-bordered w-full" />
          <input name="carModel" onChange={handleChange} type="text" placeholder="Car Model" className="input input-bordered w-full" />
          <input name="carBody" onChange={handleChange} type="text" placeholder="Car Body Style" className="input input-bordered w-full" />
        </div>

        <input name="vin" onChange={handleChange} type="text" placeholder="Car VIN Number" className="input input-bordered w-full" />
        <p className="text-sm text-warning">
          <strong>ATTENTION:</strong> For 2016+ windshields and backglass, VIN is required.
        </p>

        <button type="submit" className="btn btn-primary w-full">Submit</button>
        {status && <p className="text-sm pt-2 text-info">{status}</p>}
      </form>
    </div>
  );
}
