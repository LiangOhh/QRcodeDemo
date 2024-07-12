const form = document.querySelector('#url-form')
const qrcode = document.querySelector('#qrcode')
const onGenerateSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // 获取输入框网站
    const url = document.getElementById('url').value
    const size = document.getElementById('size').value
    if (url == '') {
        alert('输入网址先')
    } else {
        qrcode.innerHTML = ''
        showSpinner()
        setTimeout(() => {
            hideSpinner()
            generateQRcode(url, size)
            setTimeout(() => {
                // console.log(qrcode.querySelector('img').src);
                const saveUrl = qrcode.querySelector('img').src
                createSavebtn(saveUrl)
            }, 500)
        }, 1000)


    }

}
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none'
}
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block'
}
// 生成二维码
const generateQRcode = (url, size) => {
    const qr = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
    });
}
// 生成二维码后展示下载按钮
const createSavebtn = (saveUrl) => {
    const link = document.createElement('a')
    link.id = 'save-link'
    link.classList = 'm-5 bg-red-500 hover:bg-blue-700 text-white font-bold  rounded w-1/3 m-auto my-5'
    link.href = saveUrl
    // 下载命名
    link.download = 'qrcode'
    link.innerText = '保存二维码'
    qrcode.appendChild(link)
}
form.addEventListener('submit', onGenerateSubmit)