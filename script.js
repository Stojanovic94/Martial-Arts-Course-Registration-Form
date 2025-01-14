document.addEventListener("DOMContentLoaded", function() {
    // Ova funkcija se pokreće nakon što je ceo sadržaj stranice (HTML) učitan

    // Učitavanje podataka iz JSON fajla koristeći Ajax (fetch)
    const vestinaDropdown = document.getElementById("vestina"); // Dohvatiti <select> element za vestinu

    // Učitavanje JSON fajla sa podacima
    fetch('data.json')  // Zamenite sa stvarnim putem do JSON fajla
        .then(response => response.json())  // Pretvaranje odgovora u JSON format
        .then(data => {
            // Kreiranje opcija za select iz JSON podataka
            data.vestine.forEach(v => {
                const option = document.createElement("option"); // Kreiramo novu <option> stavku
                option.value = v.price; // Vrednost opcije je cena iz JSON podataka
                option.textContent = v.name; // Tekst koji će se prikazivati u meniju je ime veštine
                vestinaDropdown.appendChild(option); // Dodajemo opciju u dropdown
            });
        })
        .catch(error => console.error('Greška pri učitavanju podataka:', error)); // Ako se desi greška pri učitavanju, ispisujemo poruku u konzolu

    // Email validacija
    const emailInput = document.getElementById("email");  // Dohvatiti polje za unos email-a
    const emailErrorMessage = document.getElementById("error-message");  // Dohvatiti element za poruku greške

    emailInput.addEventListener("blur", function() {  // "blur" se aktivira kada korisnik napusti input
        const emailValue = emailInput.value;  // Uzima vrednost unetog email-a
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Jednostavan regex za validaciju email-a

        if (!emailRegex.test(emailValue)) {  // Ako email nije validan
            emailErrorMessage.style.display = "block"; // Prikazivanje poruke greške
            emailErrorMessage.textContent = "Email INVALID!!!"; // Prikazivanje poruke greške
        } else {
            emailErrorMessage.style.display = "none"; // Sakrivanje poruke greške ako je email validan
        }
    });

    // Dodavanje validacije za broj polaznika
    const brojPolaznikaInput = document.getElementById("brojPolaznika");  // Dohvatanje polja za unos broja polaznika

    brojPolaznikaInput.addEventListener("blur", function() {  // Aktivira se kada korisnik napusti input
        let brojPolaznika = parseInt(brojPolaznikaInput.value);  // Pretvara unos u broj
        
        // Ako je broj veći od 5, postavimo na 5
        if (brojPolaznika > 5) {
            brojPolaznikaInput.value = 5;  // Ako je broj veći od 5, postavi ga na 5
        }
    });
});

function izracunajCenu() {
    const brojPolaznika = parseInt(document.getElementById("brojPolaznika").value);  // Dohvatanje broja polaznika
    const vestinaCena = parseInt(document.getElementById("vestina").value);  // Dohvatanje cene odabrane veštine
    const dodatniSadrzaji = document.querySelectorAll('input[name="dodatni"]:checked');  // Dohvatanje svih označenih dodatnih sadržaja
    const trajanje = document.querySelector('input[name="trajanje"]:checked').value;  // Dohvatanje odabranog trajanja kursa

    let cena = vestinaCena * brojPolaznika;  // Računanje osnovne cene (cena veštine * broj polaznika)

    // Računanje cene za dodatne sadržaje
    dodatniSadrzaji.forEach(dodatak => {
        if (dodatak.value === "oprema") cena += 1000;  // Dodavanje cene za opremu
        if (dodatak.value === "trener") cena += 2000;  // Dodavanje cene za trenera
        if (dodatak.value === "medicina") cena += 1500;  // Dodavanje cene za medicinu
    });

    // Računanje cene na osnovu trajanja kursa
    if (trajanje === "3") cena *= 3;  // Ako je trajanje 3 meseca, cena se množi sa 3
    else if (trajanje === "6") cena *= 6;  // Ako je trajanje 6 meseci, cena se množi sa 6

    document.getElementById("cena").textContent = `Cena Kursa: ${cena} RSD`;  // Prikazivanje ukupne cene na stranici
}

document.getElementById("prijavaForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Sprečava podrazumevano ponašanje forme (osvežavanje stranice)

    const podaci = {
        ime: document.getElementById("ime").value,  // Dohvatiti ime
        telefon: document.getElementById("telefon").value,  // Dohvatiti telefon
        email: document.getElementById("email").value,  // Dohvatiti email
        brojPolaznika: document.getElementById("brojPolaznika").value,  // Dohvatiti broj polaznika
        datum: document.getElementById("datum").value,  // Dohvatiti datum
        vestina: document.getElementById("vestina").selectedOptions[0].textContent,  // Dohvatiti izabranu vestinu
        dodatniSadrzaji: Array.from(document.querySelectorAll('input[name="dodatni"]:checked')).map(e => e.value),  // Dohvatiti dodatne sadržaje
        trajanje: document.querySelector('input[name="trajanje"]:checked').value  // Dohvatiti trajanje
    };

    console.log("Podaci za slanje u JSON formatu:", JSON.stringify(podaci));  // Ispisivanje podataka u JSON formatu u konzolu
    alert("Prijava uspešno poslata!");  // Prikazivanje obaveštenja korisniku
});

let currentSlide = 0;  // Inicijalizacija trenutnog slajda
const slides = document.querySelectorAll(".slide");  // Dohvatanje svih slika u slideshow-u

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);  // Prikazivanje ili skrivanje slajdova na osnovu indeksa
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;  // Prelazak na sledeći slajd
    showSlide(currentSlide);  // Prikazivanje sledećeg slajda
}

// Prikazujemo prvu sliku odmah
showSlide(currentSlide);

// Automatski prelaz na sledeću sliku svakih 3 sekunde
setInterval(nextSlide, 3000);  // Automatski pomeramo slajdove svakih 3 sekunde
