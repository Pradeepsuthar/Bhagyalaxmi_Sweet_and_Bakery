// console.log("Bhagyalaxmi Sweet & Bakery")

let siteTemplateData = {
    companyId: 1,
    companyName: "Bhagyalaxmi",
    companyType: "Sweets & Bakery",
    ownerName: "Kailash Mali",
    ownerPosition: "CEO Bhagyalaxmi Sweet and Bakery",
    socialMideaLinks: function(){
        let links = ['www.fb.com','instagram.com','twitter.com','tiktok.com'];
        return  links;
    },
    services: function(){
        let service = [
            {
                title:'Sweets',
                description:'Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie. Jujubes chocolate cake sesame snaps.',
                serviceLogoPath:'https://pngimage.net/wp-content/uploads/2018/06/sweets-images-png-.png'
            },
            {
                title:'Cakes',
                description:'Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie. Jujubes chocolate cake sesame snaps.',
                serviceLogoPath:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
            },
            {
                title:'Fast Food',
                description:'Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie. Jujubes chocolate cake sesame snaps.',
                serviceLogoPath:'https://pngimage.net/wp-content/uploads/2018/06/sweets-images-png-.png'
            },
        ];
        return service;
    },
    products:function(){
        let products = [
            {
                productId:1,
                productImgPath:"https://pngimage.net/wp-content/uploads/2018/06/sweets-images-png-.png",
                productName:"Pizaa",
                price:24.32,
                description:'Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie.'
            }
        ];
        return products;
    },
    galleryImage:function(){
        let images = [
            {
                galleryImgPath:"https://content.jdmagicbox.com/comp/sirohi/e1/9999p2972.2972.190331124743.k3e1/catalogue/bhagyalaxmi-sweet-and-bakery-pindwara-sirohi-sweet-shops-gzr3x8yqa4.jpg",
            },
            {
                galleryImgPath:"https://content.jdmagicbox.com/comp/sirohi/e1/9999p2972.2972.190331124743.k3e1/catalogue/bhagyalaxmi-sweet-and-bakery-pindwara-sirohi-sweet-shops-2u2p758gf3.jpg",
            },
            {
                galleryImgPath:"https://content.jdmagicbox.com/comp/sirohi/e1/9999p2972.2972.190331124743.k3e1/catalogue/bhagyalaxmi-sweet-and-bakery-pindwara-sirohi-sweet-shops-wyh97kblmw.jpg",
            },
            {
                galleryImgPath:"https://content.jdmagicbox.com/comp/sirohi/e1/9999p2972.2972.190331124743.k3e1/catalogue/bhagyalaxmi-sweet-and-bakery-pindwara-sirohi-sweet-shops-e5gpq3myhv.jpg",
            },
            {
                galleryImgPath:"https://content.jdmagicbox.com/comp/sirohi/e1/9999p2972.2972.190331124743.k3e1/catalogue/bhagyalaxmi-sweet-and-bakery-pindwara-sirohi-sweet-shops-t6j1ny5u74.jpg",
            },
        ];
        return images;
    }
}

function onInit(){
    document.getElementById('companyName').innerHTML = siteTemplateData.companyName;
    document.getElementById('companyType').innerHTML = siteTemplateData.companyType;
    document.getElementById('ownerName').innerHTML = siteTemplateData.ownerName;
    document.getElementById('ownerPosition').innerHTML = siteTemplateData.ownerPosition;
}

// All Company Services
function DisplayServices(){
    serviceObj = siteTemplateData.services();
    let html = "";
    serviceObj.forEach(function(siteTemplateData,i) {
        html += `
                <div class="col my-2">
                <div class="card shadow-sm text-center">
                    <div class="px-5">
                        <img class="my-4 service-img" src="${siteTemplateData['serviceLogoPath']}">
                    </div>
                    <h4>${siteTemplateData['title']}</h4>
                    <p>${siteTemplateData['description']}</p>
                </div>
            </div>`;
        });
        let nodeElm = document.getElementById("ourServices");
    if (serviceObj.length != 0) {
        nodeElm.innerHTML = html;
    } else {
        nodeElm.innerHTML = ``;
    }
}

// All Company Products
function AllProducts(){
    productObj = siteTemplateData.products();
    let html = "";
    productObj.forEach(function(siteTemplateData,i) {
        html += `
                <div class="col mb-4">
                <div class="card hvr-shadow container">
                    <div class="card-body">
                        <img src="${siteTemplateData['productImgPath']}" alt="${siteTemplateData['productName']}" class="product-img">
                    </div>
                    <h4> ${siteTemplateData['productName']} </h4>
                    <h5 class="text-success">Rs.${siteTemplateData['price']}</h5>
                    <p>${siteTemplateData['description']}</p>
                    <a href="#" class="stretched-link btn-primary-custom btn mb-4">Buy Now</a>
                </div>
            </div>`;
        });
        let nodeElm = document.getElementById("ourProducts");
    if (productObj.length != 0) {
        nodeElm.innerHTML = html;
    } else {
        nodeElm.innerHTML = ``;
    }
}

// All Company Gallery Images
function AllGalleryImages(){
    let currentImg =  siteTemplateData['galleryImgPath'];
    imgObj = siteTemplateData.galleryImage();
    let html = "";
    imgObj.forEach(function(siteTemplateData,i) {
        html += `
            <div class="col mb-4" data-toggle="modal" data-target="#exampleModalCenter">
                <div class="card hvr-shadow">
                    <img src="${siteTemplateData['galleryImgPath']}"
                        class="card-img-top">
                </div>
            </div>`;
            document.getElementById('currentImg').src = siteTemplateData['galleryImgPath'];
        });
        let nodeElm = document.getElementById("imgGallery");
        if (imgObj.length != 0) {
            nodeElm.innerHTML = html;
        } else {
            nodeElm.innerHTML = ``;
        }
}


