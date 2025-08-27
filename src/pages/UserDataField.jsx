import React, { useState, useEffect } from 'react';

const UserDataField = ({ onChange }) => {
  const defaultForm = {
    name: '',
    email: '',
    phone: '',
    summary: '',
    education: [{ degree: '', institution: '', year: '' }],
    experience: [{ jobTitle: '', company: '', duration: '', description: '' }],
    skills: '',
  };

  const [formData, setFormData] = useState(defaultForm);

  // ✅ Use useEffect to emit every time formData changes
  useEffect(() => {
    if (onChange) {
      onChange(formData);
    }
  }, [formData, onChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (section, index, field, value) => {
    const updated = [...formData[section]];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, [section]: updated }));
  };

  const addField = (section, emptyObj) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], emptyObj],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Enter Your Resume Info</h2>

      <form className="space-y-6">
        {/* Basic Info */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={formData.summary}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="3"
        />

        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          {formData.education.map((edu, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleArrayChange('education', idx, 'degree', e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) => handleArrayChange('education', idx, 'institution', e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Year"
                value={edu.year}
                onChange={(e) => handleArrayChange('education', idx, 'year', e.target.value)}
                className="p-2 border rounded"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addField('education', { degree: '', institution: '', year: '' })
            }
            className="text-blue-600 hover:underline text-sm"
          >
            + Add more education
          </button>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          {formData.experience.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
              <input
                type="text"
                placeholder="Job Title"
                value={exp.jobTitle}
                onChange={(e) => handleArrayChange('experience', idx, 'jobTitle', e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleArrayChange('experience', idx, 'company', e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Duration"
                value={exp.duration}
                onChange={(e) => handleArrayChange('experience', idx, 'duration', e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Description"
                value={exp.description}
                onChange={(e) =>
                  handleArrayChange('experience', idx, 'description', e.target.value)
                }
                className="p-2 border rounded"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addField('experience', {
                jobTitle: '',
                company: '',
                duration: '',
                description: '',
              })
            }
            className="text-blue-600 hover:underline text-sm"
          >
            + Add more experience
          </button>
        </div>

        {/* Skills */}
        <textarea
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="2"
        />
      </form>
    </div>
  );
};

export default UserDataField;