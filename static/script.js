document.getElementById('allergy_yes').addEventListener('change', function() {
    document.querySelector('.allergy-names').style.display = this.checked ? 'block' : 'none';
});

document.getElementById('allergy_no').addEventListener('change', function() {
    document.querySelector('.allergy-names').style.display = 'none';
});

async function submitForm(event) {
    event.preventDefault();
    
    const formData = {
        // Basic Information
        furigana_surname: document.getElementById('furigana_surname').value || '',
        furigana_given: document.getElementById('furigana_given').value || '',
        romaji_surname: document.getElementById('romaji_surname').value || '',
        romaji_given: document.getElementById('romaji_given').value || '',
        birthdate: document.getElementById('birthdate').value || '',
        age: document.getElementById('age').value || '',
        gender: document.getElementById('gender').value || '',
        nationality: document.getElementById('nationality').value || '',
        nearest_station: document.getElementById('nearest_station').value || '',
        postal_code: document.getElementById('postal_code').value || '',
        address: document.getElementById('address').value || '',
        phone: document.getElementById('phone').value || '',
        email: document.getElementById('email').value || '',
        
        // ... rest of your form data collection ...
    };

    // ... rest of your submit function ...
}