exports.getTemplates = (req, res) => {
  const templates = [
    {
      id: "atlantic",
      name: "Atlantic Blue",
      description: "Multi-column resume with sidebar left",
      imageUrl:
        "https://prod.flowcvassets.com/resume-templates/wk78myowij2vvh1gy8l-s/480.webp",
      category: "modern",
      colorScheme: "blue",
    },
    {
      id: "executive",
      name: "Executive",
      description: "Serif font - Black and white resume template",
      imageUrl:
        "https://prod.flowcvassets.com/resume-templates/gs_qryrzly3kldmqhxqsb/480.webp",
      category: "classic",
      colorScheme: "monochrome",
    },
  ];
  //actial code to fetch templates would go here
  res.json({
    success: true,
    count: templates.length,
    data: templates,
    message: "Templates fetched successfully",
  });
};
