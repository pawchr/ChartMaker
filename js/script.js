const backgroundcolor = [];
const title = [];
const dane = {
    
    labels: [],
            
    datasets: [
        { label: "",
            data: [],
            backgroundColor: backgroundcolor,}
            
    ],
}
const options={
    plugins:    {
        title: {display: true,
                text: title },
        legend: {position: "bottom"}
        }
}
const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, { type: "bar", data: dane, options:options });


function setTitle(){
    const t = (document.getElementById("title").value);
    title.push(t);
    chart.update();
}

function columns(){ // Creating columns(amount is given by the user)
    const kol = parseInt(document.getElementById("kolumny").value);
    
    const etykiety=[];
    chart.data.labels=etykiety;
    for(let i=0;i<kol;i++){
        chart.data.labels[i]="0";

    }

    for(let x=0;x<etykiety.length;x++){ // adding random color for every column
        var r = Math.floor(Math.random() * 255); 
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        backgroundcolor.push(('rgba('+r+','+g+','+b+', 0.4)'))
    }
    
    chart.update(); 
    Inputs() 
}

function Inputs(){ // Fields for entering values to the columns
    document.getElementById("columnInputs").innerHTML = "<h1><b>Insert column values</b></h1><br>";

    const no = document.getElementById("kolumny").value;
    let j=1;
    for(let i=0;i<no;i++){
        const field = document.createElement("input");
        field.type = "text";
        field.id = "inputs"+ j;
        field.value = "";
        field.placeholder= "Column "+j;
        field.addEventListener("focusout", addValue);
        document.getElementById('columnInputs').appendChild(field);
        j +=1;
    }
}

function addValue(){ // Adding values entered in fields to relevant columns
    chart.data.datasets[0].data[(this.id.replace(/\D/g, "")-1)]=0;
    const v = document.getElementById(this.id).value;
    const z = chart.data.datasets[0].data[this.id.replace(/\D/g, "")-1];
    chart.data.datasets[0].data[this.id.replace(/\D/g, "")-1]=z+v;
    chart.update(); 
}
