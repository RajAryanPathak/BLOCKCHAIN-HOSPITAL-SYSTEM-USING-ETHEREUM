async function regHos() {
    updateStatus('Registering.');
    var name = document.getElementById("name").value;
    var beds = parseInt(document.getElementById("beds").value);
    var oxy = parseInt(document.getElementById("oxy").value);
    const account = await getCurrentAccount();
    const Hospitalreg = await window.contract.methods.setHospital(name,beds,oxy).send({ from: account });
    location.reload();
    updateStatus('Hospital Registed.');

}

async function filloxy(name) {
    updateStatus('Filling Oxygen.'+name);
    const account = await getCurrentAccount();
    const abcd = await window.contract.methods.fillOxygen(name).send({ from: account });
    console.log(abcd)
    location.reload();
    updateStatus('Oxygen Refilled.');

}


async function loaddata()
{
    console.log("called");
    const account = await getCurrentAccount();
    const hoslist = await window.contract.methods.getHospitalList().call().then(
        async function(data){
            console.log(data)
            console.log(data.length);
            n = data.length;
            for(var i=0;i<n;i++){
                    console.log(5);
                    const hoslist = await window.contract.methods.getHospital(data[i]).call().then(

                    function(inf){   
                    var name =  inf.name; 
                    console.log(name);
                    console.log(inf);
                    var vbcon = document.createElement("div");
                    vbcon.classList.add("w3-card-4");
                    vbcon.classList.add("w3-dark-grey");
                    vbcon.style.width="20%";
                    var bcon = document.createElement("div");
                    bcon.classList.add("w3-container");
                    bcon.classList.add("w3-center");

                    var h3 = document.createElement("h3");
                
                    var text = document.createTextNode("Oxygen Available :  "+inf.OxygenLeft);
                    const lineBreak = document.createElement('br');
                    const lineBreak1 = document.createElement("br");


                    var text1 = document.createTextNode("Beds Available :  "+inf.NoOfBeds);
                    var text2 = document.createTextNode("Doctors :  "+inf.noOfDoctor);
                    h3.appendChild(text);
                    h3.appendChild(lineBreak1);
                    h3.appendChild(text1);
                    h3.appendChild(lineBreak);
                    h3.appendChild(text2);


                    const img = document.createElement("img");
                    img.src = "https://www.healthcarelawinsights.com/wp-content/uploads/sites/645/2017/11/Hospital_000046137720_Large-330x248.jpg";
                    img.style.width = '100%';


                    var h5 = document.createElement("h5");
                
                    var text = document.createTextNode(name);
                    h5.appendChild(text);
                    bcon.appendChild(h3);
                    bcon.appendChild(img);
                    bcon.appendChild(h5);
                    
                    var sec = document.createElement("div");
                    sec.classList.add("w3-section");
                    var btn = document.createElement("button");
                    btn.classList.add("w3-button");
                    btn.classList.add("w3-green");
                    btn.onclick = function () {
                        console.log("hi");
                        window.location.href = '/doctorlist.html?name='+inf.name;

                    };
                    var text = document.createTextNode("Visit Hospital  ");
                    btn.appendChild(text);

                    sec.appendChild(btn);
                    


                    bcon.appendChild(sec);
                    //--------------------
                    var sec = document.createElement("div");
                    sec.classList.add("w3-section");
                    var btn = document.createElement("button");
                    btn.classList.add("w3-button");
                    btn.classList.add("w3-green");
                    btn.onclick = function () {
                        console.log('->'+inf.name)
                                filloxy(inf.name);

                    };
                    var text = document.createTextNode("Refill Oxygen  ");
                    btn.appendChild(text);

                    sec.appendChild(btn);
                    

                    
                    bcon.appendChild(sec);
                    vbcon.appendChild(bcon);
                    console.log(vbcon);

                    var element = document.getElementById("w3-container");

                    element.appendChild(vbcon);



                    });

                 



            }
        }
    );
    updateStatus('Page Loaded.');
}