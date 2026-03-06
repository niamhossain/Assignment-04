function interview(interview,status){
        const mblStatus = document.getElementById(status);
    mblStatus.innerText = "INTERVIEW";
    mblStatus.classList.remove('bg-[#EEF4FF]','btn-error');
    mblStatus.classList.add('btn-success','text-white');
}
function rejected(rejected,status){
        const mblStatus = document.getElementById(status);
    mblStatus.innerText = "REJECTED";
    mblStatus.classList.remove('bg-[#EEF4FF]','btn-success');
    mblStatus.classList.add('btn-error','text-white')
}