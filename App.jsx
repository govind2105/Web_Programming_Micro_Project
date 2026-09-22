import { useState } from "react";
function App() {
const [name, setName] = useState("");
const [web, setWeb] = useState("");
const [network, setNetwork] = useState("");
const [vr, setVr] = useState("");
const [student, setStudent] = useState(null);
function handleSubmit(e) {
e.preventDefault();
setStudent({
name: name,
web: web,
network: network,
vr: vr
});
}
return (
<div>
<h1>Student Marks</h1>
<form onSubmit={handleSubmit}>
<label>Name: </label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<br /><br />
<label>Web Programming: </label>
<input
type="number"
value={web}
onChange={(e) => setWeb(e.target.value)}
/>
<br /><br />
<label>Computer Network: </label>
<input

type="number"
value={network}
onChange={(e) => setNetwork(e.target.value)}
/>
<br /><br />
<label>Virtual Reality: </label>
<input
type="number"
value={vr}
onChange={(e) => setVr(e.target.value)}
/>
<br /><br />
<button type="submit">Submit</button>
</form>
{student && (
<div>
<h2>Entered Details</h2>
<p>Name: {student.name}</p>
<p>Web Programming: {student.web}</p>
<p>Computer Network: {student.network}</p>
<p>Virtual Reality: {student.vr}</p>
<p>
Total Marks:{" "}
{Number(student.web) +
Number(student.network) +
Number(student.vr)}
</p>
<p>
Average:{" "}
{(Number(student.web) +
Number(student.network) +
Number(student.vr)) / 3}
</p>
<h3>
Result:{" "}
{Number(student.web) >= 40 &&
Number(student.network) >= 40 &&
Number(student.vr) >= 40
? "Pass"
: "Fail"}
</h3>
</div>

)}
</div>
);
}
export default App;
