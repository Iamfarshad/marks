
function addSum(c1, c2, c3, c4, c5, c6, name) {
    const total = c1 + c2 + c3 + c4 + c5 + c6;
    const average = total / 600;
    const grade = average * 100;

    return `The student ${name} total marks: ${total}, average: ${average}, grade: ${grade}%`;
}

function listenToClick(e) {
    e.preventDefault();  

    
    const c1 = Number(document.getElementById("c1").value);
    const c2 = Number(document.getElementById("c2").value);
    const c3 = Number(document.getElementById("c3").value);
    const c4 = Number(document.getElementById("c4").value);
    const c5 = Number(document.getElementById("c5").value);
    const c6 = Number(document.getElementById("c6").value);

    // Get name from input field    
    const myName = String(document.getElementById("myname").value);
    const template = addSum(c1, c2, c3, c4, c5, c6, myName);
    document.getElementById("temp").innerText = template;
}

function resetForm() {
    document.getElementById("myForm").reset();

    document.getElementById("temp").innerText = "";

    document.getElementById("myname").focus();
}

document.getElementById("myForm").addEventListener("submit", listenToClick);


document.getElementById("myButton").addEventListener("click", resetForm);
