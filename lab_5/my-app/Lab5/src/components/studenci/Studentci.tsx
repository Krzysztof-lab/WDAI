interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const Students: Student[] = [
  { imie: 'Jan', nazwisko: 'Kowalski', rocznik: 2021 },
  { imie: 'Anna', nazwisko: 'Nowak', rocznik: 2022 },
  { imie: 'Piotr', nazwisko: 'Zieliński', rocznik: 2023 },
];

const Studenci: React.FC = () => {
  return (
    <div>
      <h2>Lista Studentów</h2>
      <table>
        <tbody>
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studenci;
