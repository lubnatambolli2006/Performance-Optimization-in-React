const { useState, useMemo, useCallback, memo } = React;

// React.memo prevents unnecessary re-rendering
const StudentCard = memo(function StudentCard({ name, marks, onSelect }) {
    console.log("StudentCard rendered:", name);

    return (
        <div className="student">
            <strong>{name}</strong>
            <p>Marks: {marks}%</p>
            <button onClick={() => onSelect(name)}>
                Select Student
            </button>
        </div>
    );
});

function App() {
    const [count, setCount] = useState(0);
    const [selectedStudent, setSelectedStudent] = useState("");

    const students = [
        { name: "Alice", marks: 85 },
        { name: "John", marks: 78 },
        { name: "Sara", marks: 92 }
    ];

    // useMemo stores the calculated result
    const averageMarks = useMemo(() => {
        console.log("Calculating average marks...");

        const total = students.reduce(
            (sum, student) => sum + student.marks,
            0
        );

        return total / students.length;
    }, []);

    // useCallback keeps the same function reference
    const handleSelect = useCallback((name) => {
        setSelectedStudent(name);
    }, []);

    return (
        <div className="container">

            <h1>React Performance Optimization</h1>

            <p className="subtitle">
                Demonstration of React.memo, useMemo and useCallback
            </p>

            <div className="card">
                <h2>1. React.memo</h2>

                {students.map((student) => (
                    <StudentCard
                        key={student.name}
                        name={student.name}
                        marks={student.marks}
                        onSelect={handleSelect}
                    />
                ))}
            </div>

            <div className="card">
                <h2>2. useMemo</h2>

                <p className="info">
                    Average Student Marks:
                    <strong> {averageMarks.toFixed(2)}%</strong>
                </p>
            </div>

            <div className="card">
                <h2>3. useCallback</h2>

                <p className="info">
                    Selected Student:
                    <strong>
                        {selectedStudent
                            ? ` ${selectedStudent}`
                            : " None"}
                    </strong>
                </p>
            </div>

            <div className="card">
                <h2>4. Component Re-render Test</h2>

                <p className="counter">
                    Counter: {count}
                </p>

                <button onClick={() => setCount(count + 1)}>
                    Increase Counter
                </button>
            </div>

        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);
