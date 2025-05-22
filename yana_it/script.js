const form = document.getElementById('helpForm');
const loading = document.getElementById('loading');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(event){
    event.preventDefault();
    loading.classList.remove('hidden');
    confirmation.classList.add('hidden');

    setTimeout(()=>{
        loading.classList.add('hidden');
        confirmation.classList.remove('hidden');
        form.reset();
    }, 2000);
});