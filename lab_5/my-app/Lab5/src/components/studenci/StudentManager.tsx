import { useState } from 'react';
import Dodawanie from './Dodawanie'; 

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const StudentManager: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    { imie: 'Jan', nazwisko: 'Kowalski', rocznik: 2021 },
    { imie: 'Anna', nazwisko: 'Nowak', rocznik: 2022 },
    { imie: 'Piotr', nazwisko: 'Zieliński', rocznik: 2023 },
  ]);

  const addStudent = (student: Student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <h2>Lista Studentów</h2>
      <table>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dodawanie addStudent={addStudent} />
    </div>
  );
};

export default StudentManager;
