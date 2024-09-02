import AbsentStudent from "./AbsentStudent";
import AllStudent from "./AllStudent";
import PresentStudent from "./PresentStudent";

function DashBoard({
  students,
  onDelete,
  onPresent,
  onAbsent,
  onAccidently,
  onEdit,
}) {
  return (
    <div className="content">
      <AllStudent
        students={students}
        onDelete={onDelete}
        onPresent={onPresent}
        onAbsent={onAbsent}
        onEdit={onEdit}
      />
      <PresentStudent students={students} onAccidently={onAccidently} />
      <AbsentStudent students={students} onAccidently={onAccidently} />
    </div>
  );
}

export default DashBoard;
