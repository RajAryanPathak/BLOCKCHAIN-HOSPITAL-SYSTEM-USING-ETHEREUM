
async function abcd() {
    updateStatus('Registering.');
    var patage = parseInt(document.getElementById("patage").value);
    var patfname = document.getElementById("patfname").value;
    var patlname = document.getElementById("patlname").value;
    const account = await getCurrentAccount();
    const patientupdated = await window.contract.methods.setPatient(patage,patfname,patlname).send({ from: account })
    
    updateStatus('Registered Set.');
}