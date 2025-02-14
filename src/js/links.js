const whatsappLink = document.getElementById('contactsWhatsapp');
const phoneNumber = '79776859300';
const telegramLink = document.getElementById('contactsTelegramm');
const telegramUsername = 'Alla_BorisenkoMeshcheriakova';
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

whatsappLink.addEventListener('click', (event) => {
    event.preventDefault();


    if (isMobile) {
        window.location.href = `whatsapp://send?phone=${phoneNumber}`;
    } else {
        window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
    }
});

telegramLink.addEventListener('click', (event) => {
    event.preventDefault();

    if (isMobile) {
        window.location.href = `tg://resolve?domain=${telegramUsername}`;
    } else {
        window.open(`https://t.me/${telegramUsername}`, '_blank');
    }
});