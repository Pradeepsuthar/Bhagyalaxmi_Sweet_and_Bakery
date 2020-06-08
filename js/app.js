// Firebase configrations
var firebaseConfig = {
    apiKey: "AIzaSyAJOm29FsjGtNiuj8g3m3G3S5iW5n69Oig",
    authDomain: "webbuilder081.firebaseapp.com",
    databaseURL: "https://webbuilder081.firebaseio.com",
    projectId: "webbuilder081",
    storageBucket: "webbuilder081.appspot.com",
    messagingSenderId: "142256510593",
    appId: "1:142256510593:web:8c1a07c0c50c3f31b1df80",
    measurementId: "G-2RR8FHSQL3"
};

firebase.initializeApp(firebaseConfig);

var id = "Yg0jIjIqTpX1FEGpT6BDZskZ4iL2"

firebase.firestore().collection("users").doc(id).get().then(function (doc) {
    window.UsersDetails = doc.data()
    console.log(UsersDetails)
    Address(UsersDetails)
})





// console.log("Bhagyalaxmi Sweet & Bakery")

let siteTemplateData = {
    companyId: 1,
    companyName: "Bhagyalaxmi",
    companyType: "Sweets & Bakery",
    ownerName: "Kailash Mali",
    ownerPosition: "CEO Bhagyalaxmi Sweet and Bakery",
    socialMideaLinks: ['www.fb.com', 'instagram.com', 'twitter.com', 'tiktok.com'],
    services: [
        {
            title: 'Sweets',
            description: 'Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie. Jujubes chocolate cake sesame snaps.',
            serviceLogoPath: 'https://pngimage.net/wp-content/uploads/2018/06/sweets-images-png-.png'
        },
        {
            title: 'Cakes',
            description: 'Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie. Jujubes chocolate cake sesame snaps.',
            serviceLogoPath: 'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
        },
        {
            title: 'Fast Food',
            description: 'Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie. Jujubes chocolate cake sesame snaps.',
            serviceLogoPath: 'https://pngimage.net/wp-content/uploads/2018/06/sweets-images-png-.png'
        },
    ],
    products: [
        {
            productId: 1,
            productImgPath: "https://pngimage.net/wp-content/uploads/2018/06/sweets-images-png-.png",
            productName: "Pizaa",
            price: 24.32,
            description: 'Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie.'
        }
    ],
    galleryImage: [
        {
            galleryImgPath: "https://content.jdmagicbox.com/comp/sirohi/e1/9999p2972.2972.190331124743.k3e1/catalogue/bhagyalaxmi-sweet-and-bakery-pindwara-sirohi-sweet-shops-gzr3x8yqa4.jpg",
        },
        {
            galleryImgPath: "https://content.jdmagicbox.com/comp/sirohi/e1/9999p2972.2972.190331124743.k3e1/catalogue/bhagyalaxmi-sweet-and-bakery-pindwara-sirohi-sweet-shops-2u2p758gf3.jpg",
        },
        {
            galleryImgPath: "https://content.jdmagicbox.com/comp/sirohi/e1/9999p2972.2972.190331124743.k3e1/catalogue/bhagyalaxmi-sweet-and-bakery-pindwara-sirohi-sweet-shops-wyh97kblmw.jpg",
        },
        {
            galleryImgPath: "https://content.jdmagicbox.com/comp/sirohi/e1/9999p2972.2972.190331124743.k3e1/catalogue/bhagyalaxmi-sweet-and-bakery-pindwara-sirohi-sweet-shops-e5gpq3myhv.jpg",
        },
        {
            galleryImgPath: "https://content.jdmagicbox.com/comp/sirohi/e1/9999p2972.2972.190331124743.k3e1/catalogue/bhagyalaxmi-sweet-and-bakery-pindwara-sirohi-sweet-shops-t6j1ny5u74.jpg",
        },
    ],
}

function onInit(userData) {
    document.getElementById('companyName').innerHTML = userData.shopName;
    // document.getElementById('ownerName').innerHTML = userData.ownerName;
}
// All Company Services
// fetch data form user subcollection Service
firebase.firestore().collection("users").doc(id).collection("services").onSnapshot(function (snapshot) {
    window.Service = []
    snapshot.forEach(function (taskValue) {
        return window.Service.push(taskValue.data())
    })
    console.log(window.Service)
    DisplayServices(window.Service)
})
function DisplayServices(serviceData) {
    serviceObj = serviceData;
    let html = "";
    serviceObj.forEach(function (siteTemplateData, i) {
        html += `
                <div class="col my-2">
                <div class="card shadow-sm text-center">
                    <div class="px-5">
                        <img class="my-4 service-img" src="${siteTemplateData['imgUrl']}">
                    </div>
                    <h4>${siteTemplateData['title']}</h4>
                    <p>${siteTemplateData['desc']}</p>
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
// fetch data form user subcollection Products
firebase.firestore().collection("users").doc(id).collection("products").onSnapshot(function (snapshot) {
    window.products = []
    snapshot.forEach(function (taskValue) {
        return window.products.push(taskValue.data())
    })
    // console.log(window.products)
    AllProducts(window.products)
})
function AllProducts(productsData) {
    productObj = productsData;
    let html = "";
    productObj.forEach(function (siteTemplateData, i) {
        html += `
                <div class="col mb-4">
                <div class="card hvr-shadow container">
                    <div class="card-body">
                        <img src="${siteTemplateData['imgUrl']}" alt="${siteTemplateData['itemName']}" class="product-img">
                    </div>
                    <h5> ${siteTemplateData['itemName']} </h5>
                    <h5 class="text-success">Rs.${siteTemplateData['itemPrice']}</h5>
                    <p class="text-truncate">${siteTemplateData['itemDescription']}</p>
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
// fetch data form user subcollection Gallery
firebase.firestore().collection("users").doc(id).collection("gallery").onSnapshot(function (snapshot) {
    window.gallery = []
    snapshot.forEach(function (taskValue) {
        return window.gallery.push(taskValue.data())
    })
    // console.log(window.gallery)
    AllGalleryImages(window.gallery)

})
function AllGalleryImages(galleryData) {
    let currentImg = galleryData['imgUrl'];
    imgObj = galleryData;
    let html = "";
    imgObj.forEach(function (galleryData, i) {
        html += `
            <div class="col mb-4" data-toggle="modal" data-target="#exampleModalCenter">
                <div class="card hvr-shadow">
                    <img src="${galleryData['imgUrl']}"
                        class="card-img-top">
                </div>
            </div>`;
        document.getElementById('currentImg').src = galleryData['imgUrl'];
    });
    let nodeElm = document.getElementById("imgGallery");
    if (imgObj.length != 0) {
        nodeElm.innerHTML = html;
    } else {
        nodeElm.innerHTML = ``;
    }
}


function Address(userData){
    document.getElementById('area').innerHTML=userData.address.area;
    document.getElementById('city').innerHTML=userData.address.city;
    document.getElementById('state').innerHTML=userData.address.state;
    // document.getElementById('country').innerHTML=userData.address.country;
    document.getElementById('zipCode').innerHTML=userData.address.zipCode;
    document.getElementById('shopName').innerHTML=userData.shopName;
    document.getElementById('PhoneNo').innerHTML=userData.phoneNo;
}
