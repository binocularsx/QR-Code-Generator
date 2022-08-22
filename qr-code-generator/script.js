const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');
const spinner = document.getElementById('spinner')
const button = document.getElementById('saveLink')

// Button submit
const onClickSubmit = (e) => {
    e.preventDefault();

    clearUI()

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    // To check if passing the right values
    console.log(url, size)

    if (url === '') {
        alert('URL not entered, try again.')
    } else {
        showSpinner()

        setTimeout(() => {
            hideSpinner()

            generateQRcode(url, size)

            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src
                saveBtn(saveUrl)

            }, 50)
        }, 1000);
    }
}

const generateQRcode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size
    })
}

function showSpinner() {
    spinner.style.display = 'block'
}

function hideSpinner() {
    spinner.style.display = 'none'
}

function clearUI() {
    qr.innerHTML = ''

    const saveLink = document.getElementById('saveLink')

    if (saveLink) saveLink.remove()
}

const saveBtn = (saveUrl) => {
    const link = document.createElement('a')
    link.id = 'saveLink'
    link.classList = 'button bg-blue-500 hover:bg-blue-700 rounded w-1/4 text-white py-2 px-3 mt-5 m-auto'
    link.href = saveUrl
    link.download = 'qrcode'
    link.innerHTML = 'Save Code Image'
    document.getElementById('generated').appendChild(link)
}

hideSpinner()

form.addEventListener('submit', onClickSubmit)