// this is the variable of array

var arr = [

    // this is the object 
    {
        dp: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: " https://plus.unsplash.com/premium_photo-1714195646879-d31243782c99?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww ",
        story: "https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        dp: " https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww",
    },

    {
        dp: "https://images.unsplash.com/photo-1613005798967-632017e477c8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D ",
        story: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsfGVufDB8fDB8fHww"
    },
]
var storyes = document.querySelector(".stores")

var clutter = ""

arr.forEach(function (elem, idx) {

    clutter += ` <div class="story">
                <img id = "${idx}" src=" ${elem.dp}" alt="">
            </div>`

})
storyes.innerHTML = clutter
storyes.addEventListener("click", function (dets) {

    document.querySelector(".full-screen").style.display = "block";
    document.querySelector(".full-screen").style.background = `url(" ${arr[dets.target.id].story})`;
    document.querySelector(".story").style = "muted";

})

setTimeout(() => {

    document.querySelector(".full-screen").style.display = "none";


}, 3000);
