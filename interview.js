
    // if accepted

    function interview(interview,status,cardDiv){
        const mblStatus = document.getElementById(status);
        mblStatus.classList.remove('bg-[#EEF4FF]','btn-error');
        mblStatus.classList.add('btn-success','text-white');

    }


    // if rejected
    function rejected(rejected,status,cardDiv){
        const mblStatus = document.getElementById(status);
        mblStatus.classList.remove('bg-[#EEF4FF]','btn-success');
        mblStatus.classList.add('btn-error','text-white')
    }

    function checkInterview(check,status,cardDiv){

    }