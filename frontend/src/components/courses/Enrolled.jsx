import { CheckCircle } from "@phosphor-icons/react";

const Enrolled = ({ enrolledStudents }) => {
  return (
    <div className="flex gap-1 items-center">
      <CheckCircle size={18} weight="fill" className="text-green-400" />
      {enrolledStudents?.length}
    </div>
  );
};

export default Enrolled;
