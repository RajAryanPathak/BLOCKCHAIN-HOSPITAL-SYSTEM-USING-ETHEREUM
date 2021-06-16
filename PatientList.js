
async function loadpat()
{
    console.log("called");

    const account = await getCurrentAccount();
    const hoslist = await window.contract.methods.getPatientList().call().then(
        async function(data){
            console.log(data)
            console.log(data.length);
            n = data.length;
            for(var i=0;i<n;i++){
                    console.log(5);
                    const hoslist = await window.contract.methods.getPatient(data[i]).call().then(

                    function(inf){   
                    console.log("abcd"+inf);
                    var vbcon = document.createElement("div");
                    vbcon.classList.add("w3-card-4");
                    vbcon.classList.add("w3-dark-grey");
                    vbcon.style.width="20%";
                    var bcon = document.createElement("div");
                    bcon.classList.add("w3-container");
                    bcon.classList.add("w3-center");

                    var h3 = document.createElement("h3");
                
                    var text = document.createTextNode("Patient "+(i+1));
                    h3.appendChild(text);

                    const img = document.createElement("img");
                    img.src = "https://www.w3schools.com/w3css/img_avatar3.png";
                    img.style.width = '100%';


                    var h5 = document.createElement("h5");
                
                    var text = document.createTextNode(inf.fname+" "+inf.lname);
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
                        window.location.href = '/setRecordForPatient.html?name='+inf.fname;

                    };
                    var text = document.createTextNode("See  The Patient  ");
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
    updateStatus('Page Loaded');
    


}