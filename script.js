const checkboxes = document.querySelectorAll('.items input[type = "checkbox"]');

let lastChecked;

function handelClick(e) {

    let inBetween = false;

    if (e.shiftKey && this.checked){

        checkboxes.forEach(checkbox => {

            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }

            if (inBetween){
                checkbox.checked = true;
            }
        })
    }

lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handelClick));
