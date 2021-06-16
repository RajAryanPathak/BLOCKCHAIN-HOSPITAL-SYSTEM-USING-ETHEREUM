
async function setrecord() {
    updateStatus('Updating The Record....');
    const name = new URLSearchParams(window.location.search).get('name');
    
    // var patadd = document.getElementById("patadd").value;
    var oxy = document.getElementById("oxy").value;
    var remark = document.getElementById("medicine").value;
    const account = await getCurrentAccount();
    try{
    const patientupdated = await window.contract.methods.setRecord(name,oxy,remark).send({ from: account })
    updateStatus('Record Set.');
    location.reload();
    }
    catch (e ){
       alert("some error occured")

      }
      
    
}



async function loadpage() {
    const name = new URLSearchParams(window.location.search).get('name');
    const account = await getCurrentAccount();
    console.log(name)
    const re = await window.contract.methods.viewRecord(name).call();
    console.log(re)
    document.getElementById("premark").innerHTML=re;
    updateStatus('loaded.');
}


