
const messageHtmlElement = document.getElementById("message");
let resolveButtonClick = null;

async function なんか処理() {
    messageHtmlElement.innerText = "処理中…";

    const result = await waitButtonClick();

    messageHtmlElement.innerText = result + "ボタンが押されました。";
}

function waitButtonClick() {
    return new Promise(resolve => {
        resolveButtonClick = resolve;
    });
}

function onButtonClick(str) {
    if (resolveButtonClick !== null) {
        resolveButtonClick(str);
    }
}

なんか処理();
