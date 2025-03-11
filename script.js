document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Kullanıcı Adı:', username);
    console.log('Şifre:', password);

    // Burada kullanıcı bilgilerini bir sunucuya gönderebilirsin.
    // Örneğin: fetch('/login', { method: 'POST', body: JSON.stringify({ username, password }) });

    alert('Giriş bilgileri konsolda gösteriliyor.');
});
