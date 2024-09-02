function AbsentStudent({ students, onAccidently }) {
  const filterStudent = students.filter(
    (student) => student.status === "absent"
  );
  return (
    <div className="absent-student">
      <h3 className="title">absent-student</h3>
      {filterStudent.length > 0 ? (
        filterStudent.map((student) => (
          <div key={student.id} className="student">
            <p>{student.name}</p>
            <div>
              <button onClick={() => onAccidently(student.id)}>
                accidentally added{" "}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No student</p>
      )}
    </div>
  );
}

export default AbsentStudent;
