//variables
var money = 0;
var bananas = 0;
var bananaSlices = 0;
var bananaSmoothies = 0;
var monkey = 0;

var bananasOnClick = 1;
var bananaSlicesOnClick = 1;
var slicesToSmoothiesOnClick = 1;
var smoothiesToDollarOnClick = 1;
var monkeyOnSearch = 1;

var bananasToSliceCost = 5;
var slicesToSmoothiesCost = 5;
var smoothiesToDollarCost = 5;
var searchMonkeySpeed = 100;

var isBuyingMonkey = false;

//functions
function ClickItem(clickedItem){
    if(clickedItem == 'banana_click'){
        bananas += bananasOnClick;
    }else if(clickedItem == 'bananaSliced_click'){
        if(bananas >= bananasToSliceCost){
            bananas -= bananasToSliceCost;
            bananaSlices += bananaSlicesOnClick;
        }else{
            alert("Not enough bananas, you need " + bananasToSliceCost);
        }
    }else if(clickedItem == 'bananaSmoothie_click'){
        if(bananaSlices >= slicesToSmoothiesCost){
            bananaSlices -= slicesToSmoothiesCost;
            bananaSmoothies += slicesToSmoothiesOnClick;
        }else{
            alert("Not enough slices, you need " + slicesToSmoothiesCost);
        }
    }else if(clickedItem == 'sell_click'){
        if(bananaSmoothies >= smoothiesToDollarCost){
            bananaSmoothies -= smoothiesToDollarCost;
            money += smoothiesToDollarOnClick;
        }else{
            alert("Not enough smoothies!");   
        }
    }else{
        alert("wrong item");
    }
    UpdateData();
}

function BuyAutomation(item_bought){
    if(itembought == '1'){

    }else if (itembought == '2'){

    }else{

    }
    UpdateData();
}

function UpdateData(){
    document.getElementById("span_monkeys").innerHTML = monkey;
    document.getElementById("span_money").innerHTML = money;
    document.getElementById("span_bananas").innerHTML = bananas;
    document.getElementById("span_bananaSlices").innerHTML = bananaSlices;
    document.getElementById("span_bananaSmoothies").innerHTML = bananaSmoothies;
}

function ProgressBar(bar_id){
    if(isBuyingMonkey == false){
        isBuyingMonkey = true;
        var progress_bar = document.getElementById(bar_id);
        var width = 1;
        var progress = setInterval(frame, searchMonkeySpeed);

        function frame(){
            if(isBuyingMonkey == false){
                UpdateData();
                clearInterval(progress);
            }
            if(width>=100){
                isBuyingMonkey = false;
                monkey += monkeyOnSearch;
                width = -1;
            }else{
                width++;
                progress_bar.style.width = width + '%';
            }
        }
    }
}