var uads = sessionStorage.getItem("redirect_sn_res");


var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
const today = year + "/" + month + "/" + day;


var go_current = window.location.href;
// var direct_link_ads = `https://shope.ee/6Uj3QZV3mS`; 
var direct_link_ads = ["https:\/\/shp.ee\/5bm5vwf","https:\/\/shp.ee\/prcjehp","https:\/\/shp.ee\/7drbpfx","https:\/\/shp.ee\/8gj4fwf","https:\/\/shp.ee\/qfjg6ef","https:\/\/shp.ee\/xpziy6x","https:\/\/shp.ee\/e5m6ywf","https:\/\/shp.ee\/tpy7wef","https:\/\/shp.ee\/4x5cbef","https:\/\/shp.ee\/tjr35ef","https:\/\/shp.ee\/istfdef","https:\/\/shp.ee\/bqspdt7","https:\/\/shp.ee\/jnjyqwf","https:\/\/shp.ee\/yrhac47","https:\/\/shp.ee\/7dnfgwf","https:\/\/shp.ee\/gup4pwf","https:\/\/shp.ee\/2wqg56x","https:\/\/shp.ee\/65mj9wf","https:\/\/shp.ee\/3ggbvef","https:\/\/shp.ee\/94frzef"];
var arr_ars = ["https://pcandroidplayer.blogspot.com/"];

function rChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}
var shopeeLink = rChoice(direct_link_ads)
var ars = rChoice(arr_ars);
// set session sto




// if (!uads && !go_current.includes("/download/") && go_current != uads) {
if (today !== uads && !arr_ars.includes(today)) {
    var link = document.createElement("link");
    link.href =
        "https://cdn.jsdelivr.net/gh/vyantagc/vyantagc@master/popme-css.min.css";
    link.rel = "stylesheet";
    link.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(link);

    var script = document.createElement("script");
    script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);

    document.addEventListener("DOMContentLoaded", function(event) {
        document.body.innerHTML += `<div class="popbox hide" id="popbox"><div aria-label='Close' class="pop-overlay" role="button" tabindex="0"/><div class="pop-content"><div class="popcontent" align="center"> <img src="https://1.bp.blogspot.com/-y8AsxfEerDc/YFSyMPZF14I/AAAAAAAAAAM/JUegMgSE-3o5A_06mx0Fir2-dkB6fAGvACLcBGAsYHQ/s640/re.jpg" width="640" height="320" class="lazyload" alt="" /> <button class='g_url btn btn-success btn-dwn m-2'>Confirm</button> <br/></div> <button class='g_url popbox-close-button'>&#215;</button></div></div>`;

        setTimeout(function() {
            $("#popbox").removeClass("hide");
        }, 1000);

        $(document).on("click", ".g_url", function(e) {
            sessionStorage.setItem('redirect_sn_res', today)
            e.preventDefault();
           
            window.open(
                `${go_current}`,
                "_blank"
            );
            
            window.location.href = shopeeLink;
           
        });
    });
}


