function AllStudent({ students, onDelete, onPresent, onAbsent, onEdit }) {
  return (
    <div className="all-student">
      <h3 className="title">All-student</h3>
      {students.length > 0 ? (
        students.map((student) => (
          <div key={student.id} className="student">
            <p>{student.name}</p>
            <div>
              <button onClick={() => onEdit(student)}>edit</button>
              <button onClick={() => onDelete(student.id)}>delete</button>
            </div>
            <div>
              <button
                onClick={() => onPresent(student)}
                className={student.status !== "" ? "disable-color" : ""}
              >
                present
              </button>
              <button
                className={student.status !== "" ? "disable-color" : ""}
                onClick={() => onAbsent(student)}
              >
                absent
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

export default AllStudent;
