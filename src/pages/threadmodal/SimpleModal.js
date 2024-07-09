import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

function SimpleModal({ open, onClose }) {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [skills, setSkills] = useState([]);
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, { id: questions.length, type: "text", question: "", options: [] }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = questions.map((q, i) =>
      i === index ? { ...q, [field]: value } : q
    );
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = questions.map((q, i) =>
      i === questionIndex
        ? {
            ...q,
            options: q.options.map((o, oi) =>
              oi === optionIndex ? value : o
            ),
          }
        : q
    );
    setQuestions(newQuestions);
  };

  const addOption = (index) => {
    const newQuestions = questions.map((q, i) =>
      i === index
        ? { ...q, options: [...q.options, ""] }
        : q
    );
    setQuestions(newQuestions);
  };

  const deleteOption = (questionIndex, optionIndex) => {
    const newQuestions = questions.map((q, i) =>
      i === questionIndex
        ? {
            ...q,
            options: q.options.filter((_, oi) => oi !== optionIndex),
          }
        : q
    );
    setQuestions(newQuestions);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((q, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <Modal open={open} onClose={onClose} sx={{ display: "grid", placeItems: "center" }}>
      <Slide direction="down" in={open} timeout={500}>
        <MKBox
          position="relative"
          width="500px"
          display="flex"
          flexDirection="column"
          borderRadius="xl"
          bgColor="white"
          shadow="xl"
          sx={{ maxHeight: "90vh", overflow: "auto" }} // Enable scrolling
        >
          <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
            <MKTypography variant="h5">Create Project</MKTypography>
            <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={onClose} />
          </MKBox>
          <Divider sx={{ my: 0 }} />
          <MKBox p={2}>
            <MKTypography variant="h6" component="div" gutterBottom>
              Project Details
            </MKTypography>
            <TextField
              label="Project Title"
              fullWidth
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Project Description"
              fullWidth
              multiline
              rows={4}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              sx={{ mb: 2 }}
            />
            <MKTypography variant="h6" component="div" gutterBottom>
              Skills Required
            </MKTypography>
            <FormControl fullWidth sx={{ mb: 2, minWidth: 300 }}>
              <InputLabel id="skills-label">Skills</InputLabel>
              <Select
                labelId="skills-label"
                id="skills-select"
                multiple
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                renderValue={(selected) => selected.join(", ")}
                label="Skills"
                sx={{ minWidth: 300, height: 46 }} // Adjust the height and width here
              >
                {["Skill 1", "Skill 2", "Skill 3", "Skill 4"].map((skill) => (
                  <MenuItem key={skill} value={skill} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox checked={skills.indexOf(skill) > -1} />
                    <MKTypography variant="body2" color="text.primary">{skill}</MKTypography>
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Select required skills</FormHelperText>
            </FormControl>
            <MKTypography variant="h6" component="div" gutterBottom>
              Questions
            </MKTypography>
            {questions.map((question, index) => (
              <MKBox key={question.id} mb={2}>
                <MKBox display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                  <TextField
                    label={`Question ${index + 1}`}
                    fullWidth
                    value={question.question}
                    onChange={(e) =>
                      handleQuestionChange(index, "question", e.target.value)
                    }
                    sx={{ mb: 1 }}
                  />
                  <IconButton
                    onClick={() => deleteQuestion(index)}
                    aria-label="delete question"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </MKBox>
                <FormControl fullWidth sx={{ mb: 1, minWidth: 300 }}>
                  <InputLabel id={`answer-type-label-${index}`}>Answer Type</InputLabel>
                  <Select
                    labelId={`answer-type-label-${index}`}
                    id={`answer-type-select-${index}`}
                    value={question.type}
                    onChange={(e) => handleQuestionChange(index, "type", e.target.value)}
                    label="Answer Type"
                    sx={{ maxnWidth: 150, height: 56 }} // Adjust the height and width here
                  >
                    <MenuItem value="text">Text</MenuItem>
                    <MenuItem value="radio">Radio Buttons</MenuItem>
                    <MenuItem value="checkbox">Checkboxes</MenuItem>
                  </Select>
                  <FormHelperText>Select answer type</FormHelperText>
                </FormControl>
                {(question.type === "radio" || question.type === "checkbox") && (
                  <MKBox>
                    {question.options.map((option, optionIndex) => (
                      <MKBox key={optionIndex} display="flex" alignItems="center" mb={1}>
                        <TextField
                          label={`Option ${optionIndex + 1}`}
                          fullWidth
                          value={option}
                          onChange={(e) =>
                            handleOptionChange(index, optionIndex, e.target.value)
                          }
                          sx={{ mb: 1 }}
                        />
                        <IconButton
                          onClick={() => deleteOption(index, optionIndex)}
                          aria-label="delete option"
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </MKBox>
                    ))}
                    <MKButton
                      variant="outlined"
                      color="info"
                      onClick={() => addOption(index)}
                      sx={{ mb: 2 }}
                    >
                      Add Option
                    </MKButton>
                  </MKBox>
                )}
              </MKBox>
            ))}
            <MKButton variant="gradient" color="info" onClick={addQuestion} startIcon={<AddIcon />}>
              Add Question
            </MKButton>
          </MKBox>
          <Divider sx={{ my: 0 }} />
          <MKBox display="flex" justifyContent="space-between" p={1.5}>
            <MKButton variant="gradient" color="dark" onClick={onClose}>
              Close
            </MKButton>
            <MKButton variant="gradient" color="info">
              Save Changes
            </MKButton>
          </MKBox>
        </MKBox>
      </Slide>
    </Modal>
  );
}

export default SimpleModal;



