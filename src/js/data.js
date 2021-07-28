const categories = [{
        id: 1,
        title: "Elektronik",
        url: "#",
        children: [{
                id: 7,
                parent_id: 1,
                title: "Bilgisayar",
                url: "#"
            },
            {
                id: 8,
                parent_id: 2,
                title: "Monitör",
                url: "#"
            },
            {
                id: 9,
                parent_id: 3,
                title: "Tablet",
                url: "#"
            }
        ]
    },
    {
        id: 2,
        title: "Moda",
        url: "#"
    },
    {
        id: 3,
        title: "Ev, Yaşam, Kırtasiye, Ofis",
        url: "#",
        children: [{
                id: 10,
                parent_id:1,
                title:"Kalem",
                url:"#"
            },
            {
                id: 11,
                parent_id:2,
                title:"Silgi",
                url:"#"
            },
            {
                id: 12,
                parent_id:3,
                title:"Açacak",
                url:"#"
            },
            {
                id: 13,
                parent_id:4,
                title:"Defter",
                url:"#"
            }

        ]
    },
    {
        id: 4,
        title: "Oto, Bahçe, Yapı Market",
        url: "#"
    },
    {
        id: 5,
        title: "Anne, Bebek, Oyuncak",
        url: "#"
    },
    {
        id: 6,
        title: "Spor, Outdoor",
        url: "#"
    },
    {
        id: 7,
        title: "Kozmetik, Kişisel Bakım",
        url: "#"
    },
    {
        id: 8,
        title: "Süpermarket, Pet Shop",
        url: "#"
    },
    {
        id: 9,
        title: "Kitap, Müzik, Film, Hobi",
        url: "#"
    },
];

export {
    categories
}