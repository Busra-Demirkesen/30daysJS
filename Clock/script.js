const secondHand = document.querySelector('.second-hand'); 
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    
    // Saniye için hesaplama
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Burada `rotate` içinde `()` parantezi eklenmeli.

    // Dakika için hesaplama
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`; // Aynı şekilde burada da `rotate` fonksiyonu düzeltilmeli.

    // Saat için hesaplama
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`; // Burada da aynı şekilde dönüşüm hatası giderilmeli.
}

setInterval(setDate, 1000);
