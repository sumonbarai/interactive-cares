import { useState } from "react";
import "./assets/css/style.css";
import DashBoard from "./components/DashBoard/DashBoard";
import From from "./components/From/From";
const initialStudent = [
  {
    id: crypto.randomUUID(),
    name: "sumon",
    status: "",
  },
  {
    id: crypto.randomUUID(),
    name: "partho",
    status: "present",
  },
  {
    id: crypto.randomUUID(),
    name: "partho",
    status: "",
  },
  {
    id: crypto.randomUUID(),
    name: "partho",
    status: "",
  },
];

function App() {
  const [students, setStudents] = useState(initialStudent);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(null);

  const handleSave = () => {
    if (edit) {
      const updatedStudent = students.map((student) => {
        if (student.id === edit.id) {
          return {
            ...edit,
            name: name,
          };
        }
        return student;
      });
      setStudents(updatedStudent);
      setEdit(null);
      setName("");
    } else {
      const newStudent = {
        id: crypto.randomUUID(),
        name: name,
        status: "",
      };

      setStudents([...students, newStudent]);
      setName("");
    }
  };

  const handleEdit = (editStudent) => {
    setName(editStudent.name);
    setEdit(editStudent);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handlePresent = (data) => {
    if (data.status) {
      return alert("Student attendance already done");
    }

    const updatedStudent = students.map((student) => {
      if (student.id === data.id) {
        return {
          ...student,
          status: "present",
        };
      }
      return student;
    });
    setStudents(updatedStudent);
  };

  const handleAbsent = (data) => {
    if (data.status) {
      return alert("Student attendance already done");
    }
    const updatedStudent = students.map((student) => {
      if (student.id === data.id) {
        return {
          ...student,
          status: "absent",
        };
      }
      return student;
    });
    setStudents(updatedStudent);
  };
  const handleAccidentlyAdded = (id) => {
    const updatedStudent = students.map((student) => {
      if (student.id === id) {
        const status = student.status;
        if (status === "present") {
          return {
            ...student,
            status: "absent",
          };
        } else {
          return {
            ...student,
            status: "present",
          };
        }
      }
      return student;
    });
    setStudents(updatedStudent);
  };

  return (
    <div className="attendance">
      <From
        name={name}
        onChangeHandler={(e) => setName(e.target.value)}
        onSave={handleSave}
        edit={edit}
      />
      <DashBoard
        students={students}
        onDelete={handleDeleteStudent}
        onPresent={handlePresent}
        onAbsent={handleAbsent}
        onAccidently={handleAccidentlyAdded}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
