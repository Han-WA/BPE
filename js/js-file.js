function calculate() {
    alert("calculate function");
    var b1 = parseFloat(document.getElementById("b1").value);
    var b2 = parseFloat(document.getElementById('b2').value);
    var p1 = parseFloat(document.getElementById('p1').value);
    var p2 = parseFloat(document.getElementById('p2').value);
    var k1 = parseFloat(document.getElementById('k1').value);
    var k2 = parseFloat(document.getElementById('k2').value);

    var el_list = [];

    el_list.push(b1);
    el_list.push(b2);
    el_list.push(p1);
    el_list.push(p2);
    el_list.push(k1);
    el_list.push(k2);

    var count = countNaN(el_list);

    if (count == 1) {
        if (isNaN(b1)) {
            var newb1 = ((b2 * p2 * k1) / (k2 * p1)).toFixed(2);
            document.getElementById('b1').value = newb1;
        } else if (isNaN(b2)) {
            var newb2 = ((b1 * p1 * k2) / (p2 * k1)).toFixed(2);
            document.getElementById('b2').value = newb2;
        } else if (isNaN(p1)) {
            var newp1 = ((b2 * p2 * k1) / (b1 * k2)).toFixed(2);
            document.getElementById('p1').value = newp1; 
        } else if (isNaN(p2)) {
            var newp2 = ((b1 * p1 * k2) / (b2 * k1)).toFixed(2);
            document.getElementById('p2').value = newp2;
        } else if (isNaN(k1)) {
            var newk1 = ((b1 * p1 * k2) / (b2 * p2)).toFixed(2);
            document.getElementById('k1').value = newk1; 
        } else if (isNaN(k2)) {
            var newk2 = ((b2 * p2 * k1) / (b1 * p1)).toFixed(2);
            document.getElementById('k2').value = newk2;
        }
    } else {
        alert("You need at least 5 value in the form!");
    }


    
};

function countNaN(el_list) { 
    var count = 0;
    for (var i = 0; i < el_list.length; i++) {
        if (isNaN(el_list[i])) {
            count++;
        }
    }
    return count;
}

function clear() {
    alert("L");
    // document.getElementById("b1").value = "";
    // document.getElementById("b2").value = "";
    // document.getElementById("p1").value = "";
    // document.getElementById("p2").value = "";
    // document.getElementById("k1").value = "";
    // document.getElementById("k2").value = "";
}