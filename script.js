let isOn = false;
function toggleTorch(){
    const torch = document.
    getElementById("torch");
    const status = document.
    getElementById("status");
    isOn = !isOn;
    if(isOn){
        torch.classList.add("on");
        status.innerText="Torch is ON";
    }
    else{
        torch.classList.remove("on");
        status.innerText="Torch is OFF";
    }
}