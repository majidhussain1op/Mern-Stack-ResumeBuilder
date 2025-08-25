// Templates.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Templates() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/get-templates"
        );
        if (response.data.success) {
          setTemplates(response.data.data);
        } else {
          setError("Failed to fetch templates");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  const handleClick = (id) => {
    navigate(`/template/${id}`);
  };

  const Heading = () => (
    <h2 className="text-2xl font-bold mb-6">Choose a Resume Template</h2>
  );

  if (loading)
    return (
      <div>
        <Heading />
        <div className="flex justify-center">
          <div className="animate-pulse text-lg">Loading templates...</div>
        </div>
      </div>
    );

  if (error)
    return (
      <div>
        <Heading />
        <div className="text-red-500">{error}</div>
      </div>
    );

  return (
    <div>
      <Heading />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => handleClick(template.id)}
          >
            <img
              src={template.imageUrl}
              alt={template.name}
              className="w-full h-64 object-cover mb-4 rounded"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x400?text=Template+Image";
              }}
            />
            <h3 className="text-xl font-semibold">{template.name}</h3>
            <p className="text-gray-600 text-sm">{template.description}</p>
            <div className="mt-2 flex gap-2">
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                {template.category}
              </span>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                {template.colorScheme}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Templates;
