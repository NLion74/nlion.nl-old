function CopyText(){

const copyButtonLabel = "Copy";
let button = document.getElementById("copy");
button.innerText = copyButtonLabel;

navigator.clipboard.writeText("curl https://nlion.nl/pgp.txt | gpg --import").then(() => {
    button.innerText = "Copied";
    setTimeout(()=> {
        button.innerText = copyButtonLabel;
      },1000)
});
}