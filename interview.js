// adding interview and rejected

function checkInterview(buttons,status,cardDivs){
            const mblStatus = document.getElementById(status);
            const button = document.getElementById(buttons);
            const cardDiv = document.getElementById(cardDivs);
            const cloneDiv = cardDiv.cloneNode(true);
            cloneDiv.id = cardDivs + "clone"
            let cloneStatus = cloneDiv.querySelector(".cursor-default");
            const intSect = document.getElementById("interviewCards");
            const rejSect = document.getElementById("rejectedCards");
            const prevClone = document.getElementById(cardDivs + "clone");
            if(button.innerText===mblStatus.innerText){
                return;
            }
            else if(button.innerText==="INTERVIEW"){
                mblStatus.classList.remove('bg-[#EEF4FF]','btn-error');
                mblStatus.classList.add('btn-success','text-white');
                mblStatus.innerText = "INTERVIEW";
                cloneStatus.innerText = "INTERVIEW";
                cloneStatus.classList.remove('bg-[#EEF4FF]','btn-error');
                cloneStatus.classList.add('btn-success','text-white');
                if(prevClone){
                    prevClone.remove();
                }
                intSect.append(cloneDiv);
            }
            else if(button.innerText==="REJECTED"){
                mblStatus.classList.remove('bg-[#EEF4FF]','btn-success');
                mblStatus.classList.add('btn-error','text-white');
                mblStatus.innerText = "REJECTED";
                cloneStatus.innerText = "REJECTED";
                cloneStatus.classList.remove('bg-[#EEF4FF]','btn-success');
                cloneStatus.classList.add('btn-error','text-white');
                if(prevClone){
                    prevClone.remove();
                }
                rejSect.append(cloneDiv);
            }
    }


    // Switching sections

    const allBtn = document.getElementById("allButton");
    const intBtn = document.getElementById("interviewButton");
    const rejBtn = document.getElementById("rejectedButton");
    allBtn.addEventListener("click", function(){
        document.getElementById("intSect").classList.add("hidden");
        document.getElementById("rejSect").classList.add("hidden");
        document.getElementById("allSect").classList.remove("hidden");
    })
    intBtn.addEventListener("click", function(){
        document.getElementById("allSect").classList.add("hidden");
        document.getElementById("rejSect").classList.add("hidden");
        document.getElementById("intSect").classList.remove("hidden");
    })
    rejBtn.addEventListener("click", function(){
        document.getElementById("intSect").classList.add("hidden");
        document.getElementById("allSect").classList.add("hidden");
        document.getElementById("rejSect").classList.remove("hidden");
    })